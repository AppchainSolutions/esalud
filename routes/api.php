<?php

use App\Http\Controllers\CalleController;
use App\Http\Controllers\EspecialidadController;
use App\Http\Controllers\EstablecimientoEducacionalController;
use App\Http\Controllers\EstadoCivilController;
use App\Http\Controllers\GeneroController;
use App\Http\Controllers\GrupoSanguineoController;
use App\Http\Controllers\NacionalidadController;
use App\Http\Controllers\NivelInstruccionController;
use App\Http\Controllers\PacienteController;
use App\Http\Controllers\PrevisionController;
use App\Http\Controllers\PuebloOriginarioController;
use App\Http\Controllers\ReligionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and index of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();

});

Route::get('calles', [CalleController::class, 'index'])->name('calles.index');
Route::get('estados_civiles', [EstadoCivilController::class, 'index'])->name('estadoCivil.index');
Route::get('especialidades', [EspecialidadController::class, 'index'])->name('especialidad.index');
Route::get('establecimientos_educacionales', [EstablecimientoEducacionalController::class, 'index'])->name('establecimientoEducacional.index');
Route::get('generos', [GeneroController::class, 'index'])->name('genero.index');
Route::get('grupos_sanguineos', [GrupoSanguineoController::class, 'index'])->name('grupoSanguineo.index');
Route::get('nacionalidades', [NacionalidadController::class, 'index'])->name('modalidad.index');
Route::get('pacientes', [PacienteController::class, 'index'])->name('pacientes.index');
Route::get('previsiones', [PrevisionController::class, 'index'])->name('prevision.index');
Route::get('niveles_instruccion', [NivelInstruccionController::class, 'index'])->name('nivelInstruccion.index');
Route::get('pueblos_originarios', [PuebloOriginarioController::class, 'index'])->name('puebloOriginario.index');
Route::get('religiones', [ReligionController::class, 'index'])->name('religion.index');
Route::get('paciente/search', [PacienteController::class, 'search'])->name('paciente.search');
