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

        // Verificar si el trait está correctamente importado
        if (!method_exists($this, 'debugLog')) {
            Log::channel('single')->warning('ContextualLogging trait no está correctamente implementado');
            return response()->json(['error' => 'Logging no disponible'], 500);
        }

        try {
            // Verificar autenticación
            if (!Auth::check()) {
                $this->errorLog('Intento de acceso sin autenticación', [
                    'method' => 'personal',
                    'ip' => request()->ip()
                ]);
                return response()->json(['error' => 'No autenticado'], 401);
            }

            $user_id = Auth::user()->id;
            $user = Auth::user();

            // Log de depuración con información detallada
            $this->debugLog('Inicio método personal', [
                'user_id' => $user_id,
                'user_email' => $user->email,
                'user_name' => $user->name,
                'method' => __METHOD__
            ]);

            // Verificar existencia de paciente
            $paciente = Paciente::where('user_id', $user_id)
                ->with('afp', 'nacionalidad', 'genero', 'estadoCivil', 'nivelInstruccion', 'puebloOriginario', 'religion', 'prevision', 'seguroSalud', 'unidad', 'area', 'ceco', 'empresa')
                ->first();

            if (!$paciente) {
                $this->errorLog('Paciente no encontrado', [
                    'user_id' => $user_id,
                    'method' => __METHOD__
                ]);
                return response()->json(['error' => 'Paciente no encontrado'], 404);
            }

            // Log de información con datos del paciente
            $this->infoLog('Datos de Paciente para Perfil Personal', [
                'user_id' => $user_id,
                'paciente_id' => $paciente->id,
                'nombre' => $paciente->nombre,
                'email' => $paciente->email,
                'rut' => $paciente->rut,
                'method' => __METHOD__
            ]);

            return Inertia::render('Paciente/MiPerfilPersonal', [
                'paciente' => $paciente,
                'user' => $user
            ]);
        } catch (\Exception $e) {
            // Log de error detallado
            $this->errorLog('Error en método personal de MiPerfilController', [
                'error_message' => $e->getMessage(),
                'error_trace' => $e->getTraceAsString(),
                'method' => __METHOD__
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
