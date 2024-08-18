<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repository\PlantaRepository;


class PlantaController extends Controller
{
    protected $plantaRepository;

    public function __construct(PlantaRepository $plantaRepository)
    {
        $this->plantaRepository = $plantaRepository;
    }
    public function index()
    {
        return $this->plantaRepository->all();

    }

    /**
     * Show the form for creating a new resource.
     */
    public function store()
    {
        //
    }



    /**
     * Display the specified resource.
     */
    public function all()
    {
        try {
            $query = PlantaModel::all();
            return response()->json([
                'result' => $query
            ]);
        } catch (QueryException $error) {
            Session::flash('message', 'No se encuentran registros.');

        }
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
