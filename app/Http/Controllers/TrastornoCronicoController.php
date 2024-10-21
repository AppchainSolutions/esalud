<?php

namespace App\Http\Controllers;

use App\Repository\TrastornoCronicoRepository;
use Illuminate\Http\Request;

class TrastornoCronicoController extends Controller
{
    protected $trastornoCronicoRepository;

    public function __construct(TrastornoCronicoRepository $trastornoCronicoRepository)
    {
        $this->trastornoCronicoRepository = $trastornoCronicoRepository;
    }

    public function index()
    {
        return $this->trastornoCronicoRepository->all();
    }

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
