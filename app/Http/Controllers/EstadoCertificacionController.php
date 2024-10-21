<?php

namespace App\Http\Controllers;

use App\Repository\EstadoCertificacionRepository;
use Illuminate\Http\Request;

class EstadoCertificacionController extends Controller
{
    protected $estadoCertificacionRepository;

    public function __construct(EstadoCertificacionRepository $estadoCertificacionRepository)
    {
        $this->estadoCertificacionRepository = $estadoCertificacionRepository;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->estadoCertificacionRepository->all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store()
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function all()
    {
        return $this->estadoCertificacionRepository->all();

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
