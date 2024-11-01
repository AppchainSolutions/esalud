<?php

namespace App\Http\Controllers;

use App\Repository\GrupoSanguineoRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Response;
class GrupoSanguineoController extends Controller
{
    protected $grupoSanguineoRepository;

    public function __construct(GrupoSanguineoRepository $grupoSanguineoRepository)
    {
        $this->grupoSanguineoRepository = $grupoSanguineoRepository;
    }

    public function index()
    {
        $grupo_sanguineo = $this->grupoSanguineoRepository->all();
        return response()->json($grupo_sanguineo);
    }

    public function all()
    {
        return $this->grupoSanguineoRepository->all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store()
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
