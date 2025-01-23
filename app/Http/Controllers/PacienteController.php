<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Services\PacienteService;
use App\Repository\PacienteRepository;

class PacienteController extends Controller
{
    protected $pacienteService;

    public function __construct(PacienteService $pacienteService)
    {
        $this->pacienteService = $pacienteService;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //$pacientes = $this->pacienteService->index();
        return Inertia::render('PacientePage');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Pacientes/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $paciente = $this->pacienteService->store($request);
        return redirect()->route('pacientes.index')
            ->with('success', 'Paciente creado exitosamente.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        $paciente = $this->pacienteService->show($request);
        return Inertia::render('Pacientes/Show', [
            'paciente' => $paciente
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $paciente = $this->pacienteService->show(new Request(['id' => $id]));
        return Inertia::render('Pacientes/Edit', [
            'paciente' => $paciente
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $paciente = $this->pacienteService->update($request);
        return redirect()->route('pacientes.index')
            ->with('success', 'Paciente actualizado exitosamente.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $this->pacienteService->destroy($request);
        return redirect()->route('pacientes.index')
            ->with('success', 'Paciente eliminado exitosamente.');
    }

    /**
     * Mostrar historial médico del paciente
     */
 /*    public function historialMedico($id)
    {
        $paciente = $this->pacienteService->getHistorialMedico($id);
        return Inertia::render('Pacientes/HistorialMedico', [
            'paciente' => $paciente
        ]);
    } */

    /**
     * Mostrar certificaciones del paciente
     */
/*     public function certificaciones($id)
    {
        $paciente = $this->pacienteService->show(new Request(['id' => $id]));
        return Inertia::render('Pacientes/Certificaciones', [
            'paciente' => $paciente
        ]);
    } */
}
