<?php

namespace App\Http\Controllers;

use App\Repository\EspecialidadRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Response;

class EspecialidadController extends Controller
{
    protected $especialidadRepository;

    public function __construct(EspecialidadRepository $especialidadRepository)
    {
        $this->especialidadRepository = $especialidadRepository;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $especialidadRepository = $this->especialidadRepository->all();
        return response()->json($especialidad);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
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
