<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use App\Jobs\GenerarNotificacionesExamenesJob;
use App\Services\ExamenNotificationService;
use App\Models\Examen;
use App\Models\ExamenLaboratorio;

class ProgramarNotificacionesExamenesCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'notificaciones:programar 
                            {--dias=30 : Días de anticipación para notificaciones}
                            {--dias-max= : Días máximos de anticipación para notificaciones}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Programar notificaciones de exámenes próximos a vencer';

    /**
     * Ejecutar el comando
     *
     * @return int
     */
    public function handle(ExamenNotificationService $notificationService)
    {
        // Obtener días de configuración o parámetros
        $diasMin = $this->option('dias') ?? 
            config('notifications.examenes.dias_min', 30);
        
        $diasMax = $this->option('dias-max') ?? 
            config('notifications.examenes.dias_max', 37);

        $diasAnticipacion = [$diasMin, $diasMax];

        $this->info("Programando notificaciones de exámenes");
        $this->info("Días de anticipación: Min {$diasMin}, Max {$diasMax}");

        try {
            // Configurar modelos desde configuración
            $notificationService->setModelosExamenes(
                config('notifications.examenes.modelos', [])
            );

            // Generar notificaciones
            $notificaciones = $notificationService->generarNotificacionesVencimiento(
                false, 
                $diasAnticipacion
            );

            $this->info("Notificaciones generadas: {$notificaciones->count()}");

            // Despachar job para procesar notificaciones
            GenerarNotificacionesExamenesJob::dispatch($diasAnticipacion)
                ->onQueue(config('notifications.examenes.cola', 'notifications'))
                ->delay(now()->addMinutes(
                    config('notifications.examenes.retraso_minutos', 5)
                ));

            return self::SUCCESS;
        } catch (\Exception $e) {
            $this->error("Error al programar notificaciones: " . $e->getMessage());
            Log::error('Error en programación de notificaciones', [
                'message' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
                'dias_anticipacion' => $diasAnticipacion
            ]);

            return self::FAILURE;
        }
    }
}
