<?php

namespace App\Http\Controllers\Paciente;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\Paciente;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;

class MiDashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Paciente/MiDashboard');
    }

}
