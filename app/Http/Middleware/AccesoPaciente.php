<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AccesoPaciente
{
    public function handle(Request $request, Closure $next)
    {
        // dd([
        //     'authenticated' => Auth::check(),
        //     'user' => Auth::user(),
        //     'is_paciente' => Auth::check() ? Auth::user()->esPaciente() : null
        // ]);

        if (!Auth::check() || !Auth::user()->esPaciente()) {
            return redirect()->route('login')
                ->with('error', 'Acceso no autorizado.');
        }
        return $next($request);
    }
}
