<?php

namespace App\Http\Controllers;

use App\Repository\GeneroRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Response;
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
    public function index() {
        $generoRepository = $this->generoRepository->all();
        return response()->json($generoRepository);
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
