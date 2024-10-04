<?php
use App\Http\Controllers\AfpController;
use App\Http\Controllers\CalleController;
use App\Http\Controllers\DerivacionController;
use App\Http\Controllers\EstablecimientoEducacionalController;
use App\Http\Controllers\EstadoCivilController;
use App\Http\Controllers\EspecialidadController;
use App\Http\Controllers\GeneroController;
use App\Http\Controllers\GrupoSanguineoController;
use App\Http\Controllers\InstruccionController;
use App\Http\Controllers\LeySocialController;
use App\Http\Controllers\MedioDerivacionController;
use App\Http\Controllers\NacionalidadController;
use App\Http\Controllers\NivelRiesgoController;
use App\Http\Controllers\PrevisionController;
use App\Http\Controllers\PuebloController;
use App\Http\Controllers\ReligionController;
use App\Http\Controllers\ResponsableController;
use App\Http\Controllers\SemaforoController;
use App\Http\Controllers\SeguroSaludController;
use App\Http\Controllers\TipoEnfermedadController;
use App\Http\Controllers\TipoLicenciaController;
use App\Http\Controllers\TrastornoCronicoController;
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

    Route::resource('afp', AfpController::class);
    Route::resource('calle', CalleController::class);
    Route::resource('derivacion', DerivacionController::class);
    Route::resource('especialidad', EspecialidadController::class);
    Route::resource('establecimiento_educacional', EstablecimientoEducacionalController::class);
    Route::resource('estado_civil', EstadoCivilController::class);
    Route::resource('genero', GeneroController::class);
    Route::resource('grupo_sanguineo', GrupoSanguineoController::class);
    Route::resource('instruccion', InstruccionController::class);
    Route::resource('ley_social', LeySocialController::class);
    Route::resource('medio_derivacion', MedioDerivacionController::class);
    Route::resource('nacionalidad', NacionalidadController::class);
    Route::resource('nivel_riesgo', NivelRiesgoController::class);
    Route::resource('prevision', PrevisionController::class);
    Route::resource('pueblo', PuebloController::class);
    Route::resource('religion', ReligionController::class);
    Route::resource('responsable', ResponsableController::class);
    Route::resource('semaforo', SemaforoController::class);
    Route::resource('seguro_salud', SeguroSaludController::class);
    Route::resource('trastorno_cronico', TrastornoCronicoController::class);
    Route::resource('tipo_enfermedad', TipoEnfermedadController::class);
    Route::resource('tipo_licencia', TipoLicenciaController::class);
});
