<?php

namespace App\Http\Controllers;

use App\Repository\ProfesionalRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfesionalController extends Controller
{
    protected $profesionalRepository;

    public function __construct(ProfesionalRepository $profesionalRepository)
    {
        $this->profesionalRepository = $profesionalRepository;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('SubPages/ProfesionalPage');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function show(Request $request)
    {
        return $this->profesionalRepository->show($request);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        return $this->profesionalRepository->update($request);
    }

    public function store(Request $request)
    {
        return $this->profesionalRepository->store($request);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        return $this->profesionalRepository->delete($request);
    }
}
