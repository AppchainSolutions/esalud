<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Repository\ExRuidoRepository;
use Illuminate\Support\Facades\Log;


class ExRuidoController extends Controller
{
    protected $exruidoRepository;

    public function __construct(ExRuidoRepository $exruidoRepository)
    {
        $this->exruidoRepository = $exruidoRepository;
    }

    public function consulta(Request $request)
    {
        return Inertia::render('Consultas/ConsultaExRuido');
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $id)
    {
        return Inertia::render('SubPages/ExRuidoPage');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {

        return $this->exruidoRepository->store($request);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        return $this->exruidoRepository->update($request);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        return $this->exruidoRepository->delete($request);
    }

    public function show(Request $request)
    {
        return $this->exruidoRepository->show($request);
    }

    public function search(Request $request)
    {
        return $this->exruidoRepository->search($request);
    }

}
