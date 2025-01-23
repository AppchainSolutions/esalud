<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Repository\ExAlcoholRepository;

class ExAlcoholController extends Controller
{
    protected $exalcoholRepository;

    public function __construct(ExAlcoholRepository $exalcoholRepository)
    {
        $this->exalcoholRepository = $exalcoholRepository;
    }

    public function consulta()
    {
        return Inertia::render('Consultas/ConsultaExAlcohol');
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('SubPages/ExAlcoholPage');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {
        return $this->exalcoholRepository->store($request);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        return $this->exalcoholRepository->update($request);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        return $this->exalcoholRepository->delete($request);
    }

    public function show(Request $request)
    {
        return $this->exalcoholRepository->search($request);
    }

    public function search(Request $request)
    {
        return $this->exalcoholRepository->search($request);
    }
}
