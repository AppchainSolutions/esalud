<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Repository\ExMetalesRepository;

class ExMetalesController extends Controller
{
    protected $exmetalesRepository;

    public function __construct(ExMetalesRepository $exmetalesRepository)
    {
        $this->exmetalesRepository = $exmetalesRepository;
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
        return $this->exmetalesRepository->store($request);
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        return $this->exmetalesRepository->update($request);
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        return $this->exmetalesRepository->delete($request);
    }

    public function show(Request $request)
    {
        return $this->exmetalesRepository->show($request);
    }

    public function search(Request $request)
    {
        return $this->exmetalesRepository->search($request);
    }

}
