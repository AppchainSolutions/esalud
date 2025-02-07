<?php

namespace App\Listeners;

use App\Events\PacienteActivado;
use App\Models\RegistroActividad;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Log;

class RegistrarActivacionPaciente implements ShouldQueue
{
    /**
     * Handle the event.
     */
    public function handle(PacienteActivado $event): void
    {
        $paciente = $event->paciente;
        $user = $event->user;

        try {
            // Registrar actividad de activación
            RegistroActividad::create([
                'usuario_id' => $user->id,
                'paciente_id' => $paciente->id,
                'tipo_evento' => 'activacion_cuenta',
                'descripcion' => 'Cuenta de paciente activada',
                'ip_address' => request()->ip(),
                'user_agent' => request()->userAgent()
            ]);

            // Registro en log
            Log::info('Paciente activado', [
                'paciente_id' => $paciente->id,
                'email' => $paciente->email,
                'user_id' => $user->id
            ]);
        } catch (\Exception $e) {
            // Registrar error en log
            Log::error('Error al registrar activación de paciente', [
                'paciente_id' => $paciente->id,
                'error' => $e->getMessage()
            ]);
        }
    }
}
