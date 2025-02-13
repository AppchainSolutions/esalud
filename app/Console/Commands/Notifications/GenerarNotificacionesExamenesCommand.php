<?php

namespace App\Console\Commands\Notifications;

use Illuminate\Console\Command;
use App\Services\NotificacionService;
use App\Models\Notificacion;
use Illuminate\Support\Facades\Log;

class GenerarNotificacionesExamenesCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'notificaciones:generar-examenes 
                            {--log : Registrar detalles de las notificaciones} 
                            {--dry-run : Simular generación sin enviar notificaciones}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generar y revisar notificaciones para exámenes próximos a vencer';

    /**
     * Servicio de notificaciones
     *
     * @var NotificacionService
     */
    protected $notificacionService;

    /**
     * Create a new command instance.
     *
     * @param NotificacionService $notificacionService
     * @return void
     */
    public function __construct(NotificacionService $notificacionService)
    {
        parent::__construct();
        $this->notificacionService = $notificacionService;
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->info('Iniciando proceso de notificaciones de exámenes...');

        // Verificar si es una ejecución de prueba
        $dryRun = $this->option('dry-run');
        $logDetalles = $this->option('log');

        try {
            // Obtener lista de exámenes próximos a vencer
            $examenesVencidos = $this->notificacionService->generarNotificacionesVencimiento($dryRun);

            // Mostrar resumen de notificaciones
            $this->mostrarResumenNotificaciones($examenesVencidos, $logDetalles);

            // Registrar en log si es necesario
            if ($logDetalles) {
                $this->registrarDetallesNotificaciones($examenesVencidos);
            }

            $this->info('Proceso de notificaciones completado.');
            return Command::SUCCESS;

        } catch (\Exception $e) {
            $this->error('Error al generar notificaciones: ' . $e->getMessage());
            Log::error('Error en generación de notificaciones de exámenes: ' . $e->getMessage());
            return Command::FAILURE;
        }
    }

    /**
     * Mostrar resumen de notificaciones generadas
     *
     * @param array $notificaciones
     * @param bool $logDetalles
     */
    protected function mostrarResumenNotificaciones($notificaciones, $logDetalles)
    {
        $this->info('Resumen de Notificaciones:');
        $this->info('Total de Notificaciones: ' . count($notificaciones));

        // Agrupar por tipo de examen
        $porTipo = collect($notificaciones)->groupBy(function($notificacion) {
            return class_basename(get_class($notificacion->examen));
        });

        foreach ($porTipo as $tipoExamen => $grupo) {
            $this->info("- {$tipoExamen}: " . count($grupo) . " notificaciones");

            if ($logDetalles) {
                $this->table(
                    ['Paciente', 'Fecha Próximo Control', 'Email'],
                    $grupo->map(function($notificacion) {
                        return [
                            $notificacion->examen->paciente->nombre_completo,
                            $notificacion->examen->fecha_prox_control->format('d/m/Y'),
                            $notificacion->examen->paciente->user->email ?? 'Sin email'
                        ];
                    })->toArray()
                );
            }
        }
    }

    /**
     * Registrar detalles de notificaciones en log
     *
     * @param array $notificaciones
     */
    protected function registrarDetallesNotificaciones($notificaciones)
    {
        Log::info('Detalles de Notificaciones de Exámenes:', [
            'total_notificaciones' => count($notificaciones),
            'notificaciones' => $notificaciones->map(function($notificacion) {
                return [
                    'tipo_examen' => class_basename(get_class($notificacion->examen)),
                    'paciente_id' => $notificacion->examen->paciente_id,
                    'fecha_prox_control' => $notificacion->examen->fecha_prox_control,
                    'estado' => $notificacion->estado
                ];
            })
        ]);
    }
}
