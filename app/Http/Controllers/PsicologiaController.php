<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PsicologiaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
<<<<<<< HEAD
        return Inertia::render('FichaPsicologiaPage');
    }

<<<<<<< HEAD
=======
    public function atencion()
    {
       return Inertia::render('SubPages/AtencionPsicologicaPage');
=======
        //return Inertia::render('FichaPsicologiaPage');
>>>>>>> 3beee4f ("Removed and modified files in app/Http/Controllers, resources/js, routes, and tests directories; updated vite.config.js")
    }

>>>>>>> dfedd27 (Refactor launch.json to add new Chrome configurations)
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
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
