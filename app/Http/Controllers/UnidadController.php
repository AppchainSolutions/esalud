<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repository\UnidadRepository;


class UnidadController extends Controller
{
    protected $unidadRepository;

    public function __construct(UnidadRepository $unidadRepository)
    {
        $this->unidadRepository = $unidadRepository;
    }
    public function index()
    {
        return $this->unidadRepository->all();

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
