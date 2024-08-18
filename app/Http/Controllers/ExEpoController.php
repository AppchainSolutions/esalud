<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Repository\ExEpoRepository;


class ExEpoController extends Controller
{
    protected $exepoRepository;

    public function __construct(ExEpoRepository $exepoRepository)
    {
        $this->exepoRepository = $exepoRepository;
    }

    public function consulta(Request $request)
    {
        return Inertia::render('Consultas/ConsultaExEpo');
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $id)
    {
        return Inertia::render('SubPages/ExEpoPage');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {

        return $this->exepoRepository->store($request);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        return $this->exepoRepository->update($request);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        return $this->exepoRepository->delete($request);
    }

    public function show(Request $request)
    {
        return $this->exepoRepository->show($request);
    }

    public function search(Request $request)
    {
        return $this->exepoRepository->search($request);
    }

}
