<?php

use App\Http\Controllers\AlergiaController;
use App\Http\Controllers\AntecedenteFamiliarController;
use App\Http\Controllers\AsignacionServicioController;
use App\Http\Controllers\CirugiaController;
use App\Http\Controllers\EnfermedadController;
use App\Http\Controllers\FactorRiesgoController;
use App\Http\Controllers\MedicamentoController;
use App\Http\Controllers\PacienteController;
use App\Http\Controllers\FichaPsicologiaController;
use App\Http\Controllers\ProfesionalController;
use App\Http\Controllers\VacunaController;
use Illuminate\Support\Facades\Route;

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::prefix('/admin')->group(__DIR__ . '/admin/admin.php');
    Route::resource('/alergia', AlergiaController::class);
    Route::resource('/asignacion', AsignacionServicioController::class);
    Route::resource('/cirugia', CirugiaController::class);
    Route::resource('/enfermedad', EnfermedadController::class);
    Route::resource('/factor', FactorRiesgoController::class);
    Route::resource('/familiar', AntecedenteFamiliarController::class);
    Route::resource('/medicamento', MedicamentoController::class);
    Route::resource('/paciente', PacienteController::class);
    Route::resource('/psico', FichaPsicologiaController::class);
    Route::resource('/profesional', ProfesionalController::class);
    Route::resource('/vacuna', VacunaController::class);
    Route::inertia('/dashboard', 'Dashboard')->name('dashboard'); // Define the dashboard route using Inertia and name it
    Route::inertia('/at_psico', 'SubPages/AtencionPsicologia');
    Route::inertia('/ficha', 'SubPages/FichaMedica');

    Route::get('paciente/all', [PacienteController::class, 'all'])->name('paciente.all');

    
});
