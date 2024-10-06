<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Repository\AlergiaRepository;


class AlergiaController extends Controller
{
    protected $alergiaRepository;

    public function __construct(AlergiaRepository $alergiaRepository)
    {
        $this->alergiaRepository = $alergiaRepository;
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $id)
    {
        return Inertia::render('SubPages/Alergia');
    }

    /**
     * Show the form for creating a new resource.
     */
        public function store(Request $request)
    {
        return $this->alergiaRepository->store($request);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        return $this->alergiaRepository->update($request);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        return $this->alergiaRepository->delete($request);
    }

    public function show(Request $request)
    {
        return $this->alergiaRepository->show($request);
    }
}
