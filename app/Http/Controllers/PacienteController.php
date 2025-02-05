<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Repository\PacienteRepository;
use App\Services\PacienteActivacionService;
use App\Models\Paciente;

class PacienteController extends Controller
{
    protected $pacienteRepository;
    protected $activacionService;

    public function __construct(PacienteRepository $pacienteRepository, PacienteActivacionService $activacionService)
    {
        $this->pacienteRepository = $pacienteRepository;
        $this->activacionService = $activacionService;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('PacientePage');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function show(Request $request)
    {
        return $this->pacienteRepository->show($request);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        return $this->pacienteRepository->update($request);
    }

    public function store(Request $request)
    {
        return $this->pacienteRepository->store($request);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        return $this->pacienteRepository->delete($request);
    }

    public function enviarActivacion(Paciente $paciente)
    {
        if ($this->activacionService->generarYEnviarActivacion($paciente)) {
            return redirect()->back()
                ->with('success', 'Se ha enviado el correo de activación al paciente.');
        }

        return redirect()->back()
            ->with('error', 'No se pudo enviar el correo de activación. Por favor, intente nuevamente.');
    }

    public function reenviarActivacion(Paciente $paciente)
    {
        if ($this->activacionService->reenviarActivacion($paciente)) {
            return redirect()->back()
                ->with('success', 'Se ha reenviado el correo de activación al paciente.');
        }

        return redirect()->back()
            ->with('error', 'No se pudo reenviar el correo de activación. El paciente ya podría tener una cuenta activa.');
    }
}
