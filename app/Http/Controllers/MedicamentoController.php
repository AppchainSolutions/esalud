<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Repository\MedicamentoRepository;

class MedicamentoController extends Controller
{
    protected $medicamentoRepository;

    public function __construct(MedicamentoRepository $medicamentoRepository)
    {
        $this->medicamentoRepository = $medicamentoRepository;
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $id)
    {
        return Inertia::render('SubPages/Medicamento');
    }

    /**
     * Show the form for creating a new resource.
     */
        public function store(Request $request)
    {
        return $this->medicamentoRepository->store($request);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        return $this->medicamentoRepository->update($request);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        return $this->medicamentoRepository->delete($request);
    }

    /**
     * Display the specified resource.
     */
    public function search(Request $request)
    {
        return $this->medicamentoRepository->search($request);
    }

    public function show(Request $request)
    {
        return $this->medicamentoRepository->show($request);
    }
}
