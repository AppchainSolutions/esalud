<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repository\PuebloRepository;


class PuebloController extends Controller
{
    protected $puebloRepository;

    public function __construct(PuebloRepository $puebloRepository)
    {
        $this->puebloRepository = $puebloRepository;
    }

    public function index()
    {
        return $this->puebloRepository->all();

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
            $query = PuebloModel::all();
             return response()->json([
                'result' => $query
            ]);
        } catch (QueryException $error) {
            Session::flash('message', 'No se encuentran registros.');
            Log::error('Error al buscar todos los pueblos: '.$error);
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
