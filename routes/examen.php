<?php

use App\Http\Controllers\ExAlcoholController;
use App\Http\Controllers\ExAldehidoController;
use App\Http\Controllers\ExAsmaController;
use App\Http\Controllers\ExEpoController;
use App\Http\Controllers\ExEquilibrioController;
use App\Http\Controllers\ExHumoNegroController;
use App\Http\Controllers\ExMetalesController;
use App\Http\Controllers\ExPVTMERTController;
use App\Http\Controllers\ExPsicoController;
use App\Http\Controllers\ExRespiradorController;
use App\Http\Controllers\ExRuidoController;
use App\Http\Controllers\ExSaludController;
use App\Http\Controllers\ExSiliceController;
use App\Http\Controllers\ExSolventeController;
use App\Http\Controllers\ExSomnolenciaController;
use Illuminate\Support\Facades\Route;

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::resource('alcohol', ExAlcoholController::class);
    Route::resource('aldehido', ExAldehidoController::class);
    Route::resource('asma', ExAsmaController::class);
    Route::resource('epo', ExEpoController::class);
    Route::resource('equilibrio', ExEquilibrioController::class);
    Route::resource('humonegro', ExHumoNegroController::class);
    Route::resource('metal', ExMetalesController::class);
    Route::resource('psico', ExPsicoController::class);
    Route::resource('pvtmert', ExPVTMERTController::class);
    Route::resource('respirador', ExRespiradorController::class);
    Route::resource('ruido', ExRuidoController::class);
    Route::resource('salud', ExSaludController::class);
    Route::resource('silice', ExSiliceController::class);
    Route::resource('solvente', ExSolventeController::class);
    Route::resource('somnolencia', ExSomnolenciaController::class);
});
