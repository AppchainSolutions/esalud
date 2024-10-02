<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Repository\CalleRepository;


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
    public function index(Request $id)
    {
       // return Inertia::render('SubPages/Calle');
    }

    public function show(Request $id)
    {
       // return Inertia::render('SubPages/Calle');
       return $this->calleRepository->all();
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
