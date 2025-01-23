<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Repository\LicenciaMedicaRepository;

class LicenciaMedicaController extends Controller
{
    protected $licenciaMedicaRepository;

    public function __construct(LicenciaMedicaRepository $licenciaMedicaRepository)
    {
        $this->licenciaMedicaRepository = $licenciaMedicaRepository;
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $id)
    {
        return Inertia::render('SubPages/LicenciaMedica');
    }

    public function consulta(Request $id)
    {
        return Inertia::render('Consultas/ConsultaLicenciaMedica');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {
        return $this->licenciaMedicaRepository->store($request);
    }

    public function update(Request $request)
    {
        return $this->licenciaMedicaRepository->update($request);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        return $this->licenciaMedicaRepository->delete($request);
    }

    public function show(Request $request)
    {
        return $this->licenciaMedicaRepository->search($request);
    }

    public function search(Request $request)
    {
        return $this->licenciaMedicaRepository->search($request);
    }
}
