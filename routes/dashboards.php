<?php

use App\Http\Controllers\Paciente\MiDashboardController;
use App\Http\Controllers\Admin\DashboardController as AdminDashboardController;
use App\Http\Controllers\Staff\DashboardController as StaffDashboardController;
use Illuminate\Support\Facades\Route;

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    // Dashboard de Paciente
    Route::get('/paciente/dashboard', [MiDashboardController::class, 'index'])
        ->name('paciente.dashboard')
        ->middleware('acceso.paciente');

    // Dashboard de Admin
    Route::get('/admin/dashboard', [AdminDashboardController::class, 'index'])
        ->name('admin.dashboard')
        ->middleware('role:admin');

    // Dashboard de Staff
    Route::get('/staff/dashboard', [StaffDashboardController::class, 'index'])
        ->name('staff.dashboard')
        ->middleware('role:staff');
});
