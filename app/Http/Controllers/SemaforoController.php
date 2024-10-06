<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repository\SemaforoRepository;

class SemaforoController extends Controller
{
    protected $SemaforoRepository;

    public function __construct(SemaforoRepository $SemaforoRepository)
    {
        $this->SemaforoRepository = $SemaforoRepository;
    }
    
    /**
     * Display a listing of the resource.
     */

    public function index()
    {
        return $this->SemaforoRepository->all();

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
