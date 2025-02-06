<?php

namespace App\Http\Controllers\Paciente;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use App\Models\Paciente;

class MiPerfilController extends Controller
{
    public function personal()
    {
        $user_id = Auth::user()->id;

        $paciente = Paciente::where('user_id', "=", $user_id)
            ->with('afp', 'nacionalidad', 'genero', 'estadoCivil', 'nivelInstruccion', 'puebloOriginario', 'religion', 'prevision', 'seguroSalud', 'unidad', 'area', 'ceco', 'empresa')
            ->firstOrFail()
            ->toArray();
        return Inertia::render('Paciente/MiPerfilPersonal', ['paciente' => $paciente]);
    }
    public function medico()
    {
        $user_id = Auth::user()->id;

        $paciente = Paciente::where('user_id', $user_id)
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
            ->get();

        dd($paciente);


        // if (!$paciente) {
        //     return redirect()->route('paciente.registro')
        //         ->with('error', 'Debes completar tu registro de paciente');
        // }

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
            'direccion' => 'nullable|string|max:255'
        ]);

        $paciente->update($validatedData);

        return redirect()->back()->with('success', 'Perfil actualizado correctamente');
    }
}
