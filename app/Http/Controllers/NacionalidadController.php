<?php

namespace App\Http\Controllers;

use App\Repository\NacionalidadRepository;
use Illuminate\Http\Request;

class NacionalidadController extends Controller
{
    protected $nacionalidadRepository;

    public function __construct(NacionalidadRepository $nacionalidadRepository)
    {
        $this->nacionalidadRepository = $nacionalidadRepository;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //        return $this->nacionalidadRepository->all();
    }

    public function all()
    {
        return $this->nacionalidadRepository->all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {
        return $this->nacionalidadRepository->store($request);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        return $this->nacionalidadRepository->update($request);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        return $this->nacionalidadRepository->delete($request);
    }

    public function show(Request $request)
    {
        return $this->nacionalidadRepository->show($request);
    }
}
