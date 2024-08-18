<?php

use App\Http\Controllers\AtencionDiariaController;
use App\Http\Controllers\CertificacionController;
use App\Http\Controllers\DiatController;
use App\Http\Controllers\DiepController;
use App\Http\Controllers\EmpresaController;
use App\Http\Controllers\ExAlcoholController;
use App\Http\Controllers\ExAldehidoController;
use App\Http\Controllers\ExEpoController;
use App\Http\Controllers\ExEquilibrioController;
use App\Http\Controllers\ExHumoNegroController;
use App\Http\Controllers\ExMetalesController;
use App\Http\Controllers\ExPVTMERTController;
use App\Http\Controllers\ExPsicoController;
use App\Http\Controllers\ExRespiradorController;
use App\Http\Controllers\ExRuidoController;
use App\Http\Controllers\ExSaludController;
use App\Http\Controllers\ExSomnolenciaController;
use App\Http\Controllers\LicenciaMedicaController;
use App\Http\Controllers\VacunaController;
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

    Route::get(
        'atencion_diaria/search',
        [AtencionDiariaController::class, 'search']
    )->name('atencion_diaria.search');

    Route::get(
        'atencion_diaria',
        [AtencionDiariaController::class, 'consulta']
    )->name('atencion_diaria.consulta');

    Route::get(
        'certificacion/search',
        [CertificacionController::class, 'search']
    )->name('certificacion.search');

    Route::get(
        'certificacion',
        [CertificacionController::class, 'consulta']
    )->name('certificacion.consulta');

    Route::get(
        'vacuna/search',
        [VacunaController::class, 'search']
    )->name('vacuna.search');

    Route::get(
        'vacuna',
        [VacunaController::class, 'consulta']
    )->name('vacuna.consulta');

    Route::get(
        'licencia/search',
        [LicenciaMedicaController::class, 'search']
    )->name('licencia.search');

    Route::get(
        'licencia',
        [LicenciaMedicaController::class, 'consulta']
    )->name('licencia.consulta');

    Route::get(
        'diat/search',
        [DiatController::class, 'search']
    )->name('diat.search');

    Route::get(
        'diat',
        [DiatController::class, 'consulta']
    )->name('diat.consulta');


    Route::get(
        'diep/search',
        [DiepController::class, 'search']
    )->name('diep.search');

    Route::get(
        'diep',
        [DiepController::class, 'consulta']
    )->name('diep.consulta');

    Route::get(
        'exalcohol',
        [ExAlcoholController::class, 'consulta']
    )->name('exalcohol.consulta');

    Route::get(
        'exalcohol/search',
        [ExAlcoholController::class, 'search']
    )->name('exalcohol.search');

    Route::get(
        'exaldehido',
        [ExAldehidoController::class, 'consulta']
    )->name('exaldehido.consulta');

    Route::get(
        'exaldehido/search',
        [ExAldehidoController::class, 'search']
    )->name('exaldehido.search');


    Route::get(
        'exhumonegro',
        [ExHumoNegroController::class, 'consulta']
    )->name('exhumonegro.consulta');

    Route::get(
        '/exhumonegro/search',
        [ExHumoNegroController::class, 'search']
    )->name('exhumonegro.search');

    Route::get(
        'exmetales',
        [ExMetalesController::class, 'consulta']
    )->name('exmetales.consulta');

    Route::get(
        'exmetales/search',
        [ExMetalesController::class, 'search']
    )->name('exmetales.search');

    Route::get(
        'exepo/search',
        [ExEpoController::class, 'search']
    )->name('exepo.search');

    Route::get(
        'exepo',
        [ExEpoController::class, 'consulta']
    )->name('exepo.consulta');

    Route::get(
        'expsico',
        [ExPsicoController::class, 'consulta']
    )->name('expsico.consulta');


    Route::get(
        'expsico/search',
        [ExPsicoController::class, 'search']
    )->name('expsico.search');

    Route::get(
        'exequilibrio',
        [ExEquilibrioController::class, 'consulta']
    )->name('exequilibrio.consulta');

    Route::get(
        'exequilibrio/search',
        [ExEquilibrioController::class, 'search']
    )->name('exequilibrio.search');

    Route::get(
        'expvtmert',
        [ExPVTMERTController::class, 'consulta']
    )->name('expvtmert.consulta');

    Route::get(
        'expvtmert/search',
        [ExPVTMERTController::class, 'search']
    )->name('expvtmert.search');

    Route::get(
        'exrespirador',
        [ExRespiradorController::class, 'consulta']
    )->name('exrespirador.consulta');

    Route::get(
        '/exrespirador/search',
        [ExRespiradorController::class, 'search']
    )->name('exrespirador.search');


    Route::get(
        'exruido',
        [ExRuidoController::class, 'consulta']
    )->name('exruido.consulta');

    Route::get(
        'exruido/search',
        [ExRuidoController::class, 'search']
    )->name('exruido.search');

    Route::get(
        'exsalud',
        [ExSaludController::class, 'consulta']
    )->name('exsalud.consulta');


    Route::get(
        'exsalud/search',
        [ExSaludController::class, 'search']
    )->name('exsalud.search');

    Route::get(
        'exsomnolencia',
        [ExSomnolenciaController::class, 'consulta']
    )->name('exsomnolencia.consulta');

    Route::get(
        'exsomnolencia/search',
        [ExSomnolenciaController::class, 'search']
    )->name('exsomnolencia.search');

});
