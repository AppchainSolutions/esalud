<?php

namespace Tests\Feature\Api;

use App\Models\Paciente;
use App\Models\User;
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
                'empresa' => ['type' => 'numeric', 'relation' => true],
                'area' => ['type' => 'numeric', 'relation' => true],
                'unidad' => ['type' => 'numeric', 'relation' => true],
                'planta' => ['type' => 'numeric', 'relation' => true],
                'ceco' => ['type' => 'numeric', 'relation' => true],
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
                    'empresa' => ['type' => 'numeric', 'relation' => true],
                    'area' => ['type' => 'numeric', 'relation' => true],
                    'unidad' => ['type' => 'numeric', 'relation' => true],
                    'planta' => ['type' => 'numeric', 'relation' => true],
                    'ceco' => ['type' => 'numeric', 'relation' => true],
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

    // public function test_can_search_by_empresa()
    // {
    //     // Limpiar la base de datos
    //     Paciente::query()->delete();
        
    //     // Crear pacientes con diferentes empresas
    //     $pacienteEmpresa1 = Paciente::factory()->create(['empresa' => 1, 'activo' => true]);
    //     $pacienteEmpresa2 = Paciente::factory()->create(['empresa' => 2, 'activo' => true]);

    //     $searchQuery = [
    //         'filters' => [
    //             'empresa' => 1,
    //             'activo' => true,
    //         ],
    //         'fieldMap' => [
    //             'empresa' => ['type' => 'numeric', 'relation' => true],
    //             'activo' => ['type' => 'boolean']
    //         ]
    //     ];

    //     $response = $this->postJson('/api/pacientes/search', $searchQuery);

    //     $response->assertStatus(200)
    //         ->assertJson([
    //             'success' => true
    //         ])
    //         ->assertJsonCount(1, 'data')
    //         ->assertJsonPath('data.0.empresa', 1);
    // }

    // public function test_search_with_multiple_filters()
    // {
    //     // Limpiar la base de datos
    //     Paciente::query()->delete();
        
    //     // Crear pacientes con diferentes combinaciones
    //     $paciente1 = Paciente::factory()->create([
    //         'empresa' => 1,
    //         'area' => 1,
    //         'activo' => true
    //     ]);
        
    //     $paciente2 = Paciente::factory()->create([
    //         'empresa' => 1,
    //         'area' => 2,
    //         'activo' => true
    //     ]);

    //     $searchQuery = [
    //         'filters' => [
    //             'empresa' => 1,
    //             'area' => 1,
    //             'activo' => true,
    //         ],
    //         'fieldMap' => [
    //             'empresa' => ['type' => 'numeric', 'relation' => true],
    //             'area' => ['type' => 'numeric', 'relation' => true],
    //             'activo' => ['type' => 'boolean']
    //         ]
    //     ];

    //     $response = $this->postJson('/api/pacientes/search', $searchQuery);

    //     $response->assertStatus(200)
    //         ->assertJson([
    //             'success' => true
    //         ])
    //         ->assertJsonCount(1, 'data')
    //         ->assertJsonPath('data.0.empresa', 1)
    //         ->assertJsonPath('data.0.area', 1);
    // }

    // public function test_search_with_invalid_query_format()
    // {
    //     $searchQuery = [
    //         'filters' => null,
    //         'fieldMap' => null
    //     ];

    //     $response = $this->postJson('/api/pacientes/search', $searchQuery);

    //     $response->assertStatus(500)
    //         ->assertJson([
    //             'success' => false,
    //             'message' => 'Error al buscar pacientes'
    //         ]);
    // }

    // public function test_search_with_empty_results()
    // {
    //     // Limpiar la base de datos
    //     Paciente::query()->delete();

    //     $searchQuery = [
    //         'filters' => [
    //             'rut' => '99999999-9',
    //             'activo' => true,
    //         ],
    //         'fieldMap' => [
    //             'rut' => ['type' => 'text', 'operator' => 'like'],
    //             'activo' => ['type' => 'boolean']
    //         ]
    //     ];

    //     $response = $this->postJson('/api/pacientes/search', $searchQuery);

    //     $response->assertStatus(200)
    //         ->assertJson([
    //             'success' => true,
    //             'data' => []
    //         ]);
    // }
}
