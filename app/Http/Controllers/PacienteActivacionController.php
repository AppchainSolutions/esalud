<?php

namespace App\Http\Controllers;

use App\Http\Requests\ActivacionPacienteRequest;
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
     * @param string $token
     * @return \Inertia\Response
     */
    public function mostrarFormulario(string $token)
    {
        try {
            // Validar token
            $paciente = $this->activacionService->validarToken($token);

            $this->debugLog('Mostrando formulario de activación', [
                'paciente_id' => $paciente->id,
                'email' => $paciente->email
            ]);

            return Inertia::render('Paciente/Activacion', [
                'token' => $token,
                'paciente' => $paciente
            ]);
        } catch (\Exception $e) {
            $this->errorLog('Error al mostrar formulario de activación', [
                'token' => $token,
                'error' => $e->getMessage()
            ]);

            // Token inválido o expirado
            return Inertia::render('Paciente/ActivacionError', [
                'mensaje' => 'El enlace de activación no es válido o ha expirado.'
            ]);
        }
    }

    /**
     * Procesar activación de cuenta
     *
     * @param ActivacionPacienteRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function activarCuenta(ActivacionPacienteRequest $request)
    {
        try {
            $this->debugLog('Iniciando activación de cuenta', [
                'email' => $request->input('email'),
                'token' => Str::limit($request->input('token'), 10, '...')
            ]);

            // Activar cuenta usando el servicio
            $user = $this->activacionService->activarCuenta(
                $request->input('token'), 
                $request->validated()
            );

            $this->debugLog('Cuenta activada exitosamente', [
                'user_id' => $user->id,
                'email' => $user->email
            ]);

            // Iniciar sesión
            Auth::login($user);

            // Redirigir al dashboard de paciente
            return redirect()->route('paciente.dashboard')
                ->with('success', 'Cuenta activada exitosamente');
        } catch (\Exception $e) {
            $this->errorLog('Error en activación de cuenta', [
                'email' => $request->input('email'),
                'error' => $e->getMessage()
            ]);

            // Redirigir de vuelta con mensaje de error
            return back()->withErrors([
                'error' => $e->getMessage() ?? 'Ocurrió un error al activar la cuenta'
            ]);
        }
    }
}
