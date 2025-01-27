<?php

use Tests\TestCase;
use App\Models\Paciente;
use App\Models\User;
use App\Models\Exposicion;
use App\Http\Controllers\PacienteController;
use App\Services\PacienteService;
use App\Repository\PacienteRepository;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Config;
use function Pest\Laravel\post;
use function Pest\Laravel\get;

uses(TestCase::class, RefreshDatabase::class);

beforeEach(function () {
    $user = User::factory()->create();
    $this->actingAs($user);
});

// Grupo de pruebas para la página principal
describe('Vista Principal', function () {
    covers(PacienteController::class);
    
    test('puede renderizar la página de pacientes', function () {
        $response = get('/pacientes');

        $response->assertStatus(200)
            ->assertInertia(fn($assert) => $assert->component('PacientePage'));
    })->group('pacientes', 'vista');
});

// Grupo de pruebas para búsqueda
describe('Búsqueda de Pacientes', function () {
    covers([PacienteController::class, PacienteService::class]);
    
    test('puede buscar paciente por rut', function () {
        // Given: Un paciente con RUT específico
        $paciente = Paciente::factory()->create([
            'rut' => '12345678-9',
            'activo' => true
        ]);

        // When: Buscamos por ese RUT
        $searchQuery = [
            'searchQuery' => [
                'filters' => [
                    'rut' => '12345678-9',
                    'activo' => true
                ],
                'fieldMap' => [
                    'rut' => ['type' => 'text', 'operator' => 'like'],
                    'activo' => ['type' => 'boolean']
                ]
            ]
        ];

        $response = post('/api/pacientes/search', $searchQuery);

        // Then: Debemos encontrar solo ese paciente
        $response->assertStatus(200)
            ->assertJson([
                'success' => true
            ])
            ->assertJsonCount(1, 'data')
            ->assertJsonPath('data.0.rut', '12345678-9');
    })->group('pacientes', 'busqueda');

    test('puede buscar pacientes activos', function () {
        // Given: Pacientes activos e inactivos
        $pacientesActivos = Paciente::factory()->count(3)->create(['activo' => true]);
        $pacientesInactivos = Paciente::factory()->count(2)->create(['activo' => false]);

        // When: Buscamos pacientes activos
        $searchQuery = [
            'searchQuery' => [
                'filters' => [
                    'activo' => true
                ],
                'fieldMap' => [
                    'activo' => ['type' => 'boolean']
                ]
            ]
        ];

        $response = post('/api/pacientes/search', $searchQuery);

        // Then: Solo encontramos los pacientes activos
        $response->assertStatus(200)
            ->assertJson([
                'success' => true
            ])
            ->assertJsonCount(3, 'data');

        $responseData = $response->json('data');
        $activosIds = $pacientesActivos->pluck('id')->toArray();

        collect($responseData)->each(function ($paciente) use ($activosIds) {
            expect($paciente['activo'])->toBeTrue();
            expect(in_array($paciente['id'], $activosIds))->toBeTrue();
        });
    })->group('pacientes', 'busqueda');

    test('puede buscar por empresa', function () {
        // Given: Pacientes con diferentes empresas
        $pacientesEmpresa1 = Paciente::factory()->count(2)->create([
            'empresa' => 1,
            'activo' => true
        ]);

        $pacientesEmpresa2 = Paciente::factory()->count(3)->create([
            'empresa' => 2,
            'activo' => true
        ]);

        // When: Buscamos por empresa específica
        $searchQuery = [
            'searchQuery' => [
                'filters' => [
                    'empresa' => 1,
                    'activo' => true
                ],
                'fieldMap' => [
                    'empresa' => ['type' => 'numeric', 'relation' => false],
                    'activo' => ['type' => 'boolean']
                ]
            ]
        ];

        $response = post('/api/pacientes/search', $searchQuery);

        // Then: Solo encontramos pacientes de esa empresa
        $response->assertStatus(200)
            ->assertJson([
                'success' => true
            ])
            ->assertJsonCount(2, 'data');

        $responseData = $response->json('data');
        $empresa1Ids = $pacientesEmpresa1->pluck('id')->toArray();

        collect($responseData)->each(function ($paciente) use ($empresa1Ids) {
            expect($paciente['empresa'])->toBe(1);
            expect(in_array($paciente['id'], $empresa1Ids))->toBeTrue();
        });
    })->group('pacientes', 'busqueda');

    test('puede buscar por exposiciones', function () {
        // Given: Limpiamos la base de datos y creamos datos de prueba
        Paciente::query()->delete();
        Exposicion::query()->delete();

        $exposicion1 = Exposicion::create(['descripcion' => 'Ruido']);
        $exposicion2 = Exposicion::create(['descripcion' => 'Polvo']);

        $pacientesExp1 = Paciente::factory()->count(3)->create([
            'exposicion' => json_encode(['Ruido', 'Polvo']),
            'activo' => true,
            'protocolo_minsal' => false
        ]);

        $pacientesExp2 = Paciente::factory()->count(2)->create([
            'exposicion' => json_encode(['Vibración']),
            'activo' => true,
            'protocolo_minsal' => false
        ]);

        // When: Buscamos por exposiciones específicas
        $searchQuery = [
            'searchQuery' => [
                'filters' => [
                    'exposicion' => ['Ruido', 'Polvo'],
                    'activo' => true,
                    'protocolo_minsal' => false
                ],
                'fieldMap' => [
                    'exposicion' => ['type' => 'array', 'operator' => 'contains'],
                    'activo' => ['type' => 'boolean'],
                    'protocolo_minsal' => ['type' => 'boolean']
                ]
            ]
        ];

        $response = post('/api/pacientes/search', $searchQuery);

        // Then: Encontramos solo los pacientes con esas exposiciones
        $response->assertStatus(200)
            ->assertJson([
                'success' => true
            ])
            ->assertJsonCount(3, 'data');

        $responseData = $response->json('data');
        $exp1Ids = $pacientesExp1->pluck('id')->toArray();

        collect($responseData)->each(function ($paciente) use ($exp1Ids) {
            $exposiciones = json_decode($paciente['exposicion'], true);
            expect(in_array($paciente['id'], $exp1Ids))->toBeTrue();
            expect(count(array_intersect($exposiciones, ['Ruido', 'Polvo'])))->toBeGreaterThan(0);
            expect($paciente['activo'])->toBeTrue();
            expect($paciente['protocolo_minsal'])->toBeFalse();
        });
    })->group('pacientes', 'busqueda');

    test('puede buscar con múltiples filtros', function () {
        // Given: Preparamos los datos de prueba
        $paciente = Paciente::factory()->create([
            'rut' => '12345678-9',
            'activo' => true,
            'empresa' => 1,
            'exposicion' => json_encode(['Ruido']),
            'protocolo_minsal' => false
        ]);

        // When: Buscamos con múltiples filtros
        $searchQuery = [
            'searchQuery' => [
                'filters' => [
                    'rut' => '12345678-9',
                    'activo' => true,
                    'empresa' => 1,
                    'exposicion' => ['Ruido'],
                    'protocolo_minsal' => false
                ],
                'fieldMap' => [
                    'rut' => ['type' => 'text', 'operator' => 'like'],
                    'activo' => ['type' => 'boolean'],
                    'empresa' => ['type' => 'numeric', 'relation' => false],
                    'exposicion' => ['type' => 'array', 'operator' => 'contains'],
                    'protocolo_minsal' => ['type' => 'boolean']
                ]
            ]
        ];

        $response = post('/api/pacientes/search', $searchQuery);

        // Then: Encontramos el paciente que cumple con todos los filtros
        $response->assertStatus(200)
            ->assertJson([
                'success' => true
            ])
            ->assertJsonCount(1, 'data')
            ->assertJsonPath('data.0.rut', '12345678-9')
            ->assertJsonPath('data.0.empresa', 1);
    })->group('pacientes', 'busqueda');
});

describe('Pruebas de Mutación', function () {
    test('search_should_handle_errors', function () {
        $this->withoutExceptionHandling();
        
        // Mock del servicio para forzar una excepción
        $mockService = $this->mock(PacienteService::class);
        $mockService->shouldReceive('search')
            ->once()
            ->andThrow(new \Exception('Error de prueba'));

        $response = $this->postJson('/api/pacientes/search', [
            'searchQuery' => [
                'filters' => [],
                'fieldMap' => []
            ]
        ]);

        $response->assertStatus(500)
            ->assertJson([
                'success' => false,
                'message' => 'Error al buscar pacientes',
                'error' => 'Error de prueba'
            ]);
    })->group('pacientes', 'busqueda', 'mutacion');

    test('search_should_return_success_response', function () {
        // Mock del servicio para retornar datos de prueba
        $mockService = $this->mock(PacienteService::class);
        $mockService->shouldReceive('search')
            ->once()
            ->andReturn([
                ['id' => 1, 'nombre' => 'Test User']
            ]);

        $response = $this->postJson('/api/pacientes/search', [
            'searchQuery' => [
                'filters' => [],
                'fieldMap' => []
            ]
        ]);

        $response->assertStatus(200)
            ->assertJson([
                'success' => true,
                'data' => [
                    ['id' => 1, 'nombre' => 'Test User']
                ]
            ]);
    })->group('pacientes', 'busqueda', 'mutacion');

    test('search_should_handle_invalid_field_type', function () {
        // Given: Preparamos una búsqueda con un campo de tipo inválido
        $searchQuery = [
            'searchQuery' => [
                'filters' => [
                    'activo' => 'no-boolean'  // Esto debería ser un booleano
                ],
                'fieldMap' => [
                    'activo' => [
                        'type' => 'boolean'
                    ]
                ]
            ]
        ];

        // When: Enviamos la solicitud
        $response = post('/api/pacientes/search', $searchQuery);

        // Then: Debemos recibir un error de validación
        $response->assertStatus(422)
            ->assertJson([
                'success' => false,
                'message' => 'Error de validación'
            ]);
    })->group('pacientes', 'busqueda', 'mutacion');

    test('search_should_handle_empty_results', function () {
        // Given: No hay pacientes en la base de datos

        // When: Realizamos una búsqueda
        $response = post('/api/pacientes/search', [
            'searchQuery' => [
                'filters' => [],
                'fieldMap' => []
            ]
        ]);

        // Then: Debemos recibir un array vacío
        $response->assertStatus(200)
            ->assertJson([
                'success' => true,
                'data' => []
            ]);
    })->group('pacientes', 'busqueda', 'mutacion');

    test('search_should_validate_required_fields', function () {
        // When: Enviamos una búsqueda sin searchQuery
        $response = post('/api/pacientes/search', []);

        // Then: Debemos recibir un error de validación
        $response->assertStatus(422)
            ->assertJsonValidationErrors(['searchQuery']);
    })->group('pacientes', 'busqueda', 'mutacion');

    test('search_should_handle_invalid_json_format', function () {
        // When: Enviamos un formato JSON inválido
        $response = post('/api/pacientes/search', ['invalid json']);

        // Then: Debemos recibir un error de validación
        $response->assertStatus(422)
            ->assertJsonValidationErrors(['searchQuery']);
    })->group('pacientes', 'busqueda', 'mutacion');

    test('search_should_handle_database_error', function () {
        // Given: Forzamos un error en la consulta
        $mockService = $this->mock(PacienteService::class);
        $mockService->shouldReceive('search')
            ->once()
            ->andThrow(new \Exception('Error de base de datos'));

        // When: Realizamos una búsqueda
        $response = post('/api/pacientes/search', [
            'searchQuery' => [
                'filters' => [],
                'fieldMap' => []
            ]
        ]);

        // Then: Debemos recibir un error
        $response->assertStatus(500)
            ->assertJson([
                'success' => false,
                'message' => 'Error al buscar pacientes'
            ]);
    })->group('pacientes', 'busqueda', 'mutacion');
});
