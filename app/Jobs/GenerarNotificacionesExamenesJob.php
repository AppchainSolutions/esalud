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
     *
     * @param int $diasAnticipacion Días de anticipación para notificación
     */
    public function __construct(int $diasAnticipacion = 30)
    {
        $this->diasAnticipacion = $diasAnticipacion;
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
            // 1. Generar notificaciones para exámenes próximos a vencer
            $notificaciones = $notificationService->generarNotificacionesVencimiento(false, $this->diasAnticipacion);

            Log::info('Notificaciones generadas', [
                'total_notificaciones' => $notificaciones->count()
            ]);

            // 2. Enviar notificaciones pendientes
            $pendientes = Notificacion::where('estado', 'pendiente')->get();
            $notificationService->enviarNotificaciones($pendientes);

            Log::info('Proceso de notificaciones de exámenes completado', [
                'notificaciones_generadas' => $notificaciones->count(),
                'notificaciones_enviadas' => $pendientes->count()
            ]);
        } catch (\Exception $e) {
            Log::error('Error en job de notificaciones de exámenes', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);

            // Relanzar la excepción para que Laravel maneje el reintento
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
