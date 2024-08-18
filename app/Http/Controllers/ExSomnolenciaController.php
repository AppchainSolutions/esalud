<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Repository\ExSomnolenciaRepository;

class ExSomnolenciaController extends Controller
{
    protected $exsomnolenciaRepository;

    public function __construct(ExSomnolenciaRepository $exsomnolenciaRepository)
    {
        $this->exsomnolenciaRepository = $exsomnolenciaRepository;
    }

    public function consulta(Request $request)
    {
        return Inertia::render('Consultas/ConsultaExSomnolencia');
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $id)
    {
        return Inertia::render('SubPages/ExSomnolenciaPage');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {

        return $this->exsomnolenciaRepository->store($request);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        return $this->exsomnolenciaRepository->update($request);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        return $this->exsomnolenciaRepository->delete($request);
    }

    public function show(Request $request)
    {
        return $this->exsomnolenciaRepository->show($request);
    }

    public function search(Request $request)
    {
        return $this->exsomnolenciaRepository->search($request);
    }

}
