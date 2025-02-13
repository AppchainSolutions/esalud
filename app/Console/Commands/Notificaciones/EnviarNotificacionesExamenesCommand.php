<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Notificacion;
use App\Services\ExamenNotificationService;

class EnviarNotificacionesExamenesCommand extends Command
{
    protected $signature = 'notificaciones:enviar';
    protected $description = 'Enviar notificaciones de exámenes pendientes';

    public function handle(ExamenNotificationService $notificationService)
    {
        // Obtener notificaciones pendientes
        $notificaciones = Notificacion::where('estado', 'pendiente')->get();

        $this->info("Enviando {$notificaciones->count()} notificaciones...");

        // Enviar notificaciones
        $notificationService->enviarNotificaciones($notificaciones);

        $this->info('Proceso de envío de notificaciones completado.');
    }
}
