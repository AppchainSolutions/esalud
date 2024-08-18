<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Repository\AtencionDiariaRepository;
use Log;

class AtencionDiariaController extends Controller
{
    protected $atencionDiariaRepository;

    public function __construct(AtencionDiariaRepository $atencionDiariaRepository)
    {
        $this->atencionDiariaRepository = $atencionDiariaRepository;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('SubPages/AtencionDiaria');
    }
    public function consulta()
    {
        return Inertia::render('Consultas/ConsultaAtencionDiaria');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {
        return $this->atencionDiariaRepository->store($request);
    }

    public function update(Request $request)
    {
        return $this->atencionDiariaRepository->update($request);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        return $this->atencionDiariaRepository->delete($request);
    }

    /**
     * Display the specified resource.
     */
    public function search(Request $request)
    {
        return $this->atencionDiariaRepository->search($request);
    }

    public function show(Request $request)
    {
        return $this->atencionDiariaRepository->show($request);
    }

}
