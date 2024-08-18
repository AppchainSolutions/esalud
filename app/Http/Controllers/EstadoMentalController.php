<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repository\EstadoMentalRepository;

class EstadoMentalController extends Controller
{
    protected $estadomentalRepository;

    public function __construct(EstadoMentalRepository $estadomentalRepository)
    {
        $this->estadomentalRepository = $estadomentalRepository;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->estadomentalRepository->all();
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
