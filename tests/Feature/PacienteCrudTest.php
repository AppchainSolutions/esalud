<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\Afp;
use App\Models\Calle;
use App\Models\EstablecimientoEducacional;
use App\Models\Nacionalidad;
use App\Models\NivelInstruccion;
use App\Models\Modalidad;
use App\Models\LeySocial;
use App\Models\Paciente;
use App\Models\Prevision;
use App\Models\PuebloOriginario;
use App\Models\Religion;
use App\Models\SeguroSalud;

uses(RefreshDatabase::class);

it('can create a paciente', function () {
    
    $pacienteData = Paciente::factory()->make()->toArray();

    $response = $this->post('/pacientes', $pacienteData);

    $response->assertStatus(201);
    $this->assertDatabaseHas('pacientes', $pacienteData);
});

it('can read a paciente', function () {
    $paciente = Paciente::factory()->create();

    $response = $this->get('/paciente/' . $paciente->id);

    $response->assertStatus(200);
    $response->assertJson($paciente->toArray());
});

it('can update a paciente', function () {
    $paciente = Paciente::factory()->create();
    $updatedData = Paciente::factory()->make()->toArray();

    $response = $this->put('/pacientes/' . $paciente->id, $updatedData);

    $response->assertStatus(200);
    $this->assertDatabaseHas('pacientes', $updatedData);
});

it('can delete a paciente', function () {
    $paciente = Paciente::factory()->create();

    $response = $this->delete('/pacientes/' . $paciente->id);

    $response->assertStatus(204);
    $this->assertDatabaseMissing('pacientes', ['id' => $paciente->id]);
});