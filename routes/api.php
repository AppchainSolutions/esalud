<?php

use App\Http\Controllers\PacienteController;
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

// Rutas protegidas que requieren autenticación
Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {

    // Rutas de Pacientes
        Route::get('pacientes/search', [PacienteController::class, 'search']);

    // Aquí puedes agregar más grupos de rutas protegidas
});


// // Rutas públicas (si las necesitas)
// Route::prefix('public')->group(function () {
//     // Aquí van las rutas públicas que no requieren autenticación
// });

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
