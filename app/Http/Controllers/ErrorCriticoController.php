<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repository\ErrorCriticoRepository;

class ErrorCriticoController extends Controller
{
    protected $errorcriticoRepository;

    public function __construct(ErrorCriticoRepository $errorcriticoRepository)
    {
        $this->errorcriticoRepository = $errorcriticoRepository;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->errorcriticoRepository->all();
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
        return $this->errorcriticoRepository->all();
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
