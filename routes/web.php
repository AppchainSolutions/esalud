<?php

use App\Http\Controllers\AlergiaController;
use App\Http\Controllers\AntecedenteFamiliarController;
use App\Http\Controllers\CirugiaController;
use App\Http\Controllers\EnfermedadController;
use App\Http\Controllers\EstablecimientoEducacionalController;
use App\Http\Controllers\FactorRiesgoController;
use App\Http\Controllers\LicenciaMedicaController;
use App\Http\Controllers\MedicamentoController;
use App\Http\Controllers\PacienteController;
use App\Http\Controllers\VacunaController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::prefix('/admin')->group(__DIR__ . '/admin/admin.php');
    Route::prefix('/secundaria')->group(__DIR__ . '/secundaria.php');

    Route::inertia('/ficha', 'SubPages/FichaMedica');
    Route::inertia('/dashboard', 'Dashboard')->name('dashboard'); // Define the dashboard route using Inertia and name it
    Route::resource('/alergia', AlergiaController::class);
    Route::resource('/cirugia', CirugiaController::class);
    Route::resource('/enfermedad', EnfermedadController::class);
    Route::resource('/establecimiento_educacional', EstablecimientoEducacionalController::class);
    Route::resource('/factor', FactorRiesgoController::class);
    Route::resource('/familiar', AntecedenteFamiliarController::class);
    Route::resource('/licencia', LicenciaMedicaController::class);
    Route::resource('/medicamento', MedicamentoController::class);
    Route::resource('/paciente', PacienteController::class);
    Route::resource('/vacuna', VacunaController::class);
});