<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repository\GeneroRepository;

class GeneroController extends Controller
{
    protected $generoRepository;

    public function __construct(GeneroRepository $generoRepository)
    {
        $this->generoRepository = $generoRepository;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
    }
    public function all()
    {
        return $this->generoRepository->all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {
        return $this->generoRepository->store($request);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        return $this->generoRepository->update($request);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        return $this->generoRepository->delete($request);
    }

    public function show(Request $request)
    {
       // return $this->generoRepository->all();
    }
}
