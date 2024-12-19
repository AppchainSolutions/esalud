<?php

namespace Tests\Feature;

use App\Models\Pacientes;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Mockery;

uses(RefreshDatabase::class);
test('it renders paciente page successfully', function () {
    $pacienteRepositoryMock = Mockery::mock(PacienteRepository::class);
    $controller = new PacienteController($pacienteRepositoryMock);

    Inertia::shouldReceive('render')
        ->once()
        ->with('PacientePage')
        ->andReturn('Rendered PacientePage');

    $response = $controller->index();

    expect($response)->toBe('Rendered PacientePage');
});

test('it handles invalid patient id gracefully', function () {
    $pacienteRepositoryMock = Mockery::mock('App\Repository\PacienteRepository');
    $pacienteRepositoryMock->shouldReceive('show')
        ->once()
        ->with(Mockery::type(Request::class))
        ->andReturn(null);

    $controller = new PacienteController($pacienteRepositoryMock);
    $request = new Request(['id' => 'invalid-id']);

    $response = $controller->show($request);

    expect($response)->toBeNull();
});
it('Pacientes with relationshions', function () {
    // ... (existing code)

    // Fixing the typo in the property name
    expect($paciente->estado_civil)->toBe($estadoCivil->id);
    expect($paciente->estado_civil_responsable)->toBe($estadoCivil->id);

    // ... (existing code)
});

it('has fillable attributes', function () {
    $paciente = new Pacientes;
    expect($paciente->getFillable())->toEqual([
        // ... (existing fillable attributes)

        // Adding missing attributes
        'remember_token',
        'rut_responsable',
        'rut',
        'telefono_responsable',
        'telefono1',
        'telefono2',
    ]);
});

test('it renders paciente page successfully', function () {
    $pacienteRepositoryMock = Mockery::mock('App\Repository\PacienteRepository');
    $controller = new PacienteController($pacienteRepositoryMock);

    Inertia::shouldReceive('render')
        ->once()
        ->with('PacientePage')
        ->andReturn('Rendered PacientePage');

    $response = $controller->index();

    expect($response)->toBe('Rendered PacientePage');
});

test('it handles invalid patient id gracefully', function () {
    $pacienteRepositoryMock = Mockery::mock('App\Repository\PacienteRepository');
    $pacienteRepositoryMock->shouldReceive('show')
        ->once()
        ->with(Mockery::type(Request::class))
        ->andReturn(null);

    $controller = new PacienteController($pacienteRepositoryMock);
    $request = new Request(['id' => 'invalid-id']);

    $response = $controller->show($request);

    expect($response)->toBeNull();
});
