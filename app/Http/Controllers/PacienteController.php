<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Services\PacienteService;
use App\Repository\PacienteRepository;
use Illuminate\Support\Facades\Log;

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
        Log::info("show");
        /*         $paciente = $this->pacienteService->show($request);
        return Inertia::render('Pacientes/Show', [
            'paciente' => $paciente
        ]);
 */
    }

    public function search(Request $request)
    {
        Log::info('Iniciando búsqueda de pacientes - Controller');

         try {
             $data = $this->pacienteService->search($request);

            Log::info('Búsqueda completada exitosamente, final', [
                'results_count' => is_countable($data) ? count($data) : 0
            ]);

            return response()->json([
                'success' => true,
                'data' => $data,
                'message' => 'Búsqueda completada exitosamente'
            ], 200);
         } catch (\Exception $e) {
            Log::error('Error en búsqueda de pacientes', [
                'error_message' => $e->getMessage(),
                'error_code' => $e->getCode(),
                'file' => $e->getFile(),
                'line' => $e->getLine()
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Error al realizar la búsqueda: ' . $e->getMessage()
            ], 500);
        }
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
}
