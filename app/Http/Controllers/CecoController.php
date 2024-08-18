<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Repository\CecoRepository;



class CecoController extends Controller
{
    protected $cecoRepository;

    public function __construct(CecoRepository $cecoRepository)
    {
        $this->cecoRepository = $cecoRepository;
    }

        /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->cecoRepository->all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {
    }
    
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
    }
}
