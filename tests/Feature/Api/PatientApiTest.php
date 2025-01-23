<?php

namespace Tests\Feature\Api;

use Tests\TestCase;
use App\Models\User;
use App\Models\Patient;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;

class PatientApiTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();
        $this->user = User::factory()->create();
    }

    public function test_can_get_patients_list()
    {
        $this->actingAs($this->user);
        
        // Crear algunos pacientes de prueba
        Patient::factory()->count(3)->create();

        $response = $this->getJson('/api/patients');

        $response->assertStatus(200)
                ->assertJsonStructure([
                    'data' => [
                        '*' => [
                            'id',
                            'name',
                            'email',
                            'phone',
                            'birth_date',
                            'created_at'
                        ]
                    ]
                ]);
    }

    public function test_can_create_patient()
    {
        $this->actingAs($this->user);

        $patientData = [
            'name' => $this->faker->name,
            'email' => $this->faker->unique()->safeEmail,
            'phone' => $this->faker->phoneNumber,
            'birth_date' => $this->faker->date()
        ];

        $response = $this->postJson('/api/patients', $patientData);

        $response->assertStatus(201)
                ->assertJsonStructure([
                    'data' => [
                        'id',
                        'name',
                        'email',
                        'phone',
                        'birth_date',
                        'created_at'
                    ]
                ]);

        $this->assertDatabaseHas('patients', [
            'email' => $patientData['email']
        ]);
    }
}
