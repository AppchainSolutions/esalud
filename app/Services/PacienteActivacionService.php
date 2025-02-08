<?php

namespace App\Services;

use App\Models\Paciente;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Mail\PacienteActivacionMail;
use Illuminate\Support\Facades\Validator;
use App\Events\PacienteActivado;
use App\Exceptions\TokenActivacionInvalidoException;

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
     * @throws TokenActivacionInvalidoException
     */
    public function validarToken(string $tokenPlano): Paciente
    {
        // Buscar paciente con token de activación
        $paciente = Paciente::where('token_activacion', '!=', null)
            ->where('token_activacion_expira', '>', now())
            ->get()
            ->first(function ($paciente) use ($tokenPlano) {
                // Comparar tokens de manera más segura
                return Hash::check($tokenPlano, $paciente->token_activacion);
            });

        if (!$paciente) {
            Log::warning('Intento de activación con token inválido', [
                'token' => Str::limit($tokenPlano, 10, '...'),
                'timestamp' => now()
            ]);

            throw new TokenActivacionInvalidoException('Token de activación inválido o expirado');
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
        // Validar token de activación
        $paciente = $this->validarToken($tokenPlano);

        // Validar datos de usuario
        $this->validarDatosActivacion($datosUsuario);

        // Iniciar transacción de base de datos
        return DB::transaction(function () use ($paciente, $datosUsuario) {
            try {
                // Crear usuario
                $user = User::create([
                    'name' => $paciente->nombre,
                    'last_name' => $paciente->apellidos,
                    'rut' => $paciente->rut,
                    'email' => $paciente->email, // Usar email del paciente
                    'password' => Hash::make($datosUsuario['password']),
                    'rol' => 'paciente',
                    'isAdmin' => false
                ]);

                // Vincular usuario con paciente
                $paciente->update([
                    'cuenta_activada' => true,
                    'user_id' => $user->id,
                    'token_activacion' => null,
                    'token_activacion_expira' => null
                ]);

                // Disparar evento de cuenta activada
                event(new PacienteActivado($paciente, $user));

                // Registrar log de activación
                Log::info('Cuenta de paciente activada', [
                    'paciente_id' => $paciente->id,
                    'user_id' => $user->id,
                    'email' => $user->email
                ]);

                return $user;
            } catch (\Exception $e) {
                // Registrar error
                Log::error('Error al activar cuenta de paciente', [
                    'paciente_id' => $paciente->id,
                    'error' => $e->getMessage()
                ]);

                throw new \Exception('No se pudo activar la cuenta: ' . $e->getMessage());
            }
        });
    }

    /**
     * Validar datos de activación de cuenta
     * 
     * @param array $datos
     * @throws \Illuminate\Validation\ValidationException
     */
    private function validarDatosActivacion(array $datos)
    {
        $validator = Validator::make($datos, [
            'password' => [
                'required',
                'confirmed',
                'min:12',
                'regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/'
            ]
        ], [
            'password.min' => 'La contraseña debe tener al menos 12 caracteres.',
            'password.regex' => 'La contraseña debe incluir mayúsculas, minúsculas, números y caracteres especiales.',
            'password.confirmed' => 'La confirmación de contraseña no coincide.'
        ]);

        // Lanzar excepción si la validación falla
        $validator->validate();
    }
}
