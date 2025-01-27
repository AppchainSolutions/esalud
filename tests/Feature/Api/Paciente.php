<?php

use Tests\TestCase;
use App\Models\Paciente;
use App\Models\User;
use App\Models\Exposicion;
use App\Models\Empresa;
use App\Models\Area;
use Illuminate\Foundation\Testing\RefreshDatabase;
use function Pest\Laravel\post;
use function Pest\Laravel\get;

uses(TestCase::class, RefreshDatabase::class);

beforeEach(function () {
    $user = User::factory()->create();
    $this->actingAs($user);
});

test('puede renderizar la página de pacientes', function () {
    $response = get('/pacientes');
    
    $response->assertStatus(200)
        ->assertInertia(fn ($assert) => $assert->component('PacientePage'));
});

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
});

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
});

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
});

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
});

test('maneja solicitudes inválidas correctamente', function () {
    $searchQuery = [
        'searchQuery' => [
            'filters' => [
                'invalid_field' => 'some_value',
            ],
            'fieldMap' => [
                'invalid_field' => ['type' => 'invalid_type']
            ]
        ]
    ];

    $response = post('/api/pacientes/search', $searchQuery);

    $response->assertStatus(500)
        ->assertJson([
            'success' => false,
            'message' => 'Error al buscar pacientes'
        ]);
});

test('puede buscar con múltiples filtros', function () {
    // Given: Preparamos los datos de prueba
    Paciente::query()->delete();
    Exposicion::query()->delete();

    $exposicion1 = Exposicion::create(['descripcion' => 'Ruido']);
    $exposicion2 = Exposicion::create(['descripcion' => 'Polvo']);

    $empresa = Empresa::factory()->create();
    $area = Area::factory()->create();

    $pacientesCoinciden = Paciente::factory()->count(2)->create([
        'exposicion' => json_encode(['Ruido', 'Polvo']),
        'activo' => true,
        'protocolo_minsal' => false,
        'empresa' => $empresa->id,
        'area' => $area->id
    ]);

    $pacientesNoCoinciden = Paciente::factory()->count(3)->create([
        'exposicion' => json_encode(['Vibración']),
        'activo' => true,
        'empresa' => $empresa->id,
        'area' => $area->id + 1
    ]);

    // When: Buscamos con múltiples filtros
    $searchQuery = [
        'searchQuery' => [
            'filters' => [
                'exposicion' => ['Ruido', 'Polvo'],
                'activo' => true,
                'protocolo_minsal' => false,
                'empresa' => $empresa->id,
                'area' => $area->id
            ],
            'fieldMap' => [
                'exposicion' => ['type' => 'array', 'operator' => 'contains'],
                'activo' => ['type' => 'boolean'],
                'protocolo_minsal' => ['type' => 'boolean'],
                'empresa' => ['type' => 'numeric', 'relation' => false],
                'area' => ['type' => 'numeric', 'relation' => false]
            ]
        ]
    ];

    $response = post('/api/pacientes/search', $searchQuery);

    // Then: Verificamos los resultados
    $response->assertStatus(200)
        ->assertJson([
            'success' => true
        ])
        ->assertJsonCount(2, 'data');

    $responseData = $response->json('data');
    $coincidentIds = $pacientesCoinciden->pluck('id')->toArray();

    collect($responseData)->each(function ($paciente) use ($coincidentIds, $empresa, $area) {
        expect(in_array($paciente['id'], $coincidentIds))->toBeTrue();
        $exposiciones = json_decode($paciente['exposicion'], true);
        expect(count(array_intersect($exposiciones, ['Ruido', 'Polvo'])))->toBeGreaterThan(0);
        expect($paciente['activo'])->toBeTrue();
        expect($paciente['protocolo_minsal'])->toBeFalse();
        expect($paciente['empresa'])->toBe($empresa->id);
        expect($paciente['area'])->toBe($area->id);
    });
});

test('maneja búsqueda sin filtros', function () {
    // Given: Algunos pacientes de prueba
    $pacientes = Paciente::factory()->count(5)->create();

    // When: Buscamos sin filtros
    $searchQuery = [
        'searchQuery' => [
            'filters' => [],
            'fieldMap' => []
        ]
    ];

    $response = post('/api/pacientes/search', $searchQuery);

    // Then: Devuelve todos los pacientes
    $response->assertStatus(200)
        ->assertJson([
            'success' => true
        ])
        ->assertJsonCount(5, 'data');
});
