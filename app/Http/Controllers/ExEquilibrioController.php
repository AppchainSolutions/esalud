<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Repository\ExEquilibrioRepository;

class ExEquilibrioController extends Controller
{
    protected $exequilibrioRepository;

    public function __construct(ExEquilibrioRepository $exequilibrioRepository)
    {
        $this->exequilibrioRepository = $exequilibrioRepository;
    }

    public function consulta(Request $request)
    {
        return Inertia::render('Consultas/ConsultaExEquilibrio');
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $id)
    {
        return Inertia::render('SubPages/ExamenPsico');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {
        return $this->exequilibrioRepository->store($request);
    }

    
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        return $this->exequilibrioRepository->update($request);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        return $this->exequilibrioRepository->delete($request);
    }

    /**
     * Display the specified resource.
     */
    public function search(Request $request)
    {
        return $this->exequilibrioRepository->search($request);
    }

    public function show(Request $request)
    {
        return $this->exequilibrioRepository->show($request);
    }

}

