<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repository\ExAsmaRepository;
use Inertia\Inertia;



class ExAsmaController extends Controller
{
    protected $exasmaRepository;

    public function __construct(ExAsmaRepository $exasmaRepository)
    {
        $this->exasmaRepository = $exasmaRepository;
    }

    public function consulta(Request $request)
    {
        return Inertia::render('Consultas/ConsultaExAsma');
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('SubPages/ExAsmaPage');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return $this->exasmaRepository->store($request);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        return $this->exasmaRepository->search($request);
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
        return $this->exasmaRepository->update($request);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        return $this->exasmaRepository->delete($request);
    }

    public function search(Request $request)
    {
        return $this->exasmaRepository->search($request);
    }
}
