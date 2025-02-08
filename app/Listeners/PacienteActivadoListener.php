<?php

namespace App\Listeners;

use App\Events\PacienteActivado;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Log;
use Esalud\EnhancedLogging\Traits\ContextualLogging;

class PacienteActivadoListener implements ShouldQueue
{
    use ContextualLogging;

    /**
     * Handle the event.
     */
    public function handle(PacienteActivado $event): void
    {
        // Registrar activación de cuenta
        $this->debugLog('Procesando evento de cuenta de paciente activada', [
            'paciente_id' => $event->paciente->id,
            'user_id' => $event->user->id,
            'email' => $event->user->email
        ]);

        // Aquí puedes agregar lógica adicional como:
        // - Enviar correo de bienvenida
        // - Registrar métricas
        // - Notificar a otros sistemas
    }

    /**
     * Manejar fallo en el procesamiento del evento
     */
    public function failed(PacienteActivado $event, \Exception $exception): void
    {
        $this->errorLog('Fallo al procesar evento de activación de paciente', [
            'paciente_id' => $event->paciente->id,
            'error' => $exception->getMessage()
        ]);
    }
}
