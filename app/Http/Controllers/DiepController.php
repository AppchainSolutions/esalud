<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Repository\DiepRepository;

class DiepController extends Controller
{
    protected $diepRepository;

    public function __construct(DiepRepository $diepRepository)
    {
        $this->diepRepository = $diepRepository;
    }

    public function consulta(Request $request)
    {
        return Inertia::render('Consultas/ConsultaDiep');
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $id)
    {
        return Inertia::render('SubPages/DiepPage');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {

        return $this->diepRepository->store($request);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        return $this->diepRepository->update($request);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        return $this->diepRepository->delete($request);
    }

    public function show(Request $request)
    {
        return $this->diepRepository->search($request);
    }

    public function search(Request $request)
    {
        return $this->diepRepository->search($request);
    }
}
