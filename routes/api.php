<?php

use App\Http\Controllers\AfpController;
use App\Http\Controllers\CalleController;
use App\Http\Controllers\DerivacionController;
use App\Http\Controllers\EspecialidadController;
use App\Http\Controllers\EstablecimientoEducacionalController;
use App\Http\Controllers\EstadoCivilController;
use App\Http\Controllers\GeneroController;
use App\Http\Controllers\GrupoSanguineoController;
use App\Http\Controllers\InstruccionController;
use App\Http\Controllers\LeySocialController;
use App\Http\Controllers\MedioDerivacionController;
use App\Http\Controllers\NacionalidadController;
use App\Http\Controllers\NivelInstruccionController;
use App\Http\Controllers\PrevisionController;
use App\Http\Controllers\PuebloOriginarioController;
use App\Http\Controllers\ReligionController;
use App\Http\Controllers\ResponsableController;
use App\Http\Controllers\SeguroSaludController;
use App\Http\Controllers\SemaforoController;
use App\Http\Controllers\TipoEnfermedadController;
use App\Http\Controllers\TipoLicenciaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
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
Route::get('afps', [AfpController::class, 'all'])->name('afp.all');
Route::get('calles', [CalleController::class, 'all'])->name('calle.all');
Route::get('estados_civiles', [EstadoCivilController::class, 'all'])->name('estadoCivil.all');
Route::get('especialidades', [EspecialidadController::class, 'all'])->name('especialidad.all');
Route::get('establecimientos_educacionales', [EstablecimientoEducacionalController::class, 'all'])->name('establecimientoEducacional.all');
Route::get('generos', [GeneroController::class, 'all'])->name('genero.all');
Route::get('grupos_sanguineos', [GrupoSanguineoController::class, 'all'])->name('grupoSanguineo.all');
Route::get('leyes_sociales', [LeySocialController::class, 'all'])->name('leySocial.all');
Route::get('nacionalidades', [NacionalidadController::class, 'all'])->name('modalidad.all');
Route::get('previsiones', [PrevisionController::class, 'all'])->name('prevision.all');
Route::get('niveles_instruccionales', [NivelInstruccionController::class, 'all'])->name('nivelInstruccion.all');
Route::get('pueblos_originarios', [PuebloOriginarioController::class, 'all'])->name('puebloOriginario.all');
Route::get('religiones', [ReligionController::class, 'all'])->name('religion.all');
Route::get('seguros_salud', [SeguroSaludController::class, 'all'])->name('seguroSalud.all');
