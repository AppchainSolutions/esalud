<?php

namespace App\Http\Controllers;

use App\Repository\EstablecimientoEducacionalRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Response;

class EstablecimientoEducacionalController extends Controller
{
    protected $establecimientoEducacionalRepository;

    public function __construct(EstablecimientoEducacionalRepository $establecimientoEducacionalRepository)
    {
        $this->establecimientoEducacionalRepository = $establecimientoEducacionalRepository;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $establecimientos = $this->establecimientoEducacionalRepository->all();
        return response()->json($establecimientos);
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
        return $this->establecimientoEducacionalRepository->all();
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
