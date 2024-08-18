<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Repository\ExSolventeRepository;
use Illuminate\Support\Facades\Log;

class ExSolventeController extends Controller
{
    protected $exsolventeRepository;

    public function __construct(ExSolventeRepository $exsolventeRepository)
    {
        $this->exsolventeRepository = $exsolventeRepository;
    }

    public function consulta(Request $request)
    {
        return Inertia::render('Consultas/ConsultaExSolvente');
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $id)
    {
        return Inertia::render('SubPages/ExSolventePage');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {
        return $this->exsolventeRepository->store($request);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        return $this->exsolventeRepository->update($request);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        return $this->exsolventeRepository->delete($request);
    }
    public function show(Request $request)
    {
        return $this->exsolventeRepository->show($request);
    }

    public function search(Request $request)
    {
        return $this->exsolventeRepository->search($request);
    }

}
