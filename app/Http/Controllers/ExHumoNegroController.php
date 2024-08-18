<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Repository\ExHumoNegroRepository;


class ExHumoNegroController extends Controller
{
    protected $exhumonegroRepository;

    public function __construct(ExHumoNegroRepository $exhumonegroRepository)
    {
        $this->exhumonegroRepository = $exhumonegroRepository;
    }

    public function consulta(Request $request)
    {
        return Inertia::render('Consultas/ConsultaExHumoNegro');
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $id)
    {
        return Inertia::render('SubPages/ExHumoNegroPage');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {
        return $this->exhumonegroRepository->store($request);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        return $this->exhumonegroRepository->update($request);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        return $this->exhumonegroRepository->delete($request);
    }

    public function show(Request $request)
    {
        return $this->exhumonegroRepository->show($request);
    }

    public function search(Request $request)
    {
        return $this->exhumonegroRepository->search($request);
    }

}
