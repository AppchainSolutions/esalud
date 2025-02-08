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
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LicenciaMedicaController;
use App\Http\Controllers\MedicamentoController;
use App\Http\Controllers\PacienteController;
use App\Http\Controllers\PacienteActivacionController;
use App\Http\Controllers\VacunaController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Mail;

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

/* 
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('send-mail', [MailController::class, 'index']); */

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    // Cambiar redireccionamiento a HomeController
    Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

    // Agregar ruta para mi dashboard
    // Route::get('/mi_dashboard', [App\Http\Controllers\Paciente\MiDashboardController::class, 'index'])
    //     ->name('paciente.mi_dashboard')
    //     ->middleware('acceso.paciente');

    Route::prefix('consulta')->group(__DIR__ . '/consulta.php');
    Route::prefix('examen')->group(__DIR__ . '/examen.php');
    Route::prefix('secundaria')->group(__DIR__ . '/secundaria.php');
    Route::prefix('dashboard')->group(__DIR__ . '/dashboard.php');
    Route::group([], __DIR__ . '/dashboards.php');

    Route::inertia('ficha', 'SubPages/FichaMedica');
    Route::resource('alergia', AlergiaController::class);
    Route::resource('atencion_diaria', AtencionDiariaController::class);
    Route::resource('certificacion', CertificacionController::class);
    Route::resource('cirugia', CirugiaController::class);
    Route::resource('diat', DiatController::class);
    Route::resource('diep', DiepController::class);
    Route::resource('enfermedad', EnfermedadController::class);
    Route::resource('factor', FactorRiesgoController::class);
    Route::resource('familiar', AntecedenteFamiliarController::class);
    Route::resource('licencia', LicenciaMedicaController::class);
    Route::resource('medicamento', MedicamentoController::class);
    Route::resource('paciente', PacienteController::class);
    Route::resource('vacuna', VacunaController::class);

    // Route::middleware(['auth', 'verified'])->group(function () {
    // Rutas existentes...
    // Route::get('mi_dashboard', [App\Http\Controllers\Paciente\MiDashboardController::class, 'index'])
    //     ->name('paciente.mi_dashboard');
    // Route::get('mi_perfil_personal', [App\Http\Controllers\Paciente\MiPerfilController::class, 'personal'])
    //     ->name('paciente.mi_perfil_personal');
    // Route::get('mi_perfil_medico', [App\Http\Controllers\Paciente\MiPerfilController::class, 'medico'])
    //     ->name('paciente.mi_perfil_medico');
    // Route::put('mi_perfil', [App\Http\Controllers\Paciente\MiPerfilController::class, 'update'])
    //     ->name('paciente.mi_perfil_personal.update');

    // Rutas de activación de pacientes
    Route::post('/pacientes/{paciente}/enviar-activacion', [PacienteController::class, 'enviarActivacion'])
        ->name('pacientes.enviar-activacion');
    Route::post('/pacientes/{paciente}/reenviar-activacion', [PacienteController::class, 'reenviarActivacion'])
        ->name('pacientes.reenviar-activacion');
    // });

    // Ruta para activación de paciente
    // Route::get('/activar-cuenta/{token}', [PacienteActivacionController::class, 'mostrarFormulario'])
    //     ->name('paciente.mostrar-activacion');

    // Route::post('/activar-cuenta', [PacienteActivacionController::class, 'activarCuenta'])
    //     ->name('paciente.activar');
});

// Rutas protegidas para pacientes
Route::middleware(['auth', 'acceso.paciente'])->prefix('paciente')->group(function () {
    Route::get('/mi_dashboard', [App\Http\Controllers\Paciente\MiDashboardController::class, 'index'])
        ->name('paciente.mi_dashboard');
    Route::get('mi_perfil', [App\Http\Controllers\Paciente\MiPerfilController::class, 'show'])
        ->name('paciente.mi_perfil');
    Route::put('mi_perfil', [App\Http\Controllers\Paciente\MiPerfilController::class, 'update'])
        ->name('paciente.mi_perfil.update');


    // Route::get('/historial-medico', [App\Http\Controllers\Paciente\HistorialMedicoController::class, 'index'])
    //     ->name('paciente.historial');
    // Route::get('/historial-medico/{consultaId}', [App\Http\Controllers\Paciente\HistorialMedicoController::class, 'detalleConsulta'])
    //     ->name('paciente.historial.detalle');

    // Route::get('/citas', [App\Http\Controllers\Paciente\CitaController::class, 'index'])
    //     ->name('paciente.citas');
});

// Rutas de Activación de Pacientes
Route::middleware('guest')->group(function () {
    // Mostrar formulario de activación
    Route::get('/activar/{token}', [PacienteActivacionController::class, 'mostrarFormulario'])
        ->name('paciente.activacion.formulario')
        ->middleware('signed');

    // Procesar activación de cuenta
    Route::post('/activar', [PacienteActivacionController::class, 'activarCuenta'])
        ->name('paciente.activacion.completar')
        ->middleware('signed');
});

// Route::get('/activar/{token}', [PacienteActivacionController::class, 'mostrarFormulario'])
//     ->name('paciente.activacion')
//     ->middleware('guest');

// Route::post('/activar', [PacienteActivacionController::class, 'activarCuenta'])
//     ->name('paciente.activar')
//     ->middleware('guest');

// Route::get('/paciente/activar/{token}', [App\Http\Controllers\Paciente\ActivacionController::class, 'mostrarFormularioActivacion'])
//     ->name('paciente.activar.formulario');

// Route::post('/paciente/activar', [App\Http\Controllers\Paciente\ActivacionController::class, 'activar'])
//     ->name('paciente.activar');

// Rutas de activación de cuenta de paciente sin autenticación
// Route::get('/activar-cuenta/{token}', [App\Http\Controllers\Paciente\ActivacionController::class, 'activar'])
//     ->name('paciente.activar');

// Route::post('/activar-cuenta', [App\Http\Controllers\Paciente\ActivacionController::class, 'completarActivacion'])
//     ->name('paciente.completar-activacion');
