<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repository\LeySocialRepository;

class LeySocialController extends Controller
{
    protected $leySocialRepository;

    public function __construct(LeySocialRepository $leySocialRepository)
    {
        $this->leySocialRepository = $leySocialRepository;
    }
    public function index()
    {
        return $this->leySocialRepository->all();

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
            $query = LeySocialModel::all();
             return response()->json([
                'result' => $query
            ]);
        } catch (QueryException $error) {
            Session::flash('message', 'No se encuentran registros.');
            Log::error($error);

        };
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
