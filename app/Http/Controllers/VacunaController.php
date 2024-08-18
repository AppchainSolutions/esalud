<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Repository\VacunaRepository;

class VacunaController extends Controller
{
    protected $vacunaRepository;

    public function __construct(VacunaRepository $vacunaRepository)
    {
        $this->vacunaRepository = $vacunaRepository;
    }

    public function consulta()
    {
        return Inertia::render('Consultas/ConsultaVacuna');
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $id)
    {
        return Inertia::render('SubPages/VacunaPage');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {

        return $this->vacunaRepository->store($request);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        return $this->vacunaRepository->update($request);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        return $this->vacunaRepository->delete($request);
    }

    /**
     * Display the specified resource.
     */
    public function search(Request $request)
    {
        return $this->vacunaRepository->search($request);
    }

    public function show(Request $request)
    {
        return $this->vacunaRepository->show($request);
    }
}