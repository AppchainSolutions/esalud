<?php

namespace App\Http\Controllers;

use App\Repository\AsignacionServicioRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Log;

class AsignacionServicioController extends Controller
{
    protected $asignacionServicioRepository;

    public function __construct(AsignacionServicioRepository $asignacionServicioRepository)
    {
        $this->asignacionServicio = $asignacionServicioRepository;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('SubPages/AsignacionServicioPages');
    }

    /**
     * Display all AFP records.
     *
     * This function retrieves all AFP records from the database and returns them.
     *
     * @return \Illuminate\Database\Eloquent\Collection A collection of AFP records.
     */
    public function show()
    {
        //        return $this->asignacionServicioRepository->search();
        Log::info('Show');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store()
    {
        //
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
