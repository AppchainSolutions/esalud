<?php

use Tests\TestCase;
use App\Models\Paciente;
use App\Models\User;
use App\Models\Exposicion;
use App\Http\Controllers\PacienteController;
use App\Services\PacienteService;
use App\Repositories\PacienteRepository;
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

describe('PacienteService Tests', function () {
    test('search_should_handle_filters', function () {
        $service = new PacienteService(new PacienteRepository());
        
        $request = new Request([
            'nombre' => 'Test',
            'apellido' => 'User',
            'rut' => '12345678-9'
        ]);

        $result = $service->search($request);
        expect($result)->toBeArray();
    });

    test('search_should_handle_empty_request', function () {
        $service = new PacienteService(new PacienteRepository());
        $request = new Request();

        $result = $service->search($request);
        expect($result)->toBeArray();
    });

    test('store_should_validate_required_fields', function () {
        $service = new PacienteService(new PacienteRepository());
        
        $data = [];
        
        try {
            $service->store($data);
            $this->fail('Se esperaba una excepción de validación');
        } catch (\Exception $e) {
            expect($e->getMessage())->toContain('validation');
        }
    });

    test('store_should_handle_invalid_rut', function () {
        $service = new PacienteService(new PacienteRepository());
        
        $data = [
            'nombre' => 'Test',
            'apellido' => 'User',
            'rut' => 'invalid-rut'
        ];
        
        try {
            $service->store($data);
            $this->fail('Se esperaba una excepción de validación de RUT');
        } catch (\Exception $e) {
            expect($e->getMessage())->toContain('RUT');
        }
    });

    test('store_should_handle_database_error', function () {
        // Mock del repositorio para simular error de base de datos
        $mockRepo = $this->mock(PacienteRepository::class);
        $mockRepo->shouldReceive('create')
            ->once()
            ->andThrow(new \Exception('Error de base de datos'));

        $service = new PacienteService($mockRepo);
        
        $data = [
            'nombre' => 'Test',
            'apellido' => 'User',
            'rut' => '12345678-9'
        ];
        
        try {
            $service->store($data);
            $this->fail('Se esperaba una excepción de base de datos');
        } catch (\Exception $e) {
            expect($e->getMessage())->toBe('Error de base de datos');
        }
    });

    test('store_should_create_patient_successfully', function () {
        // Mock del repositorio para simular creación exitosa
        $mockRepo = $this->mock(PacienteRepository::class);
        $mockRepo->shouldReceive('create')
            ->once()
            ->andReturn([
                'id' => 1,
                'nombre' => 'Test',
                'apellido' => 'User',
                'rut' => '12345678-9'
            ]);

        $service = new PacienteService($mockRepo);
        
        $data = [
            'nombre' => 'Test',
            'apellido' => 'User',
            'rut' => '12345678-9'
        ];
        
        $result = $service->store($data);
        expect($result)->toBeArray()
            ->toHaveKey('id')
            ->toHaveKey('nombre')
            ->toHaveKey('apellido')
            ->toHaveKey('rut');
    });
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
            'criterio' => 'test'
        ]);

        $response->assertStatus(500)
            ->assertJson([
                'success' => false,
                'message' => 'Error al buscar pacientes',
                'error' => 'Error de prueba'
            ]);
    });

    test('store_should_handle_validation_errors', function () {
        $response = $this->postJson('/api/pacientes', []);

        $response->assertStatus(422)
            ->assertJsonValidationErrors(['nombre', 'apellido']);
    });

    test('store_should_handle_database_errors', function () {
        $this->withoutExceptionHandling();
        
        // Mock del servicio para forzar una excepción
        $mockService = $this->mock(PacienteService::class);
        $mockService->shouldReceive('store')
            ->once()
            ->andThrow(new \Exception('Error de base de datos'));

        $data = [
            'nombre' => 'Test',
            'apellido' => 'User',
            'rut' => '12345678-9',
            'fecha_nacimiento' => '1990-01-01'
        ];

        $response = $this->postJson('/api/pacientes', $data);

        $response->assertStatus(500)
            ->assertJson([
                'success' => false,
                'message' => 'Error al crear paciente',
                'error' => 'Error de base de datos'
            ]);
    });

    test('search_should_return_success_response', function () {
        // Mock del servicio para retornar datos de prueba
        $mockService = $this->mock(PacienteService::class);
        $mockService->shouldReceive('search')
            ->once()
            ->andReturn([
                ['id' => 1, 'nombre' => 'Test User']
            ]);

        $response = $this->postJson('/api/pacientes/search', [
            'criterio' => 'test'
        ]);

        $response->assertStatus(200)
            ->assertJson([
                'success' => true,
                'data' => [
                    ['id' => 1, 'nombre' => 'Test User']
                ]
            ]);
    });

    test('store_should_return_success_response', function () {
        // Mock del servicio para retornar datos de prueba
        $mockService = $this->mock(PacienteService::class);
        $mockService->shouldReceive('store')
            ->once()
            ->andReturn([
                'id' => 1,
                'nombre' => 'Test',
                'apellido' => 'User'
            ]);

        $data = [
            'nombre' => 'Test',
            'apellido' => 'User',
            'rut' => '12345678-9',
            'fecha_nacimiento' => '1990-01-01'
        ];

        $response = $this->postJson('/api/pacientes', $data);

        $response->assertStatus(201)
            ->assertJson([
                'success' => true,
                'message' => 'Paciente creado exitosamente',
                'data' => [
                    'id' => 1,
                    'nombre' => 'Test',
                    'apellido' => 'User'
                ]
            ]);
    });
});

describe('Pruebas de Mutación Avanzadas', function () {
    test('search_should_handle_empty_results', function () {
        // Given: No hay pacientes en la base de datos
        Paciente::query()->delete();
        
        // When: Realizamos una búsqueda
        $searchQuery = [
            'searchQuery' => [
                'filters' => [
                    'nombre' => 'Paciente Inexistente'
                ],
                'fieldMap' => [
                    'nombre' => ['type' => 'text', 'operator' => 'like']
                ]
            ]
        ];

        $response = post('/api/pacientes/search', $searchQuery);

        // Then: Debemos recibir una respuesta exitosa con array vacío
        $response->assertStatus(200)
            ->assertJson([
                'success' => true,
                'data' => []
            ]);
    })->group('pacientes', 'mutacion');

    test('search_should_validate_required_fields', function () {
        // When: Enviamos una búsqueda sin searchQuery
        $response = post('/api/pacientes/search', [
            'searchQuery' => null
        ]);

        // Then: Debemos recibir un error de validación
        $response->assertStatus(422)
            ->assertJsonValidationErrors(['searchQuery']);
    })->group('pacientes', 'mutacion');

    test('search_should_handle_invalid_field_types', function () {
        // When: Enviamos tipos de campos inválidos
        $searchQuery = [
            'searchQuery' => [
                'filters' => [
                    'activo' => 'no_boolean_value'
                ],
                'fieldMap' => [
                    'activo' => ['type' => 'boolean']
                ]
            ]
        ];

        $response = post('/api/pacientes/search', $searchQuery);

        // Then: Debemos recibir un error de validación
        $response->assertStatus(422)
            ->assertJsonValidationErrors(['searchQuery.filters.activo']);
    })->group('pacientes', 'mutacion');

    test('search_should_handle_invalid_json_format', function () {
        // When: Enviamos un formato JSON inválido
        $response = post('/api/pacientes/search', [
            'searchQuery' => 'invalid_json_format'
        ]);

        // Then: Debemos recibir un error de validación
        $response->assertStatus(422)
            ->assertJsonValidationErrors(['searchQuery']);
    })->group('pacientes', 'mutacion');

    test('search_should_handle_database_error', function () {
        // Given: Forzamos un error en la consulta
        $mockService = $this->mock(PacienteService::class);
        $mockService->shouldReceive('search')
            ->once()
            ->andThrow(new \Exception('Error de base de datos'));

        // When: Intentamos realizar una búsqueda con datos válidos
        $searchQuery = [
            'searchQuery' => [
                'filters' => ['nombre' => 'test'],
                'fieldMap' => ['nombre' => ['type' => 'text', 'operator' => 'like']]
            ]
        ];

        $response = post('/api/pacientes/search', $searchQuery);

        // Then: Debemos recibir un error de servidor
        $response->assertStatus(500)
            ->assertJson([
                'success' => false,
                'message' => 'Error al buscar pacientes'
            ]);
    })->group('pacientes', 'mutacion');
});
