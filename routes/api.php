<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AfpController;
use App\Http\Controllers\CalleController;
use App\Http\Controllers\EstadoCivilController;
use App\Http\Controllers\EspecialidadController;
use App\Http\Controllers\EstablecimientoEducacionalController;
use App\Http\Controllers\GeneroController;
use App\Http\Controllers\GrupoSanguineoController;
use App\Http\Controllers\LeySocialController;
use App\Http\Controllers\NacionalidadController;
use App\Http\Controllers\NivelInstruccionController;
use App\Http\Controllers\PrevisionController;
use App\Http\Controllers\PuebloOriginarioController;
use App\Http\Controllers\ReligionController;
use App\Http\Controllers\SeguroSaludController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();

});

// TODO: Seguir desde Especialidad
Route::get('afp/all', [AfpController::class, 'all'])->name('afp.all');
Route::get('calle/all', [CalleController::class, 'all'])->name('calle.all');
Route::get('estado_civil/all', [EstadoCivilController::class, 'all'])->name('estadoCivil.all');
Route::get('especialidad/all', [EspecialidadController::class, 'all'])->name('especialidad.all');
Route::get('establecimiento_educacional/all', [EstablecimientoEducacionalController::class, 'all'])->name('establecimientoEducacional.all');
Route::get('genero/all', [GeneroController::class, 'all'])->name('genero.all');
Route::get('grupo_sanguineo/all', [GrupoSanguineoController::class, 'all'])->name('grupoSanguineo.all');
Route::get('ley_social/all', [LeySocialController::class, 'all'])->name('leySocial.all');
Route::get('nacionalidad/all', [NacionalidadController::class, 'all'])->name('modalidad.all');
Route::get('prevision/all', [PrevisionController::class, 'all'])->name('prevision.all');
Route::get('nivel_instruccion/all', [NivelInstruccionController::class, 'all'])->name('nivelInstruccion.all');
Route::get('pueblo_originario/all', [PuebloOriginarioController::class, 'all'])->name('puebloOriginario.all');
Route::get('religion/all', [ReligionController::class, 'all'])->name('religion.all');
Route::get('seguro_salud/all', [SeguroSaludController::class, 'all'])->name('seguroSalud.all');