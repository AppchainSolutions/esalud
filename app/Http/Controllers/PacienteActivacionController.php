<?php

namespace App\Http\Controllers;

use App\Http\Requests\ActivacionPacienteRequest;
use App\Services\PacienteActivacionService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class PacienteActivacionController extends Controller
{
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

            return Inertia::render('Paciente/Activacion', [
                'token' => $token,
                'paciente' => $paciente
            ]);
        } catch (\Exception $e) {
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
            // Activar cuenta
            $user = $this->activacionService->activarCuenta(
                $request->token, 
                $request->validated()
            );

            // Iniciar sesión
            Auth::login($user);

            // Redirigir al dashboard de paciente
            return redirect()->route('paciente.dashboard')
                ->with('success', 'Cuenta activada exitosamente');
        } catch (\Exception $e) {
            // Error en la activación
            return back()->withErrors([
                'error' => $e->getMessage()
            ]);
        }
    }
}
