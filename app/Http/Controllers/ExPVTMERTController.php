<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Repository\ExPVTMERTRepository;
use Illuminate\Support\Facades\Log;


class ExPVTMERTController extends Controller
{
    protected $expvtmertRepository;

    public function __construct(ExPVTMERTRepository $expvtmertRepository)
    {
        $this->expvtmertRepository = $expvtmertRepository;
    }

    public function consulta(Request $request)
    {
        return Inertia::render('Consultas/ConsultaExPVTMERT');
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $id)
    {
        return Inertia::render('SubPages/ExPVTMERTPage');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {

        return $this->expvtmertRepository->store($request);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        return $this->expvtmertRepository->update($request);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        return $this->expvtmertRepository->delete($request);
    }

    public function show(Request $request)
    {
        return $this->expvtmertRepository->search($request);
    }

    public function search(Request $request)
    {
        return $this->expvtmertRepository->search($request);
    }
}
