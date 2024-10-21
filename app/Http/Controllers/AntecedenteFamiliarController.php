<?php

namespace App\Http\Controllers;

use App\Repository\AntecedenteFamiliarRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AntecedenteFamiliarController extends Controller
{
    protected $antecedentefamiliarRepository;

    public function __construct(AntecedenteFamiliarRepository $antecedentefamiliarRepository)
    {
        $this->antecedentefamiliarRepository = $antecedentefamiliarRepository;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $id)
    {
        return Inertia::render('SubPages/AntecedenteFamiliar');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {
        return $this->antecedentefamiliarRepository->store($request);
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
        return $this->antecedentefamiliarRepository->update($request);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        return $this->antecedentefamiliarRepository->delete($request);
    }

    /**
     * Display the specified resource.
     */
    public function search(Request $request)
    {
        return $this->antecedentefamiliarRepository->search($request);
    }

    public function show(Request $request)
    {
        return $this->antecedentefamiliarRepository->show($request);
    }
}
