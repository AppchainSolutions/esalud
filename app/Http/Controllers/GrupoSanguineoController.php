<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repository\GrupoSanguineoRepository;


class GrupoSanguineoController extends Controller
{
    protected $grupoSanguineoRepository;

    public function __construct(GrupoSanguineoRepository $grupoSanguineoRepository)
    {
        $this->grupoSanguineoRepository = $grupoSanguineoRepository;
    }
    public function index()
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
