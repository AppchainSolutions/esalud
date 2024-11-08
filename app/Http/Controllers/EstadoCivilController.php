<?php

namespace App\Http\Controllers;

use App\Repository\EstadoCivilRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Response;

class EstadoCivilController extends Controller
{
    protected $estadoCivilRepository;

    public function __construct(EstadoCivilRepository $estadoCivilRepository)
    {
        $this->estadoCivilRepository = $estadoCivilRepository;
    }

    public function index()
    {
        $estado_civil = $this->estadoCivilRepository->all();
        return response()->json($estado_civil);
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
