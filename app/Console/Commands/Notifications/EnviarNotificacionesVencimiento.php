<?php

namespace App\Console\Commands\Notifications;

use Illuminate\Console\Command;
use App\Services\NotificacionService;
use Illuminate\Support\Facades\Log;

class EnviarNotificacionesVencimiento extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'notificaciones:vencimiento 
                            {--R|reintentar : Reintentar notificaciones fallidas}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Enviar notificaciones de elementos próximos a vencer';

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
        if ($this->option('reintentar')) {
            $this->info('Reintentando notificaciones fallidas...');
            $this->notificacionService->reintentarNotificacionesFallidas();
            $this->info('Reintentos completados.');
            return 0;
        }

        try {
            // Obtener lista de elementos próximos a vencer
            $elementosVencidos = []; // Lógica para obtener elementos vencidos

            // Enviar notificación
            $resultado = $this->notificacionService->enviarNotificacion('vencimiento', $elementosVencidos);

            if ($resultado) {
                $this->info('Notificaciones de vencimiento enviadas exitosamente.');
                return 0;
            } else {
                $this->error('No se pudieron enviar las notificaciones de vencimiento.');
                return 1;
            }
        } catch (\Exception $e) {
            Log::error('Error en EnviarNotificacionesVencimiento: ' . $e->getMessage());
            $this->error('Ocurrió un error al enviar notificaciones: ' . $e->getMessage());
            return 1;
        }
    }
}
