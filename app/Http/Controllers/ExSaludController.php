<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Repository\ExSaludRepository;

class ExSaludController extends Controller
{
    protected $exsaludRepository;

    public function __construct(ExSaludRepository $exsaludRepository)
    {
        $this->exsaludRepository = $exsaludRepository;
    }

    public function consulta(Request $request)
    {
        return Inertia::render('Consultas/ConsultaExSalud');
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $id)
    {
        return Inertia::render('SubPages/ExSaludPage');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {
        return $this->exsaludRepository->store($request);
    }

    
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        return $this->exsaludRepository->update($request);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        return $this->exsaludRepository->delete($request);
    }
    
    public function show(Request $request)
    {
        return $this->exsaludRepository->show($request);
    }

    public function search(Request $request)
    {
        return $this->exsaludRepository->search($request);
    }
}
