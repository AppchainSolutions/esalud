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

// Grupo de pruebas para la página principal
describe('Vista Principal', function () {
    test('puede renderizar la página de pacientes', function () {
        $response = get('/pacientes');

        $response->assertStatus(200)
            ->assertInertia(fn($assert) => $assert->component('PacientePage'));
    })->group('pacientes', 'vista');
});

// Grupo de pruebas para búsqueda
describe('Búsqueda de Pacientes', function () {
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
    })->group('pacientes', 'busqueda');
});

// Grupo de pruebas para validaciones
describe('Validaciones', function () {
    test('valida rut único al crear paciente', function () {
        // Given: Un paciente existente
        $pacienteExistente = Paciente::factory()->create([
            'rut' => '12345678-9'
        ]);

        // When: Intentamos crear otro paciente con el mismo RUT
        $response = post('/api/pacientes', [
            'rut' => '12345678-9',
            'nombres' => 'Otro',
            'apellidos' => 'Paciente',
            'fecha_nacimiento' => '1990-01-01',
            'genero' => 'M',
            'empresa' => Empresa::factory()->create()->id,
            'area' => Area::factory()->create()->id,
            'exposicion' => ['Ruido'],
            'activo' => true
        ]);

        // Then: La validación falla
        $response->assertStatus(422)
            ->assertJsonValidationErrors(['rut']);
    })->group('pacientes', 'validacion');

    test('valida campos requeridos al crear paciente', function () {
        // When: Intentamos crear un paciente sin campos requeridos
        $response = post('/api/pacientes', []);

        // Then: La validación falla para todos los campos requeridos
        $response->assertStatus(422)
            ->assertJsonValidationErrors([
                'rut',
                'nombres',
                'apellidos',
                'fecha_nacimiento',
                'genero',
                'empresa',
                'area',
                'exposicion'
            ]);
    })->group('pacientes', 'validacion');

    test('valida formato de email al crear paciente', function () {
        // When: Intentamos crear un paciente con email inválido
        $response = post('/api/pacientes', [
            'rut' => '12345678-9',
            'nombres' => 'Juan',
            'apellidos' => 'Pérez',
            'fecha_nacimiento' => '1990-01-01',
            'genero' => 'M',
            'empresa' => Empresa::factory()->create()->id,
            'area' => Area::factory()->create()->id,
            'exposicion' => ['Ruido'],
            'email' => 'correo-invalido',
            'activo' => true
        ]);

        // Then: La validación falla para el email
        $response->assertStatus(422)
            ->assertJsonValidationErrors(['email']);
    })->group('pacientes', 'validacion');

    test('valida exposiciones existentes al crear paciente', function () {
        // Given: Solo existe una exposición en la base de datos
        $exposicion = Exposicion::create(['descripcion' => 'Ruido']);

        // When: Intentamos crear un paciente con una exposición que no existe
        $response = post('/api/pacientes', [
            'rut' => '12345678-9',
            'nombres' => 'Juan',
            'apellidos' => 'Pérez',
            'fecha_nacimiento' => '1990-01-01',
            'genero' => 'M',
            'empresa' => Empresa::factory()->create()->id,
            'area' => Area::factory()->create()->id,
            'exposicion' => ['Ruido', 'ExposicionInexistente'],
            'activo' => true
        ]);

        // Then: La validación falla para las exposiciones
        $response->assertStatus(422)
            ->assertJsonValidationErrors(['exposicion.1']);
    })->group('pacientes', 'validacion');
});

// Grupo de pruebas para creación de pacientes
describe('Creación de Pacientes', function () {
    test('puede crear un nuevo paciente', function () {
        // Given: Tenemos los datos necesarios para crear un paciente
        $empresa = Empresa::factory()->create();
        $area = Area::factory()->create();
        $exposicion1 = Exposicion::create(['descripcion' => 'Ruido']);
        $exposicion2 = Exposicion::create(['descripcion' => 'Polvo']);

        $pacienteData = [
            'rut' => '12345678-9',
            'nombres' => 'Juan Pablo',
            'apellidos' => 'Pérez González',
            'fecha_nacimiento' => '1990-01-01',
            'genero' => 'M',
            'empresa' => $empresa->id,
            'area' => $area->id,
            'exposicion' => ['Ruido', 'Polvo'],
            'activo' => true,
            'protocolo_minsal' => false,
            'email' => 'juan.perez@ejemplo.com',
            'telefono' => '+56912345678'
        ];

        // When: Hacemos la petición POST para crear el paciente
        $response = post('/api/pacientes', $pacienteData);

        // Then: El paciente se crea correctamente
        $response->assertStatus(201)
            ->assertJson([
                'success' => true,
                'message' => 'Paciente creado exitosamente'
            ]);

        // And: Los datos se guardaron correctamente en la base de datos
        $this->assertDatabaseHas('pacientes', [
            'rut' => '12345678-9',
            'nombres' => 'Juan Pablo',
            'apellidos' => 'Pérez González',
            'email' => 'juan.perez@ejemplo.com'
        ]);

        // And: Las exposiciones se guardaron como JSON
        $paciente = Paciente::where('rut', '12345678-9')->first();
        expect(json_decode($paciente->exposicion))->toEqual(['Ruido', 'Polvo']);
    })->group('pacientes', 'creacion');
});
