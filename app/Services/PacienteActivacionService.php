<?php

namespace App\Services;

use App\Models\Paciente;
use App\Mail\ActivacionPacienteMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class PacienteActivacionService
{
    public function generarYEnviarActivacion(Paciente $paciente)
    {
        try {
            // Generar token único
            $token = $paciente->generarTokenActivacion();

            // Enviar correo de activación
            Mail::to($paciente->email)->send(new ActivacionPacienteMail($paciente, $token));

            Log::info('Correo de activación enviado', [
                'paciente_id' => $paciente->id,
                'email' => $paciente->email
            ]);

            return true;
        } catch (\Exception $e) {
            Log::error('Error al enviar correo de activación', [
                'paciente_id' => $paciente->id,
                'error' => $e->getMessage()
            ]);

            return false;
        }
    }

    public function reenviarActivacion(Paciente $paciente)
    {
        // Si ya tiene usuario, no permitir reenvío
        if ($paciente->tieneAcceso()) {
            return false;
        }

        return $this->generarYEnviarActivacion($paciente);
    }
}
