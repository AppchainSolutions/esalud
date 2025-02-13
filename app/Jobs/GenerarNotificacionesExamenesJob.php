<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

use App\Services\ExamenNotificationService;
use App\Models\Notificacion;

class GenerarNotificacionesExamenesJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    // Número máximo de intentos de ejecución del job
    public $tries = 3;

    // Tiempo máximo de ejecución
    public $timeout = 300; // 5 minutos

    // Días de anticipación para notificación
    protected $diasAnticipacion;

    /**
     * Crear una nueva instancia del job
     */
    public function __construct($diasAnticipacion = null)
    {
        // Si no se proporcionan días, usar configuración por defecto
        $this->diasAnticipacion = $diasAnticipacion ?? [
            config('notifications.examenes.dias_min', 30),
            config('notifications.examenes.dias_max', 37)
        ];
    }

    /**
     * Ejecutar el job
     */
    public function handle(ExamenNotificationService $notificationService)
    {
        Log::info('Iniciando job de generación de notificaciones de exámenes', [
            'dias_anticipacion' => $this->diasAnticipacion
        ]);

        try {
            // Configurar modelos desde configuración si no están definidos
            if (empty($notificationService->getModelosExamenes())) {
                $notificationService->setModelosExamenes(
                    config('notifications.examenes.modelos', [])
                );
            }

            // Generar notificaciones con el rango configurado
            $notificaciones = $notificationService->generarNotificacionesVencimiento(
                false, 
                $this->diasAnticipacion
            );

            Log::info('Notificaciones generadas', [
                'total_notificaciones' => $notificaciones->count()
            ]);

            Log::info('Job de notificaciones de exámenes completado', [
                'notificaciones_generadas' => $notificaciones->count(),
                'dias_anticipacion' => $this->diasAnticipacion
            ]);

            // Enviar notificaciones
            $notificationService->enviarNotificaciones($notificaciones);

        } catch (\Exception $e) {
            Log::error('Error en job de notificaciones de exámenes', [
                'message' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
                'dias_anticipacion' => $this->diasAnticipacion
            ]);

            // Opcional: Reintento de notificaciones fallidas
            $notificationService->reintentarNotificacionesFallidas();

            throw $e;
        }
    }

    /**
     * Manejar fallo en el job
     *
     * @param \Exception $exception
     */
    public function failed(\Exception $exception)
    {
        Log::error('Job de notificaciones de exámenes ha fallado definitivamente', [
            'error' => $exception->getMessage(),
            'trace' => $exception->getTraceAsString()
        ]);
    }
}
