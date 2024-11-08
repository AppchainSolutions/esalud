<?php

namespace App\Http\Controllers;

use App\Repository\CalleRepository;
use App\Models\Calles;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Response;

class CalleController extends Controller
{
    protected $calleRepository;

    public function __construct(CalleRepository $calleRepository)
    {
        $this->calleRepository = $calleRepository;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       // Call the all method to get the cached data
       $calles = $this->calleRepository->all();
       return response()->json($calles);
    }

    public function show(Request $id)
    {
        // return Inertia::render('SubPages/Calles');
        // return $this->calleRepository->all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {
        //return $this->calleRepository->store($request);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        //return $this->calleRepository->update($request);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        //return $this->calleRepository->delete($request);
    }
}
