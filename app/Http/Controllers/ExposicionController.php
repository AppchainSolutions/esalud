<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repository\ExposicionRepository;

class ExposicionController extends Controller
{
    protected $exposicionRepository;

    public function __construct(ExposicionRepository $exposicionRepository)
    {
        $this->exposicionRepository = $exposicionRepository;
    }

    public function index()
    {
        return $this->exposicionRepository->all();
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
