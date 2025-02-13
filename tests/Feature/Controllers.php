<?php

namespace Tests\Feature\Controllers;

use App\Http\Controllers\DashboardController;
use App\Models\Enfermedad;
use App\Models\Paciente;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Request;

uses(RefreshDatabase::class);

test('personasPorEmpresa', function () {
    // Crear algunos paciente con empresas
    Paciente::factory()->count(10)->create(['empresa' => 22]);
    Paciente::factory()->count(5)->create(['empresa' => 6]);
    Paciente::factory()->count(3)->create(['empresa' => 8]);

    // Llamar al método personasPorEmpresa
    $response = app(DashboardController::class)->personasPorEmpresa();

    // Verificar que la respuesta tenga los datos esperados
    expect($response)->toHaveCount(3);
    expect($response[0]->descripcion)->toBe('Empresa 22');
    expect($response[0]->total)->toBe(10);
    expect($response[1]->descripcion)->toBe('Empresa 6');
    expect($response[1]->total)->toBe(5);
    expect($response[2]->descripcion)->toBe('Empresa 8');
    expect($response[2]->total)->toBe(3);
});

test('personasPorUnidad', function () {
    // Crear algunos paciente con unidades
    Paciente::factory()->count(10)->create(['unidad' => 1]);
    Paciente::factory()->count(5)->create(['unidad' => 2]);
    Paciente::factory()->count(3)->create(['unidad' => 3]);

    // Llamar al método personasPorUnidad
    $response = app(DashboardController::class)->personasPorUnidad();

    // Verificar que la respuesta tenga los datos esperados
    expect($response)->toHaveCount(3);
    expect($response[0]->descripcion)->toBe('Unidad 1');
    expect($response[0]->total)->toBe(10);
    expect($response[1]->descripcion)->toBe('Unidad 2');
    expect($response[1]->total)->toBe(5);
    expect($response[2]->descripcion)->toBe('Unidad 3');
    expect($response[2]->total)->toBe(3);
});

test('personasPorPlanta', function () {
    // Crear algunos paciente con plantas
    Paciente::factory()->count(10)->create(['planta' => 1]);
    Paciente::factory()->count(5)->create(['planta' => 2]);
    Paciente::factory()->count(3)->create(['planta' => 3]);

    // Llamar al método personasPorPlanta
    $response = app(DashboardController::class)->personasPorPlanta();

    // Verificar que la respuesta tenga los datos esperados
    expect($response)->toHaveCount(3);
    expect($response[0]->descripcion)->toBe('Planta 1');
    expect($response[0]->total)->toBe(10);
    expect($response[1]->descripcion)->toBe('Planta 2');
    expect($response[1]->total)->toBe(5);
    expect($response[2]->descripcion)->toBe('Planta 3');
    expect($response[2]->total)->toBe(3);
});

test('personasPorCeco', function () {
    // Crear algunos paciente con cecos
    Paciente::factory()->count(10)->create(['ceco' => 1]);
    Paciente::factory()->count(5)->create(['ceco' => 2]);
    Paciente::factory()->count(3)->create(['ceco' => 3]);

    // Llamar al método personasPorCeco
    $response = app(DashboardController::class)->personasPorCeco();

    // Verificar que la respuesta tenga los datos esperados
    expect($response)->toHaveCount(3);
    expect($response[0]->descripcion)->toBe('Ceco 1');
    expect($response[0]->total)->toBe(10);
    expect($response[1]->descripcion)->toBe('Ceco 2');
    expect($response[1]->total)->toBe(5);
    expect($response[2]->descripcion)->toBe('Ceco 3');
    expect($response[2]->total)->toBe(3);
});

test('personasPorExpo', function () {
    // Crear algunos paciente con exposiciones
    Paciente::factory()->count(10)->create(['exposicion' => 'Exposicion 1']);
    Paciente::factory()->count(5)->create(['exposicion' => 'Exposicion 2']);
    Paciente::factory()->count(3)->create(['exposicion' => 'Exposicion 3']);

    // Llamar al método personasPorExpo
    $response = app(DashboardController::class)->personasPorExpo();

    // Verificar que la respuesta tenga los datos esperados
    expect($response['descripcion'])->toHaveCount(3);
    expect($response['descripcion'][0])->toBe('Exposicion 1');
    expect($response['total'][0])->toBe(10);
    expect($response['descripcion'][1])->toBe('Exposicion 2');
    expect($response['total'][1])->toBe(5);
    expect($response['descripcion'][2])->toBe('Exposicion 3');
    expect($response['total'][2])->toBe(3);
});

test('enfermedad_empresa', function () {
    // Crear algunos paciente con enfermedades
    Paciente::factory()->count(10)->create(['empresa' => 1]);
    Enfermedad::factory()->count(10)->create(['paciente_id' => 1, 'trastorno_cronico_id' => 1]);
    Enfermedad::factory()->count(5)->create(['paciente_id' => 2, 'trastorno_cronico_id' => 2]);
    Enfermedad::factory()->count(3)->create(['paciente_id' => 3, 'trastorno_cronico_id' => 3]);

    // Llamar al método enfermedad_empresa
    $response = app(DashboardController::class)->enfermedad_empresa(new Request(['id' => 1]));

    // Verificar que la respuesta tenga los datos esperados
    expect($response['descripcion'])->toHaveCount(3);
    expect($response['descripcion'][0])->toBe('Enfermedad 1');
    expect($response['total'][0])->toBe(10);
    expect($response['descripcion'][1])->toBe('Enfermedad 2');
    expect($response['total'][1])->toBe(5);
    expect($response['descripcion'][2])->toBe('Enfermedad 3');
    expect($response['total'][2])->toBe(3);
});

test('enfermedad_planta', function () {
    // Crear algunos paciente con enfermedades
    Paciente::factory()->count(10)->create(['planta' => 1]);
    Enfermedad::factory()->count(10)->create(['paciente_id' => 1, 'trastorno_cronico_id' => 1]);
    Enfermedad::factory()->count(5)->create(['paciente_id' => 2, 'trastorno_cronico_id' => 2]);
    Enfermedad::factory()->count(3)->create(['paciente_id' => 3, 'trastorno_cronico_id' => 3]);

    // Llamar al método enfermedad_planta
    $response = app(DashboardController::class)->enfermedad_planta(new Request(['id' => 1]));

    // Verificar que la respuesta tenga los datos esperados
    expect($response['descripcion'])->toHaveCount(3);
    expect($response['descripcion'][0])->toBe('Enfermedad 1');
    expect($response['total'][0])->toBe(10);
    expect($response['descripcion'][1])->toBe('Enfermedad 2');
    expect($response['total'][1])->toBe(5);
    expect($response['descripcion'][2])->toBe('Enfermedad 3');
    expect($response['total'][2])->toBe(3);
});
