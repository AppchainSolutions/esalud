<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Repository\ExRespiradorRepository;


class ExRespiradorController extends Controller
{
    protected $exrespiradorRepository;

    public function __construct(ExRespiradorRepository $exrespiradorRepository)
    {
        $this->exrespiradorRepository = $exrespiradorRepository;
    }

    public function consulta(Request $request)
    {
        return Inertia::render('Consultas/ConsultaExRespirador');
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $id)
    {
        return Inertia::render('SubPages/RespiradorPage');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {
        return $this->exrespiradorRepository->store($request);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        return $this->exrespiradorRepository->update($request);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        return $this->exrespiradorRepository->delete($request);
    }

    public function show(Request $request)
    {
        return $this->exrespiradorRepository->search($request);
    }

    public function search(Request $request)
    {
        return $this->exrespiradorRepository->search($request);
    }
}
