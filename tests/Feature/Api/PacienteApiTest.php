<?php

namespace Tests\Feature\Api;

use Tests\TestCase;
use App\Models\User;
use Laravel\Sanctum\Sanctum;

class PacienteApiTest extends TestCase
{
    /** @test */
    public function test_can_get_pacientes_list()
    {
        // Autenticar un usuario
        $user = User::factory()->create();
        Sanctum::actingAs($user);

        // Realizar solicitud a la API de pacientes
        $response = $this->getJson('/api/pacientes/search');

        // Verificar respuesta
        $response->assertStatus(200)
                 ->assertJsonStructure([
                     'data' => [
                         '*' => [
                             'id',
                             'nombre',
                             // Agregar más campos según la estructura de tu modelo
                         ]
                     ]
                 ]);
    }

    /** @test */
    public function test_cannot_get_pacientes_list_without_authentication()
    {
        // Intentar acceder sin autenticación
        $response = $this->getJson('/api/pacientes/search');

        // Verificar que se requiere autenticación
        $response->assertStatus(401);
    }
}
