<?php

namespace App\Http\Controllers;

use App\Models\Paciente;
use App\Services\PacienteActivacionService;
use Esalud\EnhancedLogging\Traits\ContextualLogging;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Inertia\Inertia;

class PacienteActivacionController extends Controller
{
    use ContextualLogging;

    /**
     * Servicio de activación de paciente
     *
     * @var PacienteActivacionService
     */
    protected $activacionService;

    /**
     * Constructor
     *
     * @param PacienteActivacionService $activacionService
     */
    public function __construct(PacienteActivacionService $activacionService)
    {
        $this->activacionService = $activacionService;
    }

    /**
     * Mostrar formulario de activación
     *
     * @param Request $request
     * @param string $token
     * @return \Inertia\Response
     */
    public function mostrarFormulario(Request $request, string $token)
    {
        // Validar que la solicitud tenga una firma válida
        if (!$request->hasValidSignature()) {
            return redirect('/')->with('error', 'Enlace de activación inválido o expirado');
        }

        $paciente = Paciente::where('token_activacion', $token)->firstOrFail();

        // Verificar expiración del token
        if ($paciente->token_activacion_expira < now()) {
            return redirect()->route('login')->with('error', 'El token de activación ha expirado.');
        }

        // Renderizar formulario de activación
        return Inertia::render('Paciente/Activacion', [
            'token' => $token,
            'email' => $paciente->email,
        ]);
    }

    /**
     * Activar cuenta
     *
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function activarCuenta(Request $request)
    {
        // Añadir este log al INICIO del método
        Log::info('Entorno de Aplicación', [
            'env' => config('app.env'),
            'debug' => config('app.debug'),
            'url' => config('app.url'),
        ]);
        // Validar datos de entrada
        $request->validate([
            'password' => [
                'required',
                'confirmed',
                'min:12',
                function ($attribute, $value, $fail) {
                    $errors = [];
                    if (!preg_match('/[a-z]/', $value)) {
                        $errors[] = 'Debe contener al menos una letra minúscula';
                    }
                    if (!preg_match('/[A-Z]/', $value)) {
                        $errors[] = 'Debe contener al menos una letra mayúscula';
                    }
                    if (!preg_match('/\d/', $value)) {
                        $errors[] = 'Debe contener al menos un número';
                    }
                    if (!preg_match('/[!@#$%^&*]/', $value)) {
                        $errors[] = 'Debe contener al menos un carácter especial (!@#$%^&*)';
                    }

                    if (!empty($errors)) {
                        $fail(implode('. ', $errors));
                    }
                }
            ]
        ], [
            'password.min' => 'La contraseña debe tener al menos 12 caracteres',
            'password.confirmed' => 'Las contraseñas no coinciden',
        ]);

        try {
            $paciente = $this->activacionService->validarToken($request->input('token'));

            // Verificar expiración del token
            if ($paciente->token_activacion_expira < now()) {
                return Inertia::render('Paciente/Activacion', [
                    'token' => $request->input('token'),
                    'email' => $request->input('email'),
                    'error' => 'Token de activación inválido o expirado',
                ]);
            }

            //     // Verificar que el email corresponda al token
            if ($paciente->email !== $request->input('email')) {
                return Inertia::render('Paciente/Activacion', [
                    'token' => $request->input('token'),
                    'email' => $request->input('email'),
                    'error' => 'Correo electrónico no válido para este token de activación',
                ]);
            }

            //     // Verificar si la cuenta ya está activada
            if ($paciente->cuenta_activada) {
                return Inertia::render('Paciente/Activacion', [
                    'token' => $request->input('token'),
                    'email' => $request->input('email'),
                    'error' => 'La cuenta ya ha sido activada',
                ]);
            }

            // Activar cuenta y obtener el usuario
            $usuario = $this->activacionService->activarCuenta($request->input('token'), [
                'password' => $request->input('password'),
                'password_confirmation' => $request->input('password_confirmation'),
                'email' => $request->input('email'),
            ]);

            $this->debugLog('Activación de cuenta', ['usuario' => $usuario]);

            // Autenticar al usuario y generar sesión
            Auth::login($usuario, true); // true para "remember me"

            // Regenerar la sesión para seguridad
            request()->session()->regenerate();

            // Registrar evento de inicio de sesión
            $this->debugLog('Usuario autenticado después de activación', [
                'user_id' => $usuario->id,
                'email' => $usuario->email,
            ]);

            // Redirigir a la página de inicio
            return redirect()->intended(route('home'))
                ->with('status', 'Tu cuenta ha sido activada exitosamente. ¡Bienvenido/a!');

        } catch (\Illuminate\Validation\ValidationException $e) {
            // Redirigir de vuelta con errores de validación
            return back()->withErrors($e->validator);
        } catch (TokenActivacionInvalidoException $e) {
            // Verificar si el token corresponde a una cuenta ya activada
            $pacienteActivado = Paciente::where('token_activacion', $request->input('token'))
                ->where('cuenta_activada', true)
                ->first();

            if ($pacienteActivado) {
                return Inertia::render('Paciente/Activacion', [
                    'token' => $request->input('token'),
                    'email' => $request->input('email'),
                    'error' => 'La cuenta ya ha sido activada',
                ]);
            }

            // Renderizar formulario con mensaje de error
            return Inertia::render('Paciente/Activacion', [
                'token' => $request->input('token'),
                'email' => $request->input('email'),
                'error' => 'La cuenta ya ha sido activada',
            ]);
        } catch (\Exception $e) {
            $this->errorLog('Error en activación de cuenta', [
                'email' => $request->input('email'),
                'error' => $e->getMessage(),
            ]);

            // Renderizar formulario con mensaje de error
            return Inertia::render('Paciente/Activacion', [
                'token' => $request->input('token'),
                'email' => $request->input('email'),
                'error' => $e->getMessage() ?? 'Ocurrió un error al activar la cuenta',
            ]);
        }
    }
}
