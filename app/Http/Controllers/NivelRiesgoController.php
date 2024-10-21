<?php

namespace App\Http\Controllers;

use App\Repository\NivelRiesgoRepository;
use Illuminate\Http\Request;

class NivelRiesgoController extends Controller
{
    protected $nivelriesgoRepository;

    public function __construct(NivelRiesgoRepository $nivelriesgoRepository)
    {
        $this->nivelriesgoRepository = $nivelriesgoRepository;
    }

    /**
     * Display a listing of the resource.
     */
    public function index() {}

    public function all()
    {
        return $this->nivelriesgoRepository->all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {
        return $this->nivelriesgoRepository->store($request);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        return $this->nivelriesgoRepository->update($request);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        return $this->nivelriesgoRepository->delete($request);
    }

    public function show(Request $request)
    {
        return $this->nivelriesgoRepository->show($request);
    }
}
