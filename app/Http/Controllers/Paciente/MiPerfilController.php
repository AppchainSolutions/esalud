<?php

namespace App\Http\Controllers\Paciente;

use App\Http\Controllers\Controller;
use App\Models\Paciente;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Esalud\EnhancedLogging\Traits\ContextualLogging;

class MiPerfilController extends Controller
{
    use ContextualLogging;

    public function personal()
    {
        try {
            $user_id = Auth::user()->id;
            $user = Auth::user();

            \Log::channel('single')->info('Iniciando método personal de MiPerfilController', [
                'user_id' => $user_id,
                'user_email' => $user->email,
                'user_name' => $user->name
            ]);

            $paciente = Paciente::where('user_id', $user_id)
                ->with('afp', 'nacionalidad', 'genero', 'estadoCivil', 'nivelInstruccion', 'puebloOriginario', 'religion', 'prevision', 'seguroSalud', 'unidad', 'area', 'ceco', 'empresa')
                ->firstOrFail();

            \Log::channel('single')->info('Datos de Paciente para Perfil Personal', [
                'user_id' => $user_id,
                'paciente_id' => $paciente->id,
                'nombre' => $paciente->nombre,
                'email' => $paciente->email,
                'rut' => $paciente->rut
            ]);

            return Inertia::render('Paciente/MiPerfilPersonal', [
                'paciente' => $paciente,
                'user' => $user
            ]);
        } catch (\Exception $e) {
            \Log::channel('single')->error('Error en método personal de MiPerfilController', [
                'error_message' => $e->getMessage(),
                'error_trace' => $e->getTraceAsString()
            ]);

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
