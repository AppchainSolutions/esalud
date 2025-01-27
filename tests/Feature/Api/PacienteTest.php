<?php

namespace Tests\Feature\Api;

use App\Models\Paciente;
use App\Models\User;
use App\Models\Exposicion;
use App\Models\Empresa;
use App\Models\Area;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Illuminate\Support\Facades\Artisan;
use App\Services\PacienteService;
use Illuminate\Http\Request;

class PacienteTest extends TestCase
{
    use RefreshDatabase;

    protected PacienteService $pacienteService;

    protected function setUp(): void
    {
        parent::setUp();
        $this->pacienteService = app(PacienteService::class);

        // Ejecutar el seeder de usuarios
        Artisan::call('db:seed', ['--class' => 'UserSeeder']);

        // Obtener el usuario admin de la base de datos
        $user = User::where('email', 'admin@example.com')->firstOrFail();

        // Autenticar al usuario admin para todas las pruebas
        $this->actingAs($user);
    }

    public function test_can_search_patient_by_rut()
    {
        // Limpiar la base de datos
        Paciente::query()->delete();

        // Verificar que no hay pacientes en la base de datos
        $this->assertEquals(0, Paciente::count(), "La base de datos no está vacía");

        // Crear un paciente de prueba
        $paciente = Paciente::factory()->create([
            'rut' => '12345678-9',
            'nombre' => 'Juan',
            'apellidos' => 'Pérez',
            'email' => 'juan@example.com',
            'activo' => true
        ]);

        $searchQuery = [
            'filters' => [
                'id' => null,
                'rut' => '12345678-9',  // Aquí especificamos el RUT que queremos buscar
                'empresa' => null,
                'area' => null,
                'unidad' => null,
                'planta' => null,
                'ceco' => null,
                'activo' => true,
                'protocolo_minsal' => false,
                'exposicion' => [],
            ],
            'fieldMap' => [
                'rut' => ['type' => 'text', 'operator' => 'like'],
                'empresa' => ['type' => 'numeric', 'relation' => false],
                'area' => ['type' => 'numeric', 'relation' => false],
                'unidad' => ['type' => 'numeric', 'relation' => false],
                'planta' => ['type' => 'numeric', 'relation' => false],
                'ceco' => ['type' => 'numeric', 'relation' => false],
                'activo' => ['type' => 'boolean'],
                'protocolo_minsal' => ['type' => 'boolean'],
                'exposicion' => ['type' => 'array', 'relation' => true]
            ]
        ];

        // Realizar la petición POST a la API
        $response = $this->postJson('/api/pacientes/search', $searchQuery);

        // Verificar la respuesta
        $response->assertStatus(200)
            ->assertJson([
                'success' => true
            ])
            ->assertJsonPath('data.0.rut', '12345678-9')
            ->assertJsonPath('data.0.nombre', 'Juan')
            ->assertJsonPath('data.0.apellidos', 'Pérez');
    }

    public function test_can_search_active_patients()
    {
        // Limpiar la base de datos
        Paciente::query()->delete();

        // Verificar que no hay pacientes en la base de datos
        $this->assertEquals(0, Paciente::count(), "La base de datos no está vacía");

        // Crear pacientes activos con datos específicos
        $activePatients = Paciente::factory()->count(3)->create(['activo' => true]);

        // Crear pacientes inactivos con datos específicos
        $inactivePatients = Paciente::factory()->count(2)->create(['activo' => false]);

        // Verificar que los pacientes se crearon correctamente
        $this->assertEquals(3, Paciente::where('activo', true)->count(), "No se crearon 3 pacientes activos");
        $this->assertEquals(2, Paciente::where('activo', false)->count(), "No se crearon 2 pacientes inactivos");

        $searchQuery = [
            'searchQuery' => [
                'filters' => [
                    'id' => null,
                    'rut' => null,
                    'empresa' => null,
                    'area' => null,
                    'unidad' => null,
                    'planta' => null,
                    'ceco' => null,
                    'activo' => true,
                    'protocolo_minsal' => false,
                    'exposicion' => [],
                ],
                'fieldMap' => [
                    'rut' => ['type' => 'text', 'operator' => 'like'],
                    'empresa' => ['type' => 'numeric', 'relation' => false],
                    'area' => ['type' => 'numeric', 'relation' => false],
                    'unidad' => ['type' => 'numeric', 'relation' => false],
                    'planta' => ['type' => 'numeric', 'relation' => false],
                    'ceco' => ['type' => 'numeric', 'relation' => false],
                    'activo' => ['type' => 'boolean'],
                    'protocolo_minsal' => ['type' => 'boolean'],
                    'exposicion' => ['type' => 'array', 'relation' => true]
                ]
            ]
        ];

        // Realizar la petición POST a la API
        $response = $this->postJson('/api/pacientes/search', $searchQuery);

        // Verificar la respuesta
        $response->assertStatus(200)
            ->assertJson([
                'success' => true
            ])
            ->assertJsonCount(3, 'data') // Verificar que solo devuelve los 3 pacientes activos
            ->assertJsonPath('data.0.activo', true)
            ->assertJsonPath('data.1.activo', true)
            ->assertJsonPath('data.2.activo', true);

        // Verificar que todos los IDs en la respuesta corresponden a pacientes activos
        $responseData = $response->json('data');
        $activeIds = $activePatients->pluck('id')->toArray();

        foreach ($responseData as $paciente) {
            $this->assertTrue(in_array($paciente['id'], $activeIds));
        }
    }

    public function test_can_search_by_empresa()
    {
        // Limpiar la base de datos
        Paciente::query()->delete();

        // Crear pacientes con diferentes empresas
        $empresa1 = Paciente::factory()->count(3)->create([
            'empresa' => 1,
            'activo' => true,
            'protocolo_minsal' => false
        ]);

        // Crear pacientes de otra empresa
        $empresa2 = Paciente::factory()->count(2)->create([
            'empresa' => 2,
            'activo' => true,
            'protocolo_minsal' => false
        ]);

        // Verificar que se crearon los registros correctamente
        $this->assertEquals(3, Paciente::where('empresa', 1)->count());
        $this->assertEquals(2, Paciente::where('empresa', 2)->count());

        $searchQuery = [
            'searchQuery' => [
                'filters' => [
                    'id' => null,
                    'rut' => null,
                    'empresa' => 1,
                    'area' => null,
                    'unidad' => null,
                    'planta' => null,
                    'ceco' => null,
                    'activo' => true,
                    'protocolo_minsal' => false,
                    'exposicion' => [],
                ],
                'fieldMap' => [
                    'rut' => ['type' => 'text', 'operator' => 'like'],
                    'empresa' => ['type' => 'numeric', 'relation' => false],
                    'area' => ['type' => 'numeric', 'relation' => false],
                    'unidad' => ['type' => 'numeric', 'relation' => false],
                    'planta' => ['type' => 'numeric', 'relation' => false],
                    'ceco' => ['type' => 'numeric', 'relation' => false],
                    'activo' => ['type' => 'boolean'],
                    'protocolo_minsal' => ['type' => 'boolean'],
                    'exposicion' => ['type' => 'array', 'relation' => true]
                ]
            ]
        ];

        $response = $this->postJson('/api/pacientes/search', $searchQuery);

        // Verificar la respuesta
        $response->assertStatus(200)
            ->assertJson([
                'success' => true
            ])
            ->assertJsonCount(3, 'data'); // Verificar que devuelve los 3 pacientes de empresa 1

        // Verificar que todos los IDs en la respuesta corresponden a pacientes de la empresa 1
        $responseData = $response->json('data');
        $empresa1Ids = $empresa1->pluck('id')->toArray();

        foreach ($responseData as $paciente) {
            $this->assertTrue(in_array($paciente['id'], $empresa1Ids));
            $this->assertEquals(1, $paciente['empresa']);
            $this->assertTrue($paciente['activo']);
            $this->assertFalse($paciente['protocolo_minsal']);
        }
    }

    public function test_can_search_by_area()
    {
        // Limpiar la base de datos
        Paciente::query()->delete();

        // Crear pacientes con diferentes áreas
        $area1 = Paciente::factory()->count(3)->create([
            'area' => 1,
            'activo' => true,
            'protocolo_minsal' => false
        ]);

        // Crear pacientes de otra área
        $area2 = Paciente::factory()->count(2)->create([
            'area' => 2,
            'activo' => true,
            'protocolo_minsal' => false
        ]);

        // Verificar que se crearon los registros correctamente
        $this->assertEquals(3, Paciente::where('area', 1)->count());
        $this->assertEquals(2, Paciente::where('area', 2)->count());

        $searchQuery = [
            'searchQuery' => [
                'filters' => [
                    'id' => null,
                    'rut' => null,
                    'empresa' => null,
                    'area' => 1,
                    'unidad' => null,
                    'planta' => null,
                    'ceco' => null,
                    'activo' => true,
                    'protocolo_minsal' => false,
                    'exposicion' => [],
                ],
                'fieldMap' => [
                    'rut' => ['type' => 'text', 'operator' => 'like'],
                    'empresa' => ['type' => 'numeric', 'relation' => false],
                    'area' => ['type' => 'numeric', 'relation' => false],
                    'unidad' => ['type' => 'numeric', 'relation' => false],
                    'planta' => ['type' => 'numeric', 'relation' => false],
                    'ceco' => ['type' => 'numeric', 'relation' => false],
                    'activo' => ['type' => 'boolean'],
                    'protocolo_minsal' => ['type' => 'boolean'],
                    'exposicion' => ['type' => 'array', 'relation' => true]
                ]
            ]
        ];

        $response = $this->postJson('/api/pacientes/search', $searchQuery);

        // Verificar la respuesta
        $response->assertStatus(200)
            ->assertJson([
                'success' => true
            ])
            ->assertJsonCount(3, 'data'); // Verificar que devuelve los 3 pacientes del área 1

        // Verificar que todos los IDs en la respuesta corresponden a pacientes del área 1
        $responseData = $response->json('data');
        $area1Ids = $area1->pluck('id')->toArray();

        foreach ($responseData as $paciente) {
            $this->assertTrue(in_array($paciente['id'], $area1Ids));
            $this->assertEquals(1, $paciente['area']);
            $this->assertTrue($paciente['activo']);
            $this->assertFalse($paciente['protocolo_minsal']);
        }
    }

    public function test_can_search_by_exposicion()
    {
        // Limpiar la base de datos
        Paciente::query()->delete();
        Exposicion::query()->delete();

        // Crear exposiciones de prueba
        $exposicion1 = Exposicion::create(['descripcion' => 'Ruido']);
        $exposicion2 = Exposicion::create(['descripcion' => 'Polvo']);
        $exposicion3 = Exposicion::create(['descripcion' => 'Vibración']);

        // Crear pacientes con diferentes exposiciones
        $pacientesExp1 = Paciente::factory()->count(3)->create([
            'exposicion' => json_encode(['Ruido', 'Polvo']), // Array de exposiciones
            'activo' => true,
            'protocolo_minsal' => false
        ]);

        // Crear pacientes con otra exposición
        $pacientesExp2 = Paciente::factory()->count(2)->create([
            'exposicion' => json_encode(['Vibración']), // Array con una exposición
            'activo' => true,
            'protocolo_minsal' => false
        ]);

        // Verificar que se crearon los registros correctamente
        $this->assertEquals(3, Paciente::where('exposicion', json_encode(['Ruido', 'Polvo']))->count());
        $this->assertEquals(2, Paciente::where('exposicion', json_encode(['Vibración']))->count());

        $searchQuery = [
            'searchQuery' => [
                'filters' => [
                    'id' => null,
                    'rut' => null,
                    'empresa' => null,
                    'area' => null,
                    'unidad' => null,
                    'planta' => null,
                    'ceco' => null,
                    'activo' => true,
                    'protocolo_minsal' => false,
                    'exposicion' => ['Ruido', 'Polvo'], // Array de exposiciones a buscar
                ],
                'fieldMap' => [
                    'rut' => ['type' => 'text', 'operator' => 'like'],
                    'empresa' => ['type' => 'numeric', 'relation' => false],
                    'area' => ['type' => 'numeric', 'relation' => false],
                    'unidad' => ['type' => 'numeric', 'relation' => false],
                    'planta' => ['type' => 'numeric', 'relation' => false],
                    'ceco' => ['type' => 'numeric', 'relation' => false],
                    'activo' => ['type' => 'boolean'],
                    'protocolo_minsal' => ['type' => 'boolean'],
                    'exposicion' => ['type' => 'array', 'operator' => 'contains'] // Cambiamos a tipo array
                ]
            ]
        ];

        $response = $this->postJson('/api/pacientes/search', $searchQuery);

        // Verificar la respuesta
        $response->assertStatus(200)
            ->assertJson([
                'success' => true
            ])
            ->assertJsonCount(3, 'data'); // Verificar que devuelve los 3 pacientes con exposición a ruido o polvo

        // Verificar que todos los IDs en la respuesta corresponden a pacientes con las exposiciones buscadas
        $responseData = $response->json('data');
        $exp1Ids = $pacientesExp1->pluck('id')->toArray();

        foreach ($responseData as $paciente) {
            $this->assertTrue(in_array($paciente['id'], $exp1Ids));
            $exposiciones = json_decode($paciente['exposicion'], true);
            $this->assertTrue(
                count(array_intersect($exposiciones, ['Ruido', 'Polvo'])) > 0,
                'El paciente debe tener al menos una de las exposiciones buscadas'
            );
            $this->assertTrue($paciente['activo']);
            $this->assertFalse($paciente['protocolo_minsal']);
        }
    }

    public function test_can_render_paciente_page()
    {
        $response = $this->get('/pacientes');
        $response->assertStatus(200);
        $response->assertInertia(fn ($assert) => $assert->component('PacientePage'));
    }

    public function test_search_handles_invalid_request()
    {
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

        $response = $this->postJson('/api/pacientes/search', $searchQuery);

        $response->assertStatus(500)
            ->assertJson([
                'success' => false,
                'message' => 'Error al buscar pacientes'
            ]);
    }

    public function test_search_with_multiple_filters()
    {
        // Limpiar la base de datos
        Paciente::query()->delete();
        Exposicion::query()->delete();

        // Crear exposiciones de prueba
        $exposicion1 = Exposicion::create(['descripcion' => 'Ruido']);
        $exposicion2 = Exposicion::create(['descripcion' => 'Polvo']);

        // Crear empresa de prueba
        $empresa = Empresa::factory()->create();
        $area = Area::factory()->create();

        // Crear pacientes que coincidan con todos los filtros
        $pacientesCoinciden = Paciente::factory()->count(2)->create([
            'exposicion' => json_encode(['Ruido', 'Polvo']),
            'activo' => true,
            'protocolo_minsal' => false,
            'empresa' => $empresa->id,
            'area' => $area->id
        ]);

        // Crear pacientes que no coinciden con todos los filtros
        $pacientesNoCoinciden = Paciente::factory()->count(3)->create([
            'exposicion' => json_encode(['Vibración']),
            'activo' => true,
            'empresa' => $empresa->id,
            'area' => $area->id + 1
        ]);

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

        $response = $this->postJson('/api/pacientes/search', $searchQuery);

        // Verificar la respuesta
        $response->assertStatus(200)
            ->assertJson([
                'success' => true
            ])
            ->assertJsonCount(2, 'data');

        // Verificar que los IDs corresponden a los pacientes correctos
        $responseData = $response->json('data');
        $coincidentIds = $pacientesCoinciden->pluck('id')->toArray();

        foreach ($responseData as $paciente) {
            $this->assertTrue(in_array($paciente['id'], $coincidentIds));
            $exposiciones = json_decode($paciente['exposicion'], true);
            $this->assertTrue(
                count(array_intersect($exposiciones, ['Ruido', 'Polvo'])) > 0,
                'El paciente debe tener al menos una de las exposiciones buscadas'
            );
            $this->assertTrue($paciente['activo']);
            $this->assertFalse($paciente['protocolo_minsal']);
            $this->assertEquals($empresa->id, $paciente['empresa']);
            $this->assertEquals($area->id, $paciente['area']);
        }
    }

    public function test_search_with_empty_filters()
    {
        // Crear algunos pacientes de prueba
        $pacientes = Paciente::factory()->count(5)->create();

        $searchQuery = [
            'searchQuery' => [
                'filters' => [],
                'fieldMap' => []
            ]
        ];

        $response = $this->postJson('/api/pacientes/search', $searchQuery);

        // Verificar que devuelve todos los pacientes cuando no hay filtros
        $response->assertStatus(200)
            ->assertJson([
                'success' => true
            ])
            ->assertJsonCount(5, 'data');
    }
}
