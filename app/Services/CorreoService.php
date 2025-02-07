<?php

namespace App\Services;

use App\Mail\PacienteActivacionMail;
use App\Models\Paciente;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class CorreoService
{
    /**
     * Enviar correo de activación de cuenta
     *
     * @param Paciente $paciente
     * @param string $token
     * @return bool
     */
    public function enviarCorreoActivacion(Paciente $paciente, string $token): bool
    {
        try {
            // Enviar correo de activación
            Mail::to($paciente->email)->send(
                new PacienteActivacionMail($paciente, $token)
            );

            // Registrar evento de envío
            Log::info('Correo de activación enviado', [
                'paciente_id' => $paciente->id,
                'email' => $paciente->email
            ]);

            return true;
        } catch (\Exception $e) {
            // Registrar error de envío
            Log::error('Error al enviar correo de activación', [
                'paciente_id' => $paciente->id,
                'email' => $paciente->email,
                'error' => $e->getMessage()
            ]);

            return false;
        }
    }

    /**
     * Método de prueba para verificar configuración de correo
     *
     * @return bool
     */
    public function probarConfiguracionCorreo(): bool
    {
        try {
            Mail::raw('Prueba de configuración de correo Brevo', function ($message) {
                $message->to('omar.ahumadag@gmail.com')
                        ->subject('Prueba de Configuración de Correo');
            });

            Log::info('Prueba de correo enviada exitosamente');
            return true;
        } catch (\Exception $e) {
            Log::error('Error en prueba de configuración de correo', [
                'error' => $e->getMessage()
            ]);

            return false;
        }
    }
}
