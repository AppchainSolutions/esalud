<?php

use Tests\TestCase;
use App\Models\Paciente;
use App\Models\User;
use App\Services\PacienteService;
use App\Repositories\PacienteRepository;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Validation\ValidationException;

uses(TestCase::class, RefreshDatabase::class, WithFaker::class);

beforeEach(function () {
    $this->artisan('migrate');
    $this->user = User::factory()->create();
    $this->actingAs($this->user);
});

describe('Gestión de Pacientes', function () {
    describe('Creación de Pacientes', function () {
        it('debe crear un paciente exitosamente', function () {
            // Given: Tenemos los datos válidos de un paciente
            $data = [
                'nombre' => 'Juan',
                'apellido' => 'Pérez',
                'rut' => '12345678-9',
                'fecha_nacimiento' => '1990-01-01',
                'genero' => 'M',
                'email' => 'juan@example.com',
                'telefono' => '123456789',
                'activo' => true,
                'protocolo_minsal' => false
            ];

            // When: Enviamos una solicitud POST para crear el paciente
            $response = $this->postJson('/api/pacientes', $data);

            // Then: La respuesta debe ser exitosa y el paciente debe estar en la base de datos
            $response->assertStatus(201)
                ->assertJson([
                    'success' => true,
                    'message' => 'Paciente creado exitosamente'
                ])
                ->assertJsonStructure([
                    'success',
                    'message',
                    'data' => [
                        'id',
                        'nombre',
                        'apellido',
                        'rut'
                    ]
                ]);

            $this->assertDatabaseHas('pacientes', [
                'nombre' => 'Juan',
                'apellido' => 'Pérez',
                'rut' => '12345678-9'
            ]);
        });

        it('debe validar campos requeridos', function () {
            // When: Enviamos una solicitud sin datos
            $response = $this->postJson('/api/pacientes', []);

            // Then: Debe retornar errores de validación
            $response->assertStatus(422)
                ->assertJsonValidationErrors(['nombre', 'apellido', 'rut']);
        });

        it('debe validar el formato del RUT', function () {
            // Given: Datos con RUT inválido
            $data = [
                'nombre' => 'Juan',
                'apellido' => 'Pérez',
                'rut' => 'invalid-rut'
            ];

            // When: Enviamos la solicitud
            $response = $this->postJson('/api/pacientes', $data);

            // Then: Debe retornar error de validación para el RUT
            $response->assertStatus(422)
                ->assertJsonValidationErrors(['rut']);
        });
    });

    describe('Actualización de Pacientes', function () {
        it('debe actualizar un paciente exitosamente', function () {
            // Given: Un paciente existente
            $paciente = Paciente::factory()->create();
            $data = [
                'nombre' => 'Juan Actualizado',
                'apellido' => 'Pérez Actualizado',
                'email' => 'juan.updated@example.com'
            ];

            // When: Enviamos la solicitud de actualización
            $response = $this->putJson("/api/pacientes/{$paciente->id}", $data);

            // Then: La actualización debe ser exitosa
            $response->assertStatus(200)
                ->assertJson([
                    'success' => true,
                    'message' => 'Paciente actualizado exitosamente'
                ]);

            $this->assertDatabaseHas('pacientes', [
                'id' => $paciente->id,
                'nombre' => 'Juan Actualizado',
                'apellido' => 'Pérez Actualizado'
            ]);
        });

        it('debe validar RUT único al actualizar', function () {
            // Given: Dos pacientes existentes
            $paciente1 = Paciente::factory()->create(['rut' => '12345678-9']);
            $paciente2 = Paciente::factory()->create(['rut' => '98765432-1']);

            // When: Intentamos actualizar el segundo paciente con el RUT del primero
            $response = $this->putJson("/api/pacientes/{$paciente2->id}", [
                'rut' => '12345678-9'
            ]);

            // Then: Debe retornar error de validación
            $response->assertStatus(422)
                ->assertJsonValidationErrors(['rut']);
        });
    });

    describe('Eliminación de Pacientes', function () {
        it('debe eliminar un paciente exitosamente', function () {
            // Given: Un paciente existente
            $paciente = Paciente::factory()->create();

            // When: Enviamos la solicitud de eliminación
            $response = $this->deleteJson("/api/pacientes/{$paciente->id}");

            // Then: El paciente debe ser eliminado
            $response->assertStatus(200)
                ->assertJson([
                    'success' => true,
                    'message' => 'Paciente eliminado exitosamente'
                ]);

            $this->assertDatabaseMissing('pacientes', [
                'id' => $paciente->id
            ]);
        });

        it('debe manejar la eliminación de paciente inexistente', function () {
            // When: Intentamos eliminar un paciente que no existe
            $response = $this->deleteJson("/api/pacientes/999999");

            // Then: Debe retornar error 404
            $response->assertStatus(404)
                ->assertJson([
                    'success' => false,
                    'message' => 'Paciente no encontrado'
                ]);
        });
    });

    describe('Manejo de Errores', function () {
        it('debe manejar errores de base de datos al crear', function () {
            // Given: Un servicio mockeado que lanza una excepción
            $mockService = $this->mock(PacienteService::class);
            $mockService->shouldReceive('store')
                ->once()
                ->andThrow(new \Exception('Error de base de datos'));

            // When: Intentamos crear un paciente
            $response = $this->postJson('/api/pacientes', [
                'nombre' => 'Test',
                'apellido' => 'User',
                'rut' => '12345678-9'
            ]);

            // Then: Debe retornar error 500
            $response->assertStatus(500)
                ->assertJson([
                    'success' => false,
                    'message' => 'Error al crear paciente',
                    'error' => 'Error de base de datos'
                ]);
        });

        it('debe manejar errores de base de datos al actualizar', function () {
            // Given: Un paciente existente y un servicio mockeado
            $paciente = Paciente::factory()->create();
            $mockService = $this->mock(PacienteService::class);
            $mockService->shouldReceive('update')
                ->once()
                ->andThrow(new \Exception('Error de base de datos'));

            // When: Intentamos actualizar el paciente
            $response = $this->putJson("/api/pacientes/{$paciente->id}", [
                'nombre' => 'Test Updated'
            ]);

            // Then: Debe retornar error 500
            $response->assertStatus(500)
                ->assertJson([
                    'success' => false,
                    'message' => 'Error al actualizar paciente',
                    'error' => 'Error de base de datos'
                ]);
        });
    });
});
