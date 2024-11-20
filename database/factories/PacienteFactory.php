<?php

namespace Database\Factories;

use App\Helpers\RutGenerator;
use App\Models\Calles;
use App\Models\EstablecimientoEducacional;
use App\Models\EstadoCivil;
use App\Models\Genero;
use App\Models\GrupoSanguineo;
use App\Models\Nacionalidad;
use App\Models\NivelInstruccion;
use App\Models\Paciente;
use App\Models\Prevision;
use App\Models\Pueblo;
use App\Models\Religion;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Paciente>
 */
class PacienteFactory extends Factory
{
    protected $model = Paciente::class;

    public function definition()
    {
        EstadoCivil::factory()->create();
        Genero::factory()->create();
        GrupoSanguineo::factory()->create();
        Nacionalidad::factory()->create();
        Prevision::factory()->create();
        Pueblo::factory()->create();
        Religion::factory()->create();

        return [
            'apellidos_responsable' => $this->faker->lastName,
            'apellidos' => $this->faker->lastName,
            'ciudad' => $this->faker->city,
            'comunidad_lgbtq' => true,
            'comunidad_lgbtq_responsable' => false,
            'credencial_discapacidad_responsable' => false,
            'credencial_discapacidad' => false,
            'direccion_responsable' => $this->faker->streetAddress(),
            'direccion' => $this->faker->streetAddress(),
            'donante_responsable' => $this->faker->boolean,
            'donante' => $this->faker->boolean,
            'edad_responsable' => $this->faker->numberBetween(18, 65),
            'edad' => $this->faker->numberBetween(0, 99),
            'email_responsable' => $this->faker->unique()->safeEmail(),
            'email' => $this->faker->unique()->safeEmail(),
            'estado_civil_id' => EstadoCivil::inRandomOrder()->first()->id,
            'fecha_nacimiento' => $this->faker->date(),
            'genero_id' => Genero::inRandomOrder()->first()->id,
            'grupo_sanguineo_id' => GrupoSanguineo::inRandomOrder()->first()->id,
            'nacionalidad_id' => Nacionalidad::inRandomOrder()->first()->id,
            'nombre' => $this->faker->firstName,
            'ocupacion' => $this->faker->jobTitle,
            'prevision_id' => Prevision::inRandomOrder()->first()->id,
            'pueblo_originario_id' => Pueblo::inRandomOrder()->first()->id,
            'religion_id' => Religion::inRandomOrder()->first()->id,
            'rut' => RutGenerator::generarRut(),
            'telefono1' => $this->faker->phoneNumber,
            'telefono2' => $this->faker->phoneNumber,
        ];
    }
}
