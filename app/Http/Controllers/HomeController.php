<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function index()
    {
        // Si el usuario está autenticado, mostrar página de inicio
        if (Auth::check()) {
            return Inertia::render('HomePage', [
                'user' => Auth::user(),
            ]);
        }
        
        // Si no está autenticado, mostrar landing page
        return Inertia::render('LandingPage');
    }
}
