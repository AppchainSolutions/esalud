<?php

namespace App\Http\Controllers;

use App\Repository\EnfermedadRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EnfermedadController extends Controller
{
    protected $enfermedadRepository;

    public function __construct(EnfermedadRepository $enfermedadRepository)
    {
        $this->enfermedadRepository = $enfermedadRepository;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $id)
    {
        return Inertia::render('SubPages/Enfermedad');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {
        return $this->enfermedadRepository->store($request);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        return $this->enfermedadRepository->update($request);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        return $this->enfermedadRepository->delete($request);
    }

    /**
     * Show the specified resource.
     *
     * @param  Request  $request  The request object.
     * @return mixed The result of the show method of the enfermedadRepository.
     */
    public function show(Request $request)
    {
        return $this->enfermedadRepository->show($request);
    }
}
