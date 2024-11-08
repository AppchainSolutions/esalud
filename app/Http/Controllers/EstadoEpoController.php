<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repository\EstadoEpoRepository;

class EstadoEpoController extends Controller
{
    protected $estadoEpoRepository;

    public function __construct(EstadoEpoRepository $estadoEpoRepository)
    {
        $this->estadoEpoRepository = $estadoEpoRepository;
    }

    public function index()
    {
        return $this->estadoEpoRepository->all();
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
    public function all()
    {

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
