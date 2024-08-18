<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repository\PrevisionRepository;


class PrevisionController extends Controller
{
    protected $previsionRepository;

    public function __construct(previsionRepository $previsionRepository)
    {
        $this->previsionRepository = $previsionRepository;
    }
    public function index()
    {
        return $this->previsionRepository->all();

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
            $query = PrevisionModel::all();
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
