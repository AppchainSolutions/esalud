<?php

namespace App\Http\Controllers;

use App\Repository\PuebloOriginarioRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Response;
class PuebloOriginarioController extends Controller
{
    protected $puebloOriginarioRepository;

    public function __construct(PuebloOriginarioRepository $puebloOriginarioRepository)
    {
        $this->puebloOriginarioRepository = $puebloOriginarioRepository;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pueblo_originario = $this->puebloOriginarioRepository->all();
        return response()->json($pueblo_originario);
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
