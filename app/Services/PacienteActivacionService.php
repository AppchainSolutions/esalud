<?php

namespace App\Services;

use App\Models\Paciente;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Mail\PacienteActivacionMail;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;
use App\Events\PacienteActivado;

class PacienteActivacionService
{
    /**
     * Genera un token de activación para un paciente
     * 
     * @param Paciente $paciente
     * @return string
     */
    public function generarTokenActivacion(Paciente $paciente): string
    {
        // Generar token único de 64 caracteres
        $token = Str::random(64);

        // Almacenar token con hash para mayor seguridad
        $paciente->update([
            'token_activacion' => Hash::make($token),
            'token_activacion_expira' => now()->addHours(24)
        ]);

        return $token;
    }

    /**
     * Envía correo de activación al paciente
     * 
     * @param Paciente $paciente
     * @return bool
     */
    public function enviarCorreoActivacion(Paciente $paciente): bool
    {
        // Generar token de activación
        $tokenPlano = $this->generarTokenActivacion($paciente);

        try {
            // Enviar correo de activación
            Mail::to($paciente->email)->send(
                new PacienteActivacionMail($paciente, $tokenPlano)
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
     * Valida un token de activación
     * 
     * @param string $tokenPlano
     * @return Paciente
     */
    public function validarToken(string $tokenPlano): Paciente
    {
        // Buscar paciente con token vigente
        $paciente = Paciente::where(function($query) use ($tokenPlano) {
            $query->whereNotNull('token_activacion')
                  ->whereNotNull('token_activacion_expira')
                  ->where('token_activacion_expira', '>', now());
        })->get()->first(function($paciente) use ($tokenPlano) {
            // Verificar hash del token
            return Hash::check($tokenPlano, $paciente->token_activacion);
        });

        if (!$paciente) {
            throw new \Exception('Token de activación inválido o expirado');
        }

        return $paciente;
    }

    /**
     * Activa la cuenta de un paciente
     * 
     * @param string $tokenPlano
     * @param array $datosUsuario
     * @return User
     */
    public function activarCuenta(string $tokenPlano, array $datosUsuario): User
    {
        // Validar token
        $paciente = $this->validarToken($tokenPlano);

        // Validar que el paciente no tenga usuario
        if ($paciente->user_id) {
            throw new \Exception('La cuenta ya ha sido activada');
        }

        // Crear usuario
        $user = User::create([
            'name' => $paciente->nombres . ' ' . $paciente->apellidos,
            'email' => $paciente->email,
            'username' => $paciente->email,
            'password' => Hash::make($datosUsuario['password']),
            'rol' => 'paciente'
        ]);

        // Actualizar paciente
        $paciente->update([
            'user_id' => $user->id,
            'activo' => true,
            'token_activacion' => null,
            'token_activacion_expira' => null
        ]);

        // Disparar evento de cuenta activada
        event(new PacienteActivado($paciente, $user));

        return $user;
    }
}
