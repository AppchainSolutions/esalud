<?php

use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now store something great!
|
*/

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {

    Route::inertia('/', 'Dashboard');
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::get(
        'personasPorEmpresa',
        [DashboardController::class, 'personasPorEmpresa']
    )->name('personasPorEmpresa');

    Route::get(
        'personasPorUnidad',
        [DashboardController::class, 'personasPorUnidad']
    )->name('personasPorUnidad');

    Route::get(
        'personasPorPlanta',
        [DashboardController::class, 'personasPorPlanta']
    )->name('personasPorPlanta');

    Route::get(
        'personasPorCeco',
        [DashboardController::class, 'personasPorCeco']
    )->name('personasPorCeco');

    Route::get(
        'personasPorExpo',
        [DashboardController::class, 'personasPorExpo']
    )->name('personasPorExpo');

    Route::get(
        'expo_empresa',
        [DashboardController::class, 'expo_empresa']
    )->name('expo_empresa');

    Route::get(
        'expo_planta',
        [DashboardController::class, 'expo_planta']
    )->name('expo_planta');

    Route::get(
        'enfermedad_empresa',
        [DashboardController::class, 'enfermedad_empresa']
    )->name('enfermedad_empresa');

    Route::get(
        'enfermedades_planta',
        [DashboardController::class, 'enfermedades_planta']
    )->name('enfermedades_planta');
});
