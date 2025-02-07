<?php

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

// Rutas de pruebas para Cypress
Route::prefix('pruebas')->group(function () {
    Route::post('/reset-database', [PruebasController::class, 'resetDatabase']);
    Route::post('/pacientes/crear', [PruebasController::class, 'crearPacientePrueba']);
    Route::post('/pacientes/generar-token', [PruebasController::class, 'generarTokenActivacion']);
    Route::post('/pacientes/generar-token-expirado', [PruebasController::class, 'generarTokenActivacionExpirado']);
    Route::get('/emails/verificar', [PruebasController::class, 'verificarCorreo']);
});
