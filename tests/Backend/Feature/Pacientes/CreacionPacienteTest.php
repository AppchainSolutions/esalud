<?php

use App\Models\Paciente;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

it('puede crear un paciente con datos válidos', function () {
    $datosValidos = [
        'nombre' => 'Juan',
        'apellidos' => 'Pérez González',
        'rut' => '12.345.678-9',
        'email' => 'juan.perez@ejemplo.com',
        'fecha_nacimiento' => '1990-05-15'
    ];

    $response = $this->postJson('/api/pacientes', $datosValidos);

    $response
        ->assertStatus(201)
        ->assertJsonStructure([
            'id', 
            'nombre', 
            'apellidos', 
            'rut'
        ]);

    $this->assertDatabaseHas('pacientes', [
        'rut' => '12.345.678-9',
        'email' => 'juan.perez@ejemplo.com'
    ]);
});

it('no puede crear paciente con rut duplicado', function () {
    // Crear un paciente existente
    Paciente::factory()->create([
        'rut' => '12.345.678-9'
    ]);

    $datosInvalidos = [
        'nombre' => 'María',
        'apellidos' => 'García Ruiz',
        'rut' => '12.345.678-9',
        'email' => 'maria.garcia@ejemplo.com'
    ];

    $response = $this->postJson('/api/pacientes', $datosInvalidos);

    $response
        ->assertStatus(422)
        ->assertJsonValidationErrors(['rut']);
});
