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
use Esalud\EnhancedLogging\Traits\ContextualLogging;

class PacienteActivacionService
{
    use ContextualLogging;

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
            $this->errorLog('Token de activación inválido o expirado', [
                'token' => Str::limit($tokenPlano, 10, '...'),
                'timestamp' => now()
            ]);
            throw new TokenActivacionInvalidoException('Token de activación inválido o expirado');
        }

        $this->debugLog('Token de activación validado exitosamente', [
            'paciente_id' => $paciente->id,
            'email' => $paciente->email,
            'token_expira' => $paciente->token_activacion_expira
        ]);

        return $paciente;
    }

    /**
     * Activa la cuenta de un paciente
     * 
     * @param string $tokenPlano Token de activación
     * @param array $datosUsuario Datos para crear usuario
     * @return User
     * @throws TokenActivacionInvalidoException
     */
    public function activarCuenta(string $tokenPlano, array $datosUsuario): User
    {
        // Validar token
        $paciente = $this->validarToken($tokenPlano);

        // Validar datos de usuario
        $validator = Validator::make($datosUsuario, [
            'password' => [
                'required', 
                'string', 
                'min:12', 
                'confirmed',
                'regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/'
            ]
        ]);

        if ($validator->fails()) {
            $this->errorLog('Validación de datos de usuario fallida', [
                'paciente_id' => $paciente->id,
                'errores' => $validator->errors()->toArray()
            ]);
            throw new \Illuminate\Validation\ValidationException($validator);
        }

        // Iniciar transacción para garantizar atomicidad
        return DB::transaction(function () use ($paciente, $datosUsuario, $tokenPlano) {
            try {
                // Crear usuario asociado al paciente
                $user = User::create([
                    'name' => $paciente->nombre,
                    'lastname' => $paciente->apellidos,
                    'email' => $paciente->email,
                    'password' => Hash::make($datosUsuario['password']),
                    'rol' => 'paciente',
                    'activo' => true,
                    'rut' => $paciente->rut
                ]);

                // Vincular usuario con paciente
                $paciente->update([
                    'user_id' => $user->id,
                    'cuenta_activada' => true,
                    'token_activacion' => null,
                    'token_activacion_expira' => null
                ]);

                // Registrar eventos de seguridad
                $this->debugLog('Cuenta de paciente activada', [
                    'paciente_id' => $paciente->id,
                    'user_id' => $user->id,
                    'email' => $user->email
                ]);

                // Emitir evento de cuenta activada
                event(new PacienteActivado($paciente, $user));

                return $user;
            } catch (\Exception $e) {
                $this->errorLog('Error al activar cuenta de paciente', [
                    'paciente_id' => $paciente->id,
                    'error' => $e->getMessage()
                ]);

                throw $e;
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

    // Método de prueba para verificar logging
    public function pruebaLogging()
    {
        // Log de depuración con contexto
        $this->debugLog('Prueba de sistema de logging con contexto', [
            'metodo_prueba' => 'pruebaLogging',
            'parametros' => 'Sin parámetros'
        ]);

        // Log de error con contexto
        $this->errorLog('Ejemplo de log de error', [
            'nivel_severidad' => 'prueba',
            'datos_adicionales' => [
                'clave1' => 'valor1',
                'clave2' => 'valor2'
            ]
        ]);
    }
}
