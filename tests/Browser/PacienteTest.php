<?php

namespace Tests\Browser;

use App\Models\Alergias;
use App\Models\Paciente;
use App\Models\User;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class PacienteTest extends DuskTestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_has_no_alergias()
    {
        $this->browse(function (Browser $browser) {
            $paciente = Paciente::factory()->create();
            $browser->loginAs(User::factory()->create())
                    ->visit('/pacientes/' . $paciente->id)
                    ->assertSee('Alergias')
                    ->assertSeeIn('@alergias', '0');
        });
    }
    public function it_has_many_alergias()
    {
        $this->browse(function (Browser $browser) {
            $paciente = Paciente::factory()->create();
            Alergias::factory()->count(3)->create([
                'paciente_id' => $paciente->id,
                'descripcion' => 'Alergia de prueba'
            ]);
            $browser->visit('/pacientes/' . $paciente->id)
                    ->assertSee('Alergias')
                    ->assertSeeIn('@alergias', $paciente->alergia()->count());
        });
    }

    /** @test */
    public function it_has_many_enfermedades()
    {
        $this->browse(function (Browser $browser) {
            $paciente = Paciente::factory()->create();
            $browser->visit('/pacientes/' . $paciente->id)
                    ->assertSee('Enfermedades')
                    ->assertSeeIn('@enfermedades', $paciente->enfermedad()->count());
        });
    }

    /** @test */
    public function it_has_many_cirugias()
    {
        $this->browse(function (Browser $browser) {
            $paciente = Paciente::factory()->create();
            $browser->visit('/pacientes/' . $paciente->id)
                    ->assertSee('Cirugias')
                    ->assertSeeIn('@cirugias', $paciente->cirugia()->count());
        });
    }

    /** @test */
    public function it_has_many_factores()
    {
        $this->browse(function (Browser $browser) {
            $paciente = Paciente::factory()->create();
            $browser->visit('/pacientes/' . $paciente->id)
                    ->assertSee('Factores de Riesgo')
                    ->assertSeeIn('@factores', $paciente->factor()->count());
        });
    }

    /** @test */
    public function it_has_fillable_attributes()
    {
        $this->browse(function (Browser $browser) {
            $paciente = new Paciente();
            $browser->visit('/pacientes/create')
                    ->assertSee('Crear Paciente')
                    ->assertInputValue('@rut', '')
                    ->assertInputValue('@nombre', '')
                    ->assertInputValue('@apellidos', '')
                    ->assertInputValue('@activo', '')
                    ->assertInputValue('@afp', '')
                    ->assertInputValue('@ciudad', '')
                    ->assertInputValue('@direccion', '')
                    ->assertInputValue('@donante', '')
                    ->assertInputValue('@edad', '')
                    ->assertInputValue('@email', '')
                    ->assertInputValue('@estado_civil', '')
                    ->assertInputValue('@fecha_nacimiento', '')
                    ->assertInputValue('@genero', '')
                    ->assertInputValue('@grupo_sanguineo', '')
                    ->assertInputValue('@instruccion', '')
                    ->assertInputValue('@ley_social', '')
                    ->assertInputValue('@modalidad', '')
                    ->assertInputValue('@nacionalidad', '')
                    ->assertInputValue('@ocupacion', '')
                    ->assertInputValue('@prevision', '')
                    ->assertInputValue('@profesion', '')
                    ->assertInputValue('@pueblo', '')
                    ->assertInputValue('@religion', '')
                    ->assertInputValue('@seguro', '')
                    ->assertInputValue('@telefono1', '')
                    ->assertInputValue('@telefono2', '');
        });
    }
}