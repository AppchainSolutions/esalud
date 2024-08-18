<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Repository\PacienteRepository;


class PacienteController extends Controller
{
    protected $pacienteRepository;

    public function __construct(PacienteRepository $pacienteRepository)
    {
        $this->pacienteRepository = $pacienteRepository;
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
}
