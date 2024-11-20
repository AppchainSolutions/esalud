<?php

use App\Http\Controllers\AccidenteCondicionController;
use App\Http\Controllers\AccidenteController;
use App\Http\Controllers\AfpController;
use App\Http\Controllers\AreaController;
use App\Http\Controllers\BateriaController;
use App\Http\Controllers\CalificacionController;
use App\Http\Controllers\CecoController;
use App\Http\Controllers\Cie10Controller;
use App\Http\Controllers\DerivacionController;
use App\Http\Controllers\EmpresaController;
use App\Http\Controllers\ErrorCriticoController;
use App\Http\Controllers\EstadoCertificacionController;
use App\Http\Controllers\EstadoCivilController;
use App\Http\Controllers\EstadoEpoController;
use App\Http\Controllers\EstadoMentalController;
use App\Http\Controllers\EstadoExamenController;
use App\Http\Controllers\ExposicionController;
use App\Http\Controllers\FuenteIncidenteController;
use App\Http\Controllers\GeneroController;
use App\Http\Controllers\GrupoSanguineoController;
use App\Http\Controllers\InstruccionController;
use App\Http\Controllers\LeySocialController;
use App\Http\Controllers\LugarAtencionController;
use App\Http\Controllers\MedioDerivacionController;
use App\Http\Controllers\NacionalidadController;
use App\Http\Controllers\NivelRiesgoController;
use App\Http\Controllers\PlantaController;
use App\Http\Controllers\PrevisionController;
use App\Http\Controllers\PuebloController;
use App\Http\Controllers\ReligionController;
use App\Http\Controllers\ResponsableController;
use App\Http\Controllers\SemaforoController;
use App\Http\Controllers\SeguroController;
use App\Http\Controllers\SistemaAfectadoController;
use App\Http\Controllers\TestDrogaController;
use App\Http\Controllers\TipoAccidenteController;
use App\Http\Controllers\TipoAtencionController;
use App\Http\Controllers\TipoEnfermedadController;
use App\Http\Controllers\TipoExamenController;
use App\Http\Controllers\TipoLicenciaController;
use App\Http\Controllers\TrastornoCronicoController;
use App\Http\Controllers\TurnoController;
use App\Http\Controllers\UnidadController;
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

    /** Tablas secundarias */

    Route::resource('accidente', AccidenteController::class);
    Route::resource('accidente_condicion', AccidenteCondicionController::class);
    Route::resource('afp', AfpController::class);
    Route::resource('area', AreaController::class);
    Route::resource('bateria', BateriaController::class);
    Route::resource('calificacion', CalificacionController::class);
    Route::resource('ceco', CecoController::class);
    Route::resource('cie10', Cie10Controller::class);
    Route::resource('derivacion', DerivacionController::class);
    Route::resource('empresa', EmpresaController::class);
    Route::resource('error_critico', ErrorCriticoController::class);
    Route::resource('estado_certificacion', EstadoCertificacionController::class);
    Route::resource('estado_civil', EstadoCivilController::class);
    Route::resource('estado_examen', EstadoExamenController::class);
    Route::resource('estado_epo', EstadoEpoController::class);
    Route::resource('estado_mental', EstadoMentalController::class);
    Route::resource('exposicion', ExposicionController::class);
    Route::resource('fuente_incidente', FuenteIncidenteController::class);
    Route::resource('genero', GeneroController::class);
    Route::resource('grupo_sanguineo', GrupoSanguineoController::class);
    Route::resource('instruccion', InstruccionController::class);
    Route::resource('ley_social', LeySocialController::class);
    Route::resource('lugar_atencion', LugarAtencionController::class);
    Route::resource('medio_derivacion', MedioDerivacionController::class);
    Route::resource('nacionalidad', NacionalidadController::class);
    Route::resource('nivel_riesgo', NivelRiesgoController::class);
    Route::resource('planta', PlantaController::class);
    Route::resource('prevision', PrevisionController::class);
    Route::resource('pueblo', PuebloController::class);
    Route::resource('religion', ReligionController::class);
    Route::resource('responsable', ResponsableController::class);
    Route::resource('semaforo', SemaforoController::class);
    Route::resource('seguro', SeguroController::class);
    Route::resource('sistema_afectado', SistemaAfectadoController::class);
    Route::resource('test_drogas', TestDrogaController::class);
    Route::resource('trastorno_cronico', TrastornoCronicoController::class);
    Route::resource('tipo_accidente', TipoAccidenteController::class);
    Route::resource('tipo_atencion', TipoAtencionController::class);
    Route::resource('tipo_enfermedad', TipoEnfermedadController::class);
    Route::resource('tipo_examen', TipoExamenController::class);
    Route::resource('tipo_licencia', TipoLicenciaController::class);
    Route::resource('turno', TurnoController::class);
    Route::resource('unidad', UnidadController::class);
});
