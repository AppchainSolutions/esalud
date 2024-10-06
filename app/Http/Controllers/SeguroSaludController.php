<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repository\SeguroSaludRepository;

class SeguroSaludController extends Controller
{
    protected $seguroSaludRepository;

    public function __construct(SeguroRepository $seguroSaludRepository)
    {
        $this->seguroRepository = $seguroRepository;
    }
    
    public function index()
    {

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
        return $this->seguroRepository->all();
    
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
