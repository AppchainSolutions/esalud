<?php

namespace App\Http\Controllers;

use App\Repository\NacionalidadRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Response;
class NacionalidadController extends Controller
{
    protected $nacionalidadRepository;

    public function __construct(NacionalidadRepository $nacionalidadRepository)
    {
        $this->nacionalidadRepository = $nacionalidadRepository;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $nacionalidad = $this->nacionalidadRepository->all();
        return response()->json($nacionalidad);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {
        return $this->nacionalidadRepository->store($request);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        return $this->nacionalidadRepository->update($request);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        return $this->nacionalidadRepository->delete($request);
    }

    public function show(Request $request)
    {
        return $this->nacionalidadRepository->show($request);
    }
}
