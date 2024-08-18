<?php

use App\Http\Controllers\AlergiaController;
use App\Http\Controllers\AntecedenteFamiliarController;
use App\Http\Controllers\AtencionDiariaController;
use App\Http\Controllers\CertificacionController;
use App\Http\Controllers\CirugiaController;
use App\Http\Controllers\DiatController;
use App\Http\Controllers\DiepController;
use App\Http\Controllers\EnfermedadController;
use App\Http\Controllers\FactorRiesgoController;
use App\Http\Controllers\LicenciaMedicaController;
use App\Http\Controllers\MedicamentoController;
use App\Http\Controllers\PacienteController;
use App\Http\Controllers\VacunaController;
use App\Http\Controllers\MailController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('send-mail', [MailController::class, 'index']);

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {

    Route::prefix('/admin')->group(__DIR__ . '/admin/admin.php');
    Route::prefix('/consulta')->group(__DIR__ . '/consulta.php');
    Route::prefix('/examen')->group(__DIR__ . '/examen.php');
    Route::prefix('/secundaria')->group(__DIR__ . '/secundaria.php');
    Route::prefix('/dashboard')->group(__DIR__ . '/dashboard.php');

    Route::inertia('/ficha', 'SubPages/FichaMedica');
    Route::resource('/alergia', AlergiaController::class);
    Route::resource('/atencion_diaria', AtencionDiariaController::class);
    Route::resource('/certificacion', CertificacionController::class);
    Route::resource('/cirugia', CirugiaController::class);
    Route::resource('/diat', DiatController::class);
    Route::resource('/diep', DiepController::class);
    Route::resource('/enfermedad', EnfermedadController::class);
    Route::resource('/factor', FactorRiesgoController::class);
    Route::resource('/familiar', AntecedenteFamiliarController::class);
    Route::resource('/licencia', LicenciaMedicaController::class);
    Route::resource('/medicamento', MedicamentoController::class);
    Route::resource('/paciente', PacienteController::class);
    Route::resource('/vacuna', VacunaController::class);


});
