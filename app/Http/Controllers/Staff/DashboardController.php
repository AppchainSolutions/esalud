<?php

namespace App\Http\Controllers\Staff;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Staff/Dashboard', [
            // Puedes pasar datos iniciales si es necesario
        ]);
    }
}
