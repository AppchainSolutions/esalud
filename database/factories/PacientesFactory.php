<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Helpers\RutGenerator;
use App\Models\Calles;
use App\Models\EstadosCiviles;
use App\Models\EstablecimientosEducacionales;
use App\Models\GruposSanguineos;
use App\Models\Generos;
use App\Models\Previsiones;
use App\Models\Nacionalidades;
use App\Models\NivelesInstruccion;
use App\Models\Pacientes;
use App\Models\PueblosOriginarios;
use App\Models\Religiones;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Paciente>
 */
class PacientesFactory extends Factory
{
    protected $model = Pacientes::class;


    public function definition()
    {
        Calles::factory()->create();
        EstablecimientosEducacionales::factory()->create();
        EstadosCiviles::factory()->create();
        Generos::factory()->create();
        GruposSanguineos::factory()->create();
        Nacionalidades::factory()->create();
        NivelesInstruccion::factory()->create();
        Previsiones::factory()->create();
        PueblosOriginarios::factory()->create();
        Religiones::factory()->create();

        return [
            'apellidos_responsable' => $this->faker->lastName,
            'apellidos' => $this->faker->lastName,
            'calle_id' => Calles::inRandomOrder()->first()->id,
            'calle_responsable_id' => Calles::inRandomOrder()->first()->id,
            'ciudad_responsable' => $this->faker->city,
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
            'establecimiento_educacional_id' => EstablecimientosEducacionales::inRandomOrder()->first()->id,
            'estado_civil_id' => EstadosCiviles::inRandomOrder()->first()->id,
            'estado_civil_responsable_id' => EstadosCiviles::inRandomOrder()->first()->id,
            'fecha_nacimiento_responsable' => $this->faker->date(),
            'fecha_nacimiento' => $this->faker->date(),
            'genero_id' =>  Generos::inRandomOrder()->first()->id,
            'genero_responsable_id' => Generos::inRandomOrder()->first()->id,
            'grupo_sanguineo_id' => GruposSanguineos::inRandomOrder()->first()->id,
            'grupo_sanguineo_responsable_id' => GruposSanguineos::inRandomOrder()->first()->id,
            'nacionalidad_id' => Nacionalidades::inRandomOrder()->first()->id,
            'nacionalidad_responsable_id' => Nacionalidades::inRandomOrder()->first()->id,
            'nivel_instruccion_id' => NivelesInstruccion::inRandomOrder()->first()->id,
            'nivel_instruccion_responsable_id' => NivelesInstruccion::inRandomOrder()->first()->id,
            'nombre_responsable' => $this->faker->firstName,
            'nombre' => $this->faker->firstName,
            'ocupacion_responsable' => $this->faker->jobTitle,
            'ocupacion' => $this->faker->jobTitle,
            'parentesco_responsable' => $this->faker->word(),
            'pertenece_pie' => $this->faker->boolean,
            'prevision_id' => Previsiones::inRandomOrder()->first()->id,
            'prevision_responsable_id' => Previsiones::inRandomOrder()->first()->id,
            'profesor' => $this->faker->jobTitle,
            'pueblo_originario_id' => PueblosOriginarios::inRandomOrder()->first()->id,
            'pueblo_originario_responsable_id' => PueblosOriginarios::inRandomOrder()->first()->id,
            'religion_id' => Religiones::inRandomOrder()->first()->id,
            'religion_responsable_id' => Religiones::inRandomOrder()->first()->id,
            'rut' => RutGenerator::generarRut(),
            'rut' => RutGenerator::generarRut(), // Genera un RUT chileno válido
            'telefono_responsable' => $this->faker->phoneNumber,
            'telefono1' => $this->faker->phoneNumber,
            'telefono2' => $this->faker->phoneNumber,
        ];
    }
}
