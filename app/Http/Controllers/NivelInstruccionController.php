<?php

namespace App\Http\Controllers;

use App\Repository\NivelInstruccionRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Response;
class NivelInstruccionController extends Controller
{
    protected $nivelInstruccionRepository;

    public function __construct(NivelInstruccionRepository $nivelInstruccionRepository)
    {
        $this->nivelInstruccionRepository = $nivelInstruccionRepository;
    }

    /**
     * Display a listing of the resource.
     */
    public function index() {
        $nivel_instruccion = $this->nivelInstruccionRepository->all();
        return response()->json($nivel_instruccion);
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
