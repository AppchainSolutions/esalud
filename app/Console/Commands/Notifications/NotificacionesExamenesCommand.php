<?php

namespace App\Console\Commands\Notifications;

use App\Models\ExAldehido;
use App\Models\ExEpo;
use App\Models\ExHumoNegro;
use App\Models\ExMetal;
use App\Services\ExamenNotificationService;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Schema;

class NotificacionesExamenesCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    /*
    # Mostrar todos los tipos de exámenes próximos a vencer
    php artisan examenes:notificaciones --test

    # Mostrar solo exámenes ocupacionales
    php artisan examenes:notificaciones epo --test

    # Mostrar exámenes de aldehidos próximos a vencer en los próximos 3 meses
    php artisan examenes:notificaciones aldehido --test --meses=3

    # Modo normal de notificaciones para todos los tipos
    php artisan examenes:notificaciones

    # Modo normal de notificaciones para un tipo específico
    php artisan examenes:notificaciones aldehido*/
    
    protected $signature = 'examenes:notificaciones
                            {tipo? : Tipo específico de examen a procesar}
                            {--meses=2 : Número de meses para considerar exámenes próximos a vencer}
                            {--R|reintentar : Reintentar notificaciones fallidas}
                            {--dry-run : Simular generación sin enviar notificaciones}
                            {--log : Registrar detalles de las notificaciones}
                            {--test : Mostrar exámenes sin enviar notificaciones}
                            {--debug : Depurar modelos de exámenes}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Gestionar y revisar notificaciones de exámenes próximos a vencer';

    /**
     * Servicio de notificaciones de exámenes
     *
     * @var ExamenNotificationService
     */
    protected $examenNotificationService;

    /**
     * Tipos de exámenes disponibles
     *
     * @var array
     */
    protected $tiposExamenes = [
        'aldehido' => [
            'modelo' => ExAldehido::class,
            'nombre' => 'Exámenes de exposición a Aldehidos, Sulfatos y Oxidos',
            'descripcion' => 'Exámenes de exposición química',
        ],
        'humo_negro' => [
            'modelo' => ExHumoNegro::class,
            'nombre' => 'Exámenes de Humo Negro',
            'descripcion' => 'Exámenes de exposición a humo negro',
        ],
        'metales' => [
            'modelo' => ExMetal::class,
            'nombre' => 'Exámenes de Metales Pesados',
            'descripcion' => 'Exámenes de exposición a metales pesados',
        ],
    ];

    /**
     * Create a new command instance.
     *
     * @param ExamenNotificationService $examenNotificationService
     * @return void
     */
    public function __construct(ExamenNotificationService $examenNotificationService)
    {
        parent::__construct();
        $this->examenNotificationService = $examenNotificationService;
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        Log::info('Iniciando proceso de notificaciones de exámenes');

        $tipo = $this->argument('tipo');
        $diasAntelacion = (int) $this->option('meses') * 30; // Convertir meses a días
        $reintentar = $this->option('reintentar');
        $dryRun = $this->option('dry-run');
        $logDetalles = $this->option('log');
        $modoTest = $this->option('test');
        $modoDebug = $this->option('debug');

        // Modo de depuración de modelos
        if ($modoDebug) {
            $this->depurarModelosExamenes();
            return Command::SUCCESS;
        }

        try {
            // Validar tipo de examen
            if ($tipo && !array_key_exists($tipo, $this->tiposExamenes)) {
                $this->error("Tipo de examen no válido. Tipos disponibles: " . implode(', ', array_keys($this->tiposExamenes)));
                return Command::FAILURE;
            }

            // Modo de prueba o test
            if ($modoTest) {
                return $this->mostrarExamenesPorVencer($tipo, $diasAntelacion);
            }

            Log::info("Buscando exámenes próximos a vencer en los próximos {$diasAntelacion} días...");

            // Configurar modelos de exámenes según el tipo
            $modelosExamenes = $tipo 
                ? [$this->tiposExamenes[$tipo]['modelo']] 
                : array_column($this->tiposExamenes, 'modelo');

            // Establecer modelos de exámenes en el servicio
            $this->examenNotificationService->setModelosExamenes($modelosExamenes);

            // Obtener exámenes próximos a vencer
            $examenes = $this->examenNotificationService->obtenerExamenesProximosAVencer($diasAntelacion);

            Log::info("Se encontraron {$examenes->count()} exámenes próximos a vencer.");

            // Depuración detallada de exámenes
            if ($logDetalles) {
                $this->table(
                    ['ID', 'Tipo', 'Fecha Próximo Control', 'Paciente ID', 'Email Paciente'], 
                    $examenes->map(function($examen) {
                        return [
                            $examen->id,
                            $examen->tipo_examen,
                            $examen->fecha_prox_control,
                            $examen->paciente_id,
                            $examen->paciente->email ?? 'Sin email'
                        ];
                    })->toArray()
                );
            }

            // Reintentar si se solicita
            if ($reintentar) {
                $reintentosExitosos = $this->examenNotificationService->reintentarNotificacionesFallidas();
                Log::info("Notificaciones reintentadas: {$reintentosExitosos}");
            }

            // Generar notificaciones
            $notificaciones = $this->examenNotificationService->generarNotificacionesVencimiento($dryRun, $diasAntelacion);

            Log::info("Se generaron {$notificaciones->count()} notificaciones.");

            $this->info('Proceso de notificaciones completado.');
            return Command::SUCCESS;

        } catch (\Exception $e) {
            Log::error('Error en notificaciones de exámenes', [
                'message' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
                'dias_anticipacion' => $diasAntelacion,
            ]);
            $this->error("Error en notificaciones de exámenes: {$e->getMessage()}");
            return Command::FAILURE;
        }
    }

    /**
     * Mostrar exámenes próximos a vencer en modo test
     *
     * @param string|null $tipo
     * @param int $diasAntelacion
     * @return int
     */
    protected function mostrarExamenesPorVencer($tipo = null, $diasAntelacion = 60)
    {
        // Configurar modelos de exámenes según el tipo
        $modelosExamenes = $tipo 
            ? [$this->tiposExamenes[$tipo]['modelo']] 
            : array_column($this->tiposExamenes, 'modelo');

        // Establecer modelos de exámenes en el servicio
        $this->examenNotificationService->setModelosExamenes($modelosExamenes);

        // Definir rangos de búsqueda específicos
        $now = now();
        
        // Rango 1: Exactamente 2 meses desde ahora
        $fechaObjetivo1Ini = $now->copy()->startOfDay();
        $fechaObjetivo1Ter = $now->copy()->addMonths(2)->endOfDay();

        // Rango 2: 2 meses y una semana desde ahora
        $fechaObjetivo2Ini = $now->copy()->startOfDay();
        $fechaObjetivo2Ter = $now->copy()->addMonths(2)->addWeek()->endOfDay();

        // Configurar rango de búsqueda en el servicio
        $this->examenNotificationService->setConfig([
            'rango_meses_busqueda' => [
                'atras' => 0,
                'adelante' => 3  // Un poco más para asegurar la búsqueda
            ]
        ]);

        // Iterar sobre los tipos de exámenes
        foreach ($this->tiposExamenes as $tipoKey => $infoTipo) {
            // Saltar si se especificó un tipo y no coincide
            if ($tipo && $tipoKey !== $tipo) {
                continue;
            }

            // Establecer solo el modelo actual
            $this->examenNotificationService->setModelosExamenes([$infoTipo['modelo']]);

            // Realizar búsquedas en ambos rangos
            $resultados = [
                '2 meses' => $this->buscarExamenesEnRango($infoTipo, $fechaObjetivo1Ini, $fechaObjetivo1Ter),
                '2 meses + 1 semana' => $this->buscarExamenesEnRango($infoTipo, $fechaObjetivo2Ini, $fechaObjetivo2Ter)
            ];

            // Mostrar resultados
            $this->mostrarResultadosBusqueda($infoTipo, $resultados, $fechaObjetivo1Ini, $fechaObjetivo1Ter, $fechaObjetivo2Ini, $fechaObjetivo2Ter);
        }

        return Command::SUCCESS;
    }

    /**
     * Buscar exámenes en un rango de fechas específico
     *
     * @param array $tipoInfo
     * @param Carbon $fechaIni
     * @param Carbon $fechaTer
     * @return \Illuminate\Support\Collection
     */
    protected function buscarExamenesEnRango($tipoInfo, $fechaIni, $fechaTer)
    {
        // Establecer solo el modelo actual
        $this->examenNotificationService->setModelosExamenes([$tipoInfo['modelo']]);

        // Obtener exámenes
        return $this->examenNotificationService->obtenerExamenesProximosAVencer(180);  // Días amplios para capturar todo
    }

    /**
     * Mostrar resultados de la búsqueda
     *
     * @param array $tipoInfo
     * @param array $resultados
     * @param Carbon $fechaIni1
     * @param Carbon $fechaTer1
     * @param Carbon $fechaIni2
     * @param Carbon $fechaTer2
     */
    protected function mostrarResultadosBusqueda($tipoInfo, $resultados, $fechaIni1, $fechaTer1, $fechaIni2, $fechaTer2)
    {
        $this->info("\n" . str_repeat('=', strlen($tipoInfo['nombre'])));
        $this->info($tipoInfo['nombre']);
        $this->info(str_repeat('=', strlen($tipoInfo['nombre'])));
        
        $this->line("Rangos de búsqueda:");
        $this->line("  • 2 meses: " . $fechaIni1->format('d-m-Y') . " hasta " . $fechaTer1->format('d-m-Y'));
        $this->line("  • 2 meses + 1 semana: " . $fechaIni2->format('d-m-Y') . " hasta " . $fechaTer2->format('d-m-Y'));
        $this->line(str_repeat('-', 40));

        foreach ($resultados as $rango => $examenes) {
            $this->info("\nRango: $rango");
            
            if ($examenes->isEmpty()) {
                $this->line("No se encontraron {$tipoInfo['nombre']} para notificar en este período.");
                continue;
            }

            // Mostrar tabla de exámenes
            $this->table(
                ['ID', 'Fecha Próximo Control', 'Paciente ID', 'Email Paciente', 'Descripción'], 
                $examenes->map(function($examen) use ($tipoInfo) {
                    return [
                        $examen->id,
                        $examen->fecha_prox_control,
                        $examen->paciente_id,
                        $examen->paciente->email ?? 'Sin email',
                        $tipoInfo['descripcion']
                    ];
                })->toArray()
            );
        }
    }

    /**
     * Mostrar resumen de notificaciones generadas
     *
     * @param \Illuminate\Support\Collection $notificaciones
     * @param bool $logDetalles
     */
    protected function mostrarResumenNotificaciones($notificaciones, $logDetalles)
    {
        $this->info('Resumen de Notificaciones:');
        $this->info('Total de Notificaciones: ' . $notificaciones->count());

        // Agrupar por tipo de examen
        $porTipo = $notificaciones->groupBy(function ($notificacion) {
            return $notificacion->tipo_examen ?? 'Desconocido';
        });

        foreach ($porTipo as $tipoExamen => $grupo) {
            $this->info("- {$tipoExamen}: " . $grupo->count() . " notificaciones");

            if ($logDetalles) {
                foreach ($grupo as $notificacion) {
                    $this->line(sprintf(
                        "  * ID: %d, Estado: %s, Paciente: %d, Fecha: %s, Vencimiento: %s",
                        $notificacion->id,
                        $notificacion->estado,
                        $notificacion->paciente_id,
                        $notificacion->created_at,
                        $notificacion->fecha_prox_control ?? 'N/A'
                    ));
                }
            }
        }
    }

    /**
     * Depurar modelos de exámenes
     */
    protected function depurarModelosExamenes()
    {
        foreach ($this->tiposExamenes as $tipo => $info) {
            $modelo = $info['modelo'];
            $instancia = new $modelo();
            
            $this->info("Depuración de modelo: {$tipo}");
            $this->info("Tabla: " . $instancia->getTable());
            $this->info("Columnas: " . implode(', ', Schema::getColumnListing($instancia->getTable())));
            
            // Mostrar algunos registros
            $registros = $modelo::limit(5)->get();
            $this->table(
                ['ID', 'Fecha Próximo Control', 'Paciente ID'], 
                $registros->map(function($registro) {
                    return [
                        $registro->id,
                        $registro->fecha_prox_control ?? 'N/A',
                        $registro->paciente_id ?? 'N/A'
                    ];
                })->toArray()
            );
        }
    }
}
