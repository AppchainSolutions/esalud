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
use App\Models\User;
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
        $nivelInstruccion = NivelInstruccion::count() > 0 
            ? NivelInstruccion::inRandomOrder()->first()->id 
            : NivelInstruccion::create(['descripcion' => 'Básica'])->id;

        $leySocial = LeySocial::count() > 0 
            ? LeySocial::inRandomOrder()->first()->id 
            : LeySocial::create(['descripcion' => 'Ley General'])->id;

        $modalidadAtencion = ModalidadAtencion::count() > 0 
            ? ModalidadAtencion::inRandomOrder()->first()->id 
            : ModalidadAtencion::create(['descripcion' => 'Presencial'])->id;

        $nacionalidad = Nacionalidad::count() > 0 
            ? Nacionalidad::inRandomOrder()->first()->id 
            : Nacionalidad::create(['descripcion' => 'Chile'])->id;

        $planta = Planta::count() > 0 
            ? Planta::inRandomOrder()->first()->id 
            : Planta::create(['descripcion' => 'Principal'])->id;

        $prevision = Prevision::count() > 0 
            ? Prevision::inRandomOrder()->first()->id 
            : Prevision::create(['descripcion' => 'Fonasa'])->id;

        $puebloOriginario = PuebloOriginario::count() > 0 
            ? PuebloOriginario::inRandomOrder()->first()->id 
            : PuebloOriginario::create(['descripcion' => 'Otro'])->id;

        $religion = Religion::count() > 0 
            ? Religion::inRandomOrder()->first()->id 
            : Religion::create(['descripcion' => 'Otro'])->id;

        $seguroSalud = SeguroSalud::count() > 0 
            ? SeguroSalud::inRandomOrder()->first()->id 
            : SeguroSalud::create(['descripcion' => 'Sin Seguro'])->id;

        $genero = Genero::count() > 0 
            ? Genero::inRandomOrder()->first()->id 
            : Genero::create(['descripcion' => 'Otro'])->id;

        $estadoCivil = EstadoCivil::count() > 0 
            ? EstadoCivil::inRandomOrder()->first()->id 
            : EstadoCivil::create(['descripcion' => 'Soltero'])->id;

        $unidad = Unidad::count() > 0 
            ? Unidad::inRandomOrder()->first()->id 
            : Unidad::create(['descripcion' => 'General'])->id;

        // Crear usuario si no existe
        $user = User::factory()->create();

        return [
            'rut' => RutGenerator::generate(),
            'activo' => true,
            'actividad_economica' => $this->faker->jobTitle,
            'cuenta_activada' => false,
            'apellidos' => $this->faker->lastName,
            'nombre' => $this->faker->firstName,
            'direccion' => $this->faker->streetAddress,
            'email' => $this->faker->unique()->safeEmail,
            'fecha_nacimiento' => $this->faker->date(),
            'telefono1' => $this->faker->phoneNumber,
            'telefono2' => $this->faker->phoneNumber,
            'token_activacion' => null,
            'token_activacion_expira' => null,
            'user_id' => $user->id,
            'nivel_instruccion' => $nivelInstruccion,
            'ley_social' => $leySocial,
            'modalidad_atencion' => $modalidadAtencion,
            'nacionalidad' => $nacionalidad,
            'planta' => $planta,
            'prevision' => $prevision,
            'profesion' => $this->faker->jobTitle,
            'pueblo_originario' => $puebloOriginario,
            'religion' => $religion,
            'seguro_salud' => $seguroSalud,
            'genero' => $genero,
            'estado_civil' => $estadoCivil,
            'unidad' => $unidad,
        ];
    }

    // Método para crear un paciente sin usuario
    public function sinUsuario(): static
    {
        return $this->state(fn (array $attributes) => [
            'user_id' => null,
        ]);
    }
}
