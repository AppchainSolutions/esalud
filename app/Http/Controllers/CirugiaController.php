<?php

namespace App\Http\Controllers;

use App\Repository\CirugiaRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CirugiaController extends Controller
{
    protected $cirugiaRepository;

    public function __construct(CirugiaRepository $cirugiaRepository)
    {
        $this->cirugiaRepository = $cirugiaRepository;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $id)
    {
        return Inertia::render('SubPages/Cirugia');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {
        return $this->cirugiaRepository->store($request);
    }

    /**
     * Store a newly stored resource in storage.
     */
    // public function store(Request $request)
    // {
    // }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        return $this->cirugiaRepository->update($request);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        return $this->cirugiaRepository->delete($request);
    }

    public function show(Request $request)
    {
        return $this->cirugiaRepository->show($request);
    }
}
