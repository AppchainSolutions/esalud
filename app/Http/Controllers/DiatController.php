<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Repository\DiatRepository;


class DiatController extends Controller
{
    protected $diatRepository;

    public function __construct(DiatRepository $diatRepository)
    {
        $this->diatRepository = $diatRepository;
    }

    public function consulta(Request $request)
    {
        return Inertia::render('Consultas/ConsultaDiat');
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $id)
    {
        return Inertia::render('SubPages/DiatPage');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {
        return $this->diatRepository->store($request);
    }

    public function update(Request $request)
    {
        return $this->diatRepository->update($request);
    }

    public function destroy(Request $request)
    {
        return $this->diatRepository->delete($request);
    }

    public function show(Request $request)
    {
        return $this->diatRepository->search($request);
    }

    public function search(Request $request)
    {
        return $this->diatRepository->search($request);
    }
}
