<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Repository\FichaCronicosRepository;
use Illuminate\Support\Facades\Log;


class FichaCronicosController extends Controller
{
    protected $FichaCronicosRepository;

    public function __construct(FichaCronicosRepository $FichaCronicosRepository)
    {
        $this->FichaCronicosRepository = $FichaCronicosRepository;
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

    public function perfil(Request $request){
        return Inertia::render('SubPages/PerfilCronicos');
    }
    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {
        return $this->FichaCronicosRepository->store($request);
    }

    public function update(Request $request)
    {
        return $this->FichaCronicosRepository->update($request);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        return $this->FichaCronicosRepository->delete($request);
    }

    /**
     * Display the specified resource.
     */
    public function search(Request $request)
    {
        return $this->FichaCronicosRepository->search($request);
    }

    public function show(Request $request)
    {
        return $this->FichaCronicosRepository->show($request);
    }


}
