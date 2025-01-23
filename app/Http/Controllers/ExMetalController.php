<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Repository\ExMetalRepository;

class ExMetalController extends Controller
{
    protected $exmetalRepository;

    public function __construct(ExMetalRepository $exmetalRepository)
    {
        $this->exmetalRepository = $exmetalRepository;
    }

    public function consulta(Request $request)
    {
        return Inertia::render('Consultas/ConsultaExMetales');
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $id)
    {
        return Inertia::render('SubPages/ExMetalesPage');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {
        return $this->exmetalRepository->store($request);
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        return $this->exmetalRepository->update($request);
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        return $this->exmetalRepository->delete($request);
    }

    public function show(Request $request)
    {
        return $this->exmetalRepository->search($request);
    }

    public function search(Request $request)
    {
        return $this->exmetalRepository->search($request);
    }
}
