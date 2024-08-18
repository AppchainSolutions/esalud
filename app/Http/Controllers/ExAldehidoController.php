<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Repository\ExAldehidoRepository;


class ExAldehidoController extends Controller
{
    protected $exaldehidoRepository;

    public function __construct(ExAldehidoRepository $exaldehidoRepository)
    {
        $this->exaldehidoRepository = $exaldehidoRepository;
    }

    public function consulta(Request $request)
    {
        return Inertia::render('Consultas/ConsultaExAldehido');
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $id)
    {
        return Inertia::render('SubPages/ExAldehidoPage');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {
        return $this->exaldehidoRepository->store($request);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        return $this->exaldehidoRepository->update($request);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        return $this->exaldehidoRepository->delete($request);
    }

    public function show(Request $request)
    {
        return $this->exaldehidoRepository->show($request);
    }

    public function search(Request $request)
    {
        return $this->exaldehidoRepository->search($request);
    }

}
