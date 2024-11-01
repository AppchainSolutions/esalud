<?php

namespace App\Http\Controllers;

use App\Repository\ReligionRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Response;
class ReligionController extends Controller
{
    protected $religionRepository;

    public function __construct(ReligionRepository $religionRepository)
    {
        $this->religionRepository = $religionRepository;
    }

    public function index()
    {
        $religion = $this->religionRepository->all();
        return response()->json($religion);
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
