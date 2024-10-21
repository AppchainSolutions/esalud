<?php

namespace App\Http\Controllers;

use App\Repository\FactorRiesgoRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FactorRiesgoController extends Controller
{
    protected $factorriesgoRepository;

    public function __construct(FactorRiesgoRepository $factorriesgoRepository)
    {
        $this->factorriesgoRepository = $factorriesgoRepository;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $id)
    {
        return Inertia::render('SubPages/FactorRiesgo');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {
        return $this->factorriesgoRepository->store($request);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        return $this->factorriesgoRepository->update($request);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        return $this->factorriesgoRepository->delete($request);
    }

    /**
     * Display the specified resource.
     */
    public function search(Request $request)
    {
        return $this->factorriesgoRepository->search($request);
    }

    public function show(Request $request)
    {
        return $this->factorriesgoRepository->show($request);
    }
}
