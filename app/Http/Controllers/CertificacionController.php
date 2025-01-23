<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Repository\CertificacionRepository;

class CertificacionController extends Controller
{
    protected $certificacionRepository;

    public function __construct(CertificacionRepository $certificacionRepository)
    {
        $this->certificacionRepository = $certificacionRepository;
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $id)
    {
        return Inertia::render('SubPages/Certificacion');
    }

    public function consulta(Request $id)
    {
        return Inertia::render('Consultas/ConsultaCertificacion');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {
        return $this->certificacionRepository->store($request);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        return $this->certificacionRepository->update($request);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        return $this->certificacionRepository->delete($request);
    }

    /**
     * Display the specified resource.
     */
    public function search(Request $request)
    {
        return $this->certificacionRepository->search($request);
    }

    public function show(Request $request)
    {
        return $this->certificacionRepository->search($request);
    }
}
