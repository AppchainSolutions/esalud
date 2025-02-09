<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Paciente\MiPerfilController;
use App\Http\Controllers\Paciente\MiDashboardController;

// Route::middleware([
//     'auth',

// ])->group(function () {

    Route::get('mi_dashboard',[MiDashboardController::class, 'index'])->name('mi_dashboard');
    Route::get('mi_perfil_personal', [MiPerfilController::class, 'personal'])->name('mi_perfil_personal');
    Route::get('mi_perfil_medico', [MiPerfilController::class, 'medico'])->name('mi_perfil_medico');;

// });
