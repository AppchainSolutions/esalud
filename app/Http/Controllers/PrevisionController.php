<?php

namespace App\Http\Controllers;

use App\Repository\PrevisionRepository;
use Illuminate\Http\Request;

class PrevisionController extends Controller
{
    protected $previsionRepository;

    public function __construct(previsionRepository $previsionRepository)
    {
        $this->previsionRepository = $previsionRepository;
    }

    public function index()
    {
        $prevision = $this->previsionRepository->all();
        return response()->json($prevision);
    }

    public function all()
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
