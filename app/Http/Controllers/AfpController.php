<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repository\AfpRepository;


class AfpController extends Controller
{
    protected $afpRepository;

    public function __construct(AfpRepository $afpRepository)
    {
        $this->afpRepository = $afpRepository;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->afpRepository->all();
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
