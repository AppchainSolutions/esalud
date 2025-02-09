<?php

namespace Database\Factories;

use App\Models\Afp;
use App\Models\Area;
use App\Models\Empresa;
use App\Models\EstadoCivil;
use App\Models\Exposicion;
use App\Models\Ceco;
use App\Models\Genero;
use App\Models\GrupoSanguineo;
use App\Models\NivelInstruccion;
use App\Models\LeySocial;
use App\Models\Nacionalidad;
use App\Models\ModalidadAtencion;
use App\Models\Paciente;
use App\Models\PuebloOriginario;
use App\Models\Religion;
use App\Models\SeguroSalud;
use App\Models\Planta;
use App\Models\Prevision;
use App\Models\Unidad;
use Faker\Factory as Faker;
use App\Helpers\RutGenerator;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Paciente>
 */
class PacienteFactory extends Factory
{
    protected $model = Paciente::class;

    public function definition(): array
    {
        // Crear paciente

        return [
            'rut' => RutGenerator::generate(),
            'activo' => $this->faker->boolean,
            'actividad_economica' => $this->faker->jobTitle,
            'cuenta_activada' => false,
            'afp' => Afp::inRandomOrder()->first()->id,
            'apellidos' => $this->faker->lastName,
            'area' => Area::inRandomOrder()->first()->id,
            'ceco' => Ceco::inRandomOrder()->first()->id,
            'direccion' => $this->faker->streetAddress(),
            'direccion' => $this->faker->streetAddress,
            'edad' => $this->faker->numberBetween(0, 99),
            'email' => $this->faker->unique()->safeEmail(),
            'empresa' => Empresa::inRandomOrder()->first()->id,
            'estado_civil' => EstadoCivil::inRandomOrder()->first()->id,
            'exposicion' => Exposicion::inRandomOrder()->first()->id,
            'fecha_nacimiento' => $this->faker->date(),
            'genero' => Genero::inRandomOrder()->first()->id,
            'grupo_sanguineo' => GrupoSanguineo::inRandomOrder()->first()->id,
            'nivel_instruccion' => NivelInstruccion::inRandomOrder()->first()->id,
            'ley_social' => LeySocial::inRandomOrder()->first()->id,
            'modalidad_atencion' => ModalidadAtencion::inRandomOrder()->first()->id,
            'nacionalidad' => Nacionalidad::inRandomOrder()->first()->id,
            'nombre' => $this->faker->firstName,
            'planta' => Planta::inRandomOrder()->first()->id,
            'prevision' => Prevision::inRandomOrder()->first()->id,
            'profesion' => $this->faker->jobTitle,
            'pueblo_originario' => PuebloOriginario::inRandomOrder()->first()->id,
            'religion' => Religion::inRandomOrder()->first()->id,
            'seguro_salud' => SeguroSalud::inRandomOrder()->first()->id,
            'telefono1' => $this->faker->phoneNumber,
            'telefono2' => $this->faker->phoneNumber,
            'unidad' => Unidad::inRandomOrder()->first()->id,
        ];
    }

    public function pendienteActivacion()
    {
        return $this->state(function () {
            return [
                'cuenta_activada' => false,
                'user_id' => null,
                'token_activacion' => Str::random(60),
                'token_activacion_expira' => now()->addHours(24)
            ];
        });
    }
}
