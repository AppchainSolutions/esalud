<?php

namespace Database\Factories;

use App\Models\Afp;
use App\Models\Area;
use App\Models\Empresa;
use App\Models\EstadoCivil;
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
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Paciente>
 */
class PacienteFactory extends Factory
{
    protected $model = Paciente::class;

    public function definition(): array
    {
        $faker = Faker::create('es_ES');
        $rut = RutGenerator::generate();

        return [
            'nombre' => $faker->firstName,
            'apellidos' => $faker->lastName . ' ' . $faker->lastName,
            'rut' => $rut,
            'email' => $faker->unique()->safeEmail,
            'telefono1' => $faker->phoneNumber,
            'direccion' => $faker->address,
            'ciudad' => $faker->city,
            'edad' => $faker->numberBetween(18, 80),
            'fecha_nacimiento' => $faker->date(),
            'exposicion' => $faker->randomElement(['Baja', 'Media', 'Alta']),
            'modalidad_atencion' => '1',
            'activo' => true,
            'cuenta_activada' => false,
            'user_id' => null,
            'token_activacion' => null,
            'token_activacion_expira' => null,
            'afp' => 1,
            'area' => 1,
            'empresa' => 1,
            'estado_civil' => 1,
            'genero' => 1,
            'grupo_sanguineo' => 1,
            'ley_social' => 1,
            'nacionalidad' => 1,
            'nivel_instruccion' => 1,
            'planta' => 1,
            'prevision' => 1,
            'pueblo_originario' => 1,
            'religion' => 1,
            'seguro_salud' => 1,
            'unidad' => 1
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
