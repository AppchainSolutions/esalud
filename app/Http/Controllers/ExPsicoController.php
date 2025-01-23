<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Repository\ExPsicoRepository;

class ExPsicoController extends Controller
{
    protected $expsicoRepository;

    public function __construct(ExPsicoRepository $expsicoRepository)
    {
        $this->expsicoRepository = $expsicoRepository;
    }

    public function consulta(Request $request)
    {
        return Inertia::render('Consultas/ConsultaExPsico');
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
        return $this->expsicoRepository->store($request);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        return $this->expsicoRepository->update($request);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        return $this->expsicoRepository->delete($request);
    }

    /**
     * Display the specified resource.
     */
    public function search(Request $request)
    {
        return $this->expsicoRepository->search($request);
    }

    public function show(Request $request)
    {
        return $this->expsicoRepository->search($request);
    }
}
