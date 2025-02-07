<?php

namespace Database\Factories;

use App\Models\Afp;
use App\Models\Area;
use App\Models\Ceco;
use App\Models\Empresa;
use App\Helpers\RutGenerator;
use App\Models\EstadoCivil;
use App\Models\Exposicion;
use App\Models\Genero;
use App\Models\GrupoSanguineo;
use App\Models\NivelInstruccion;
use App\Models\LeySocial;
use App\Models\Nacionalidad;
use App\Models\ModalidadAtencion;
use App\Models\Paciente;
use App\Models\Planta;
use App\Models\Prevision;
use App\Models\PuebloOriginario;
use App\Models\Religion;
use App\Models\SeguroSalud;
use App\Models\Unidad;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\DB;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Paciente>
 */
class PacienteFactory extends Factory
{
    protected $model = Paciente::class;

    public function definition(): array
    {
        return [
            'rut' => RutGenerator::generate(),
            'nombre' => $this->faker->firstName(),
            'apellidos' => $this->faker->lastName()." ".$this->faker->lastName(),
            'actividad_economica' => $this->faker->jobTitle,
            'afp' => Afp::inRandomOrder()->first()->id,
            'area' => Area::inRandomOrder()->first()->id,
            'cargo' => $this->faker->jobTitle,
            'ciudad' => $this->faker->city,
            'direccion' => $this->faker->address,
            'donante' => $this->faker->boolean,
            'edad' => $this->faker->numberBetween(18, 80),
            'email' => $this->faker->unique()->safeEmail(),
            'empresa' => Empresa::inRandomOrder()->first()->id,
            'estado_civil' => EstadoCivil::inRandomOrder()->first()->id,
            'exposicion' => $this->faker->randomElement(['Baja', 'Media', 'Alta']),
            'fecha_nacimiento' => $this->faker->date(),
            'genero' => Genero::inRandomOrder()->first()->id,
            'grupo_sanguineo' => GrupoSanguineo::inRandomOrder()->first()->id,
            'nivel_instruccion' => NivelInstruccion::inRandomOrder()->first()->id,
            'seguro_salud' => SeguroSalud::inRandomOrder()->first()->id,
            'ley_social' => LeySocial::inRandomOrder()->first()->id,
            'nacionalidad' => Nacionalidad::inRandomOrder()->first()->id,
            'modalidad_atencion' => ModalidadAtencion::inRandomOrder()->first()->id,
            'pueblo_originario' => PuebloOriginario::inRandomOrder()->first()->id,
            'religion' => Religion::inRandomOrder()->first()->id,
            'planta' => Planta::inRandomOrder()->first()->id,
            'prevision' => Prevision::inRandomOrder()->first()->id,
            'unidad' => Unidad::inRandomOrder()->first()->id,
            'telefono1' => $this->faker->phoneNumber,
            'telefono2' => $this->faker->optional()->phoneNumber,
            'token_activacion' => null,
            'token_activacion_expira' => null,
        ];
    }
}
