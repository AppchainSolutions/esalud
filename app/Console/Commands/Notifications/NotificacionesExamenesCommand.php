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
    protected $signature = 'notificaciones:examenes
                            {accion : Acción a realizar (generar|revisar|enviar)}
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
    protected $description = 'Gestionar, generar y enviar notificaciones de exámenes próximos a vencer';

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
        $accion = $this->argument('accion');
        $tipo = $this->argument('tipo');
        $meses = $this->option('meses');
        $reintentar = $this->option('reintentar');
        $dryRun = $this->option('dry-run');
        $log = $this->option('log');
        $test = $this->option('test');
        $debug = $this->option('debug');

        switch ($accion) {
            case 'generar':
                return $this->generarNotificaciones($tipo, $meses, $dryRun, $log, $debug);
            case 'revisar':
                return $this->revisarNotificaciones($tipo, $meses, $test, $debug);
            case 'enviar':
                return $this->enviarNotificaciones($tipo, $reintentar, $dryRun, $log);
            default:
                $this->error('Acción no válida. Use generar, revisar o enviar.');
                return Command::FAILURE;
        }
    }

    protected function generarNotificaciones($tipo, $meses, $dryRun, $log, $debug)
    {
        // Lógica de generación de notificaciones
        if ($debug) {
            $this->debugModelosExamenes();
        }

        $notificaciones = $this->examenNotificationService->generarNotificaciones(
            $tipo ? [$tipo] : array_keys($this->tiposExamenes),
            $meses,
            $dryRun
        );

        if ($log) {
            $this->logNotificaciones($notificaciones);
        }

        return $notificaciones ? Command::SUCCESS : Command::FAILURE;
    }

    protected function revisarNotificaciones($tipo, $meses, $test, $debug)
    {
        // Lógica de revisión de notificaciones
        if ($debug) {
            $this->debugModelosExamenes();
        }

        $examenes = $this->examenNotificationService->obtenerExamenesPorVencer(
            $tipo ? [$tipo] : array_keys($this->tiposExamenes),
            $meses
        );

        if ($test) {
            $this->mostrarExamenesPorVencer($examenes);
        }

        return $examenes ? Command::SUCCESS : Command::FAILURE;
    }

    protected function enviarNotificaciones($tipo, $reintentar, $dryRun, $log)
    {
        // Lógica de envío de notificaciones
        $notificaciones = $this->examenNotificationService->enviarNotificaciones(
            $tipo ? [$tipo] : array_keys($this->tiposExamenes),
            $reintentar,
            $dryRun
        );

        if ($log) {
            $this->logNotificaciones($notificaciones);
        }

        return $notificaciones ? Command::SUCCESS : Command::FAILURE;
    }

    protected function debugModelosExamenes()
    {
        foreach ($this->tiposExamenes as $tipo => $config) {
            $modelo = $config['modelo'];
            $this->info("Modelo para $tipo: " . $modelo);
            $this->info("Tabla: " . (new $modelo)->getTable());
        }
    }

    protected function mostrarExamenesPorVencer($examenes)
    {
        $this->table(
            ['Tipo', 'Cantidad', 'Próximos a Vencer'],
            array_map(function($tipo, $datos) {
                return [
                    $this->tiposExamenes[$tipo]['nombre'],
                    count($datos),
                    implode(', ', array_slice(array_column($datos, 'id'), 0, 5))
                ];
            }, array_keys($examenes), $examenes)
        );
    }

    protected function logNotificaciones($notificaciones)
    {
        Log::channel('notifications')->info('Notificaciones de Exámenes', [
            'total' => count($notificaciones),
            'detalles' => $notificaciones
        ]);
    }
}
