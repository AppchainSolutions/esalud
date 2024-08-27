<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Repository\FichaCronicosRepository;
use Illuminate\Support\Facades\Log;


class FichaCronicosController extends Controller
{
    protected $fichaCronicosRepository;

    public function __construct(FichaCronicosRepository $fichaCronicosRepository)
    {
        $this->fichaCronicosRepository = $fichaCronicosRepository;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('SubPages/FichaCronicos');
    }
    public function consulta()
    {
        return Inertia::render('Consultas/ConsultaFichaCronicos');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {
       return $this->fichaCronicosRepository->store($request);
    }

    public function update(Request $request)
    {
        return $this->fichaCronicosRepository->update($request);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        return $this->fichaCronicosRepository->delete($request);
    }

    /**
     * Display the specified resource.
     */
    public function search(Request $request)
    {
        return $this->fichaCronicosRepository->search($request);
    }

    public function show(Request $request)
    {
        return $this->fichaCronicosRepository->show($request);
    }


}
