<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repository\TipoEnfermedadRepository;

class TipoEnfermedadController extends Controller
{
    protected $tipoEnfermedadRepository;

    public function __construct(TipoEnfermedadRepository $tipoEnfermedadRepository)
    {
        $this->tipoEnfermedadRepository = $tipoEnfermedadRepository;
    }

    public function index()
    {
        return $this->tipoEnfermedadRepository->all();
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
    public function show()
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
