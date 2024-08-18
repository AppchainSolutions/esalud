<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repository\Cie10Repository;

class Cie10Controller extends Controller
{
    protected $cie10Repository;

    public function __construct(Cie10Repository $cie10Repository)
    {
        $this->cie10Repository = $cie10Repository;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->cie10Repository->all();
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
