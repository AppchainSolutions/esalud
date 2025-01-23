<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Repository\TurnoRepository;


class TurnoController extends Controller
{
    protected $turnoRepository;

    public function __construct(TurnoRepository $turnoRepository)
    {
        $this->turnoRepository = $turnoRepository;
    }

    public function consulta(Request $request)
    {
        return Inertia::render('Consultas/ConsultaTurno');
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $id)
    {
        return $this->turnoRepository->all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {
        return $this->turnoRepository->store($request);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        return $this->turnoRepository->update($request);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        return $this->turnoRepository->delete($request);
    }

    public function show(Request $request)
    {
        return $this->turnoRepository->search($request);
    }
}
