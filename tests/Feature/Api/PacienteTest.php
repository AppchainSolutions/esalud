<?php

namespace Tests\Feature\Api;

use App\Models\Paciente;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PacienteTest extends TestCase
{
    use RefreshDatabase;

    protected $user;

    protected function setUp(): void
    {
        parent::setUp();
        $this->user = User::where('email', 'admin@example.com')->first();
        
        // Si no existe, crear el usuario admin
        if (!$this->user) {
            $this->user = User::factory()->create([
                'email' => 'admin@example.com',
                'password' => bcrypt('clave123')
            ]);
        }
    }

    public function test_can_search_pacientes_via_api()
    {
        // Crear algunos pacientes de prueba
        Paciente::factory()->count(3)->create();

        // Autenticar al usuario admin
        $this->actingAs($this->user);

        // Realizar la búsqueda
        $response = $this->getJson('/api/pacientes/search');

        $response->assertStatus(200)
                ->assertJsonStructure([
                    'data' => [
                        '*' => [
                            'id',
                            'nombre',
                            'apellidos',
                            'email',
                            'rut'
                        ]
                    ]
                ]);
    }

    public function test_can_create_patient_via_api()
    {
        // Autenticar al usuario admin
        $this->actingAs($this->user);

        $patientData = [
            'nombre' => fake()->firstName,
            'apellidos' => fake()->lastName,
            'email' => fake()->unique()->safeEmail,
            'rut' => '12.345.678-9',
            'telefono1' => fake()->phoneNumber
        ];

        $response = $this->postJson('/api/pacientes', $patientData);

        $response->assertStatus(201)
                ->assertJsonStructure([
                    'data' => [
                        'id',
                        'nombre',
                        'apellidos',
                        'email',
                        'rut'
                    ]
                ]);

        $this->assertDatabaseHas('paciente', [
            'email' => $patientData['email']
        ]);
    }
}
