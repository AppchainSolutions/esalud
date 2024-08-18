<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Repository\ExSiliceRepository;

class ExSiliceController extends Controller
{
    protected $exsiliceRepository;

    public function __construct(ExSiliceRepository $exsiliceRepository)
    {
        $this->exsiliceRepository = $exsiliceRepository;
    }

    public function consulta(Request $request)
    {
        return Inertia::render('Consultas/ConsultaExSilice');
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $id)
    {
        return Inertia::render('SubPages/ExSilicePage');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {
        return $this->exsiliceRepository->store($request);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        return $this->exsiliceRepository->update($request);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        return $this->exsiliceRepository->delete($request);
    }

    public function show(Request $request)
    {
        return $this->exsiliceRepository->show($request);
    }

    public function search(Request $request)
    {
        return $this->exsiliceRepository->search($request);
    }

}
