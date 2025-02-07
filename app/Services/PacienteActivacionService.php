<?php

namespace App\Services;

use App\Models\Paciente;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Mail\PacienteActivacionMail;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
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

        Log::info('paciente: ' . $paciente);

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
        $paciente = Paciente::where(function ($query) use ($tokenPlano) {
            $query->whereNotNull('token_activacion')
                ->whereNotNull('token_activacion_expira')
                ->where('token_activacion_expira', '>', now());
        })->get()->first(function ($paciente) use ($tokenPlano) {
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
     * @throws \Exception
     */
    public function activarCuenta(string $tokenPlano, array $datosUsuario): User
    {
        // Validar token
        $paciente = $this->validarToken($tokenPlano);

        // Validar datos de usuario
        $this->validarDatosActivacion($datosUsuario);

        $usuarioUpdated = User::create([
            'name' => $paciente->nombre,
            'lastname' => $paciente->apellidos,
            'email' => $paciente->email,
            'password' => Hash::make($datosUsuario['password']),
            'rol' => 'paciente',
            'activo' => true,
            'rut' => $paciente->rut
        ]);

        // Marcar paciente como activo
        $paciente->update([
            'cuenta_activada' => true,
            'user_id' => $usuarioUpdated->id,
            'token_activacion' => null,
            'token_activacion_expira' => null
        ]);

        Log::info('Paciente activado', [
            'paciente_id' => $paciente->id,
            'activo' => $paciente->activo,
            'user_id' => $paciente->user_id
        ]);

        // Disparar evento de cuenta activada
        event(new PacienteActivado($paciente, $usuarioUpdated));

        return $usuarioUpdated;
    }

    /**
     * Valida los datos de activación de cuenta
     * 
     * @param array $datosUsuario
     * @throws \Illuminate\Validation\ValidationException
     */
    private function validarDatosActivacion(array $datosUsuario)
    {
        Validator::make($datosUsuario, [
            'password' => [
                'required', 
                'confirmed', 
                'min:8', 
                'regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]+$/'
            ]
        ], [
            'password.min' => 'La contraseña debe tener al menos 8 caracteres.',
            'password.regex' => 'La contraseña debe contener al menos una mayúscula, una minúscula y un número.',
            'password.confirmed' => 'La confirmación de contraseña no coincide.'
        ])->validate();
    }
}
