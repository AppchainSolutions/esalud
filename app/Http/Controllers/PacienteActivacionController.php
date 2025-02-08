<?php

namespace App\Http\Controllers;

use App\Http\Requests\ActivacionPacienteRequest;
use App\Models\Paciente;
use App\Services\PacienteActivacionService;
use Esalud\EnhancedLogging\Traits\ContextualLogging;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class PacienteActivacionController extends Controller
{
    use ContextualLogging;

    /**
     * Servicio de activación de pacientes
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
        if (! $request->hasValidSignature()) {
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
            'email' => $paciente->email
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
        // Validar datos de entrada
        $request->validate([
            'token' => 'required|string',
            'email' => 'required|email',
            'password' => [
                'required', 
                'confirmed', 
                'min:12', 
                'regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/'
            ]
        ], [
            'password.min' => 'La contraseña debe tener al menos 12 caracteres.',
            'password.regex' => 'La contraseña debe incluir mayúsculas, minúsculas, números y caracteres especiales.',
            'password.confirmed' => 'Las contraseñas no coinciden.'
        ]);

        try {
            $paciente = $this->activacionService->validarToken($request->input('token'));

            // Verificar expiración del token
            if ($paciente->token_activacion_expira < now()) {
                return redirect('/')->with('error', 'Token de activación inválido o expirado');
            }

            // Verificar que el email corresponda al token
            if ($paciente->email !== $request->input('email')) {
                return redirect('/')->with('error', 'Correo electrónico no válido para este token de activación');
            }

            // Verificar si la cuenta ya está activada
            if ($paciente->cuenta_activada) {
                return redirect('/')->with('error', 'La cuenta ya ha sido activada');
            }

            // Activar cuenta
            $this->activacionService->activarCuenta($request->input('token'), [
                'password' => $request->input('password'),
                'password_confirmation' => $request->input('password_confirmation'),
                'email' => $request->input('email')
            ]);

            // Redirigir a home con mensaje de éxito
            return redirect('/')->with('status', 'Cuenta activada exitosamente');
        } catch (\Illuminate\Validation\ValidationException $e) {
            // Redirigir de vuelta con errores de validación
            return back()->withErrors($e->validator);
        } catch (TokenActivacionInvalidoException $e) {
            // Verificar si el token corresponde a una cuenta ya activada
            $pacienteActivado = Paciente::where('token_activacion', $request->input('token'))
                ->where('cuenta_activada', true)
                ->first();

            if ($pacienteActivado) {
                return redirect('/')->with('error', 'La cuenta ya ha sido activada');
            }

            // Redirigir de vuelta con mensaje de error
            return redirect('/')->with('error', $e->getMessage());
        } catch (\Exception $e) {
            $this->errorLog('Error en activación de cuenta', [
                'email' => $request->input('email'),
                'error' => $e->getMessage()
            ]);

            // Redirigir de vuelta con mensaje de error
            return redirect('/')->with('error', $e->getMessage() ?? 'Ocurrió un error al activar la cuenta');
        }
    }
}
