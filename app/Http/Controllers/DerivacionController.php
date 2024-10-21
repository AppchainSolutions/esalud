<?php

namespace App\Http\Controllers;

use App\Repository\DerivacionRepository;
use Illuminate\Http\Request;

class DerivacionController extends Controller
{
    protected $derivacionRepository;

    public function __construct(DerivacionRepository $derivacionRepository)
    {
        $this->derivacionRepository = $derivacionRepository;
    }

    /**
     * Display a listing of the resource.
     */
    public function index() {}

    public function show()
    {
        return $this->derivacionRepository->all();
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
