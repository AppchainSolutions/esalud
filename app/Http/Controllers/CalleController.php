<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repository\CallesRepository;

class CallesController extends Controller
{
    protected $CallesRepository;

    public function __construct(CallesRepository $CallesRepository)
    {
        $this->CallesRepository = $CallesRepository;
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $id)
    {
       // return Inertia::render('SubPages/Calles');
    }

    public function all()
    {
        return $this->CallesRepository->all();
    }
    public function show(Request $id)
    {
       // return Inertia::render('SubPages/Calles');
      // return $this->CallesRepository->all();
    }
    /**
     * Show the form for creating a new resource.
     */
        public function store(Request $request)
    {
        //return $this->CallesRepository->store($request);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        //return $this->CallesRepository->update($request);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        //return $this->CallesRepository->delete($request);
    }
}
