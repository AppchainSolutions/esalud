<?php

namespace App\Http\Controllers\Paciente;

use App\Http\Controllers\Controller;
use App\Models\Paciente;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Esalud\EnhancedLogging\Traits\ContextualLogging;

class MiPerfilController extends Controller
{
    use ContextualLogging;

    public function personal()
    {
        // Log directo de Laravel
        Log::channel('single')->debug('Método personal de MiPerfilController iniciado');

        try {
            // Verificar autenticación
            if (!Auth::check()) {
                Log::channel('single')->error('Intento de acceso sin autenticación', [
                    'method' => 'personal',
                    'ip' => request()->ip()
                ]);
                return response()->json(['error' => 'No autenticado'], 401);
            }

            $user = Auth::user();
            $user_id = $user->id;

            Log::channel('single')->info('Datos de usuario autenticado', [
                'user_id' => $user_id,
                'user_email' => $user->email,
                'user_name' => $user->name,
                'user_rol' => $user->rol
            ]);

            // Buscar paciente con información detallada
            $paciente = Paciente::where('user_id', $user_id)
                ->with([
                    'afp', 
                    'nacionalidad', 
                    'genero', 
                    'estadoCivil', 
                    'nivelInstruccion', 
                    'puebloOriginario', 
                    'religion', 
                    'prevision', 
                    'seguroSalud', 
                    'unidad', 
                    'area', 
                    'ceco', 
                    'empresa'
                ])
                ->first();

            // Log detallado de paciente
            if ($paciente) {
                Log::channel('single')->info('Datos de Paciente encontrado', [
                    'paciente_id' => $paciente->id,
                    'nombre' => $paciente->nombre,
                    'email' => $paciente->email,
                    'rut' => $paciente->rut,
                    'cuenta_activada' => $paciente->cuenta_activada
                ]);
            } else {
                Log::channel('single')->warning('Paciente no encontrado', [
                    'user_id' => $user_id
                ]);
            }

            // Preparar datos para la vista
            $viewData = [
                'paciente' => $paciente,
                'user' => $user
            ];

            // Log de datos enviados a la vista
            Log::channel('single')->debug('Datos enviados a la vista MiPerfilPersonal', [
                'paciente_id' => $paciente ? $paciente->id : null,
                'user_id' => $user->id
            ]);

            // Renderizar vista Inertia
            return Inertia::render('Paciente/MiPerfilPersonal', $viewData);
        } catch (\Exception $e) {
            // Log de error detallado
            Log::channel('single')->error('Error en método personal de MiPerfilController', [
                'error_message' => $e->getMessage(),
                'error_trace' => $e->getTraceAsString(),
                'user_id' => $user_id ?? 'No autenticado'
            ]);

            // Lanzar excepción para manejo global de errores
            throw $e;
        }
    }

    public function medico()
    {
        $user_id = Auth::user()->id;

        $paciente = Paciente::where('user_id', "=", $user_id)
            ->select('id')
            ->with([
                'alergia',
                'enfermedad',
                'cirugia',
                'factorRiesgo',
                'medicamento',
                'vacuna',
                'familiar',
                'diat',
                'diep',
                // 'certificacion',
                // 'estadoCertificacion',
                'exAsma',
                'exAlcohol',
                'exEpo',
                'exEquilibrio',
                'exPsico',
                'exPVTMERT',
                'exRespirador',
                'exRuido',
                'exSalud',
                'exSilice',
                'exSolvente',
                'exSomnolencia',
            ])
            ->firstOrFail()
            ->toArray();

        return Inertia::render('Paciente/MiPerfilMedico', ['paciente' => $paciente]);
    }

    public function update(Request $request)
    {
        $paciente = Auth::user()->paciente;

        if (!$paciente) {
            return redirect()->route('paciente.registro')
                ->with('error', 'Debes completar tu registro de paciente');
        }

        $validatedData = $request->validate([
            'telefono' => 'nullable|string|max:20',
            'direccion' => 'nullable|string|max:255',
        ]);

        $paciente->update($validatedData);

        return redirect()->back()->with('success', 'Perfil actualizado correctamente');
    }
}
