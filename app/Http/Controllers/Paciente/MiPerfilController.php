<?php

namespace App\Http\Controllers\Paciente;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class MiPerfilController extends Controller
{
    public function personal()
    {
        $paciente = Auth::user();

        // if (!$paciente) {
        //     return redirect()->route('paciente.registro')
        //         ->with('error', 'Debes completar tu registro de paciente');
        // }

        return Inertia::render('Paciente/MiPerfilPersonal');
    }
    public function medico()
    {
        $paciente = Auth::user();

        // if (!$paciente) {
        //     return redirect()->route('paciente.registro')
        //         ->with('error', 'Debes completar tu registro de paciente');
        // }

        return Inertia::render('Paciente/MiPerfilMedico');
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
