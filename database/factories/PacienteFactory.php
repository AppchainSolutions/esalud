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
use App\Models\Instruccion;
use App\Models\LeySocial;
use App\Models\Nacionalidad;
use App\Models\Modalidad;
use App\Models\Paciente;
use App\Models\Planta;
use App\Models\Prevision;
use App\Models\Pueblo;
use App\Models\Religion;
use App\Models\Seguro;
use App\Models\Unidad;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\DB;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Paciente>
 */
class PacienteFactory extends Factory
{
    protected $model = Paciente::class;

    public function definition()
    {
        // Crear datos de prueba para las relaciones si no existen
        if (Afp::count() === 0) Afp::factory()->create();
        if (Area::count() === 0) Area::factory()->create();
        if (Ceco::count() === 0) Ceco::factory()->create();
        if (Empresa::count() === 0) Empresa::factory()->create();
        if (EstadoCivil::count() === 0) EstadoCivil::factory()->create();
        if (Exposicion::count() === 0) Exposicion::factory()->create();
        if (Genero::count() === 0) Genero::factory()->create();
        if (GrupoSanguineo::count() === 0) GrupoSanguineo::factory()->create();
        if (Instruccion::count() === 0) Instruccion::factory()->create();
        if (LeySocial::count() === 0) LeySocial::factory()->create();
        if (Nacionalidad::count() === 0) Nacionalidad::factory()->create();
        if (Modalidad::count() === 0) Modalidad::factory()->create();
        if (Planta::count() === 0) Planta::factory()->create();
        if (Prevision::count() === 0) Prevision::factory()->create();
        if (Pueblo::count() === 0) Pueblo::factory()->create();
        if (Religion::count() === 0) Religion::factory()->create();
        if (Seguro::count() === 0) Seguro::factory()->create();
        if (Unidad::count() === 0) Unidad::factory()->create();

        return [
            'actividad_economica' => $this->faker->jobTitle,
            'activo' => $this->faker->boolean,
            'afp' => Afp::inRandomOrder()->first()->id,
            'apellidos' => $this->faker->lastName,
            'area' => Area::inRandomOrder()->first()->id,
            'cargo' => $this->faker->jobTitle,
            'ceco' => Ceco::inRandomOrder()->first()->id,
            'ciudad' => $this->faker->city,
            'direccion' => $this->faker->streetAddress(),
            'donante' => $this->faker->boolean,
            'edad' => $this->faker->numberBetween(0, 99),
            'email' => $this->faker->unique()->safeEmail(),
            'empresa' => Empresa::inRandomOrder()->first()->id,
            'estado_civil' => EstadoCivil::inRandomOrder()->first()->id,
            'exposicion' => Exposicion::inRandomOrder()->first()->descripcion,
            'fecha_nacimiento' => $this->faker->date(),
            'genero' => Genero::inRandomOrder()->first()->id,
            'grupo_sanguineo' => GrupoSanguineo::inRandomOrder()->first()->id,
            'instruccion' => Instruccion::inRandomOrder()->first()->id,
            'ley_social' => LeySocial::inRandomOrder()->first()->id,
            'modalidad' => Modalidad::inRandomOrder()->first()->id,
            'nacionalidad' => Nacionalidad::inRandomOrder()->first()->id,
            'nombre' => $this->faker->firstName,
            'ocupacion' => $this->faker->jobTitle,
            'planta' => Planta::inRandomOrder()->first()->id,
            'prevision' => Prevision::inRandomOrder()->first()->id,
            'profesion' => $this->faker->jobTitle,
            'protocolo_minsal' => $this->faker->boolean,
            'pueblo' => Pueblo::inRandomOrder()->first()->id,
            'religion' => Religion::inRandomOrder()->first()->id,
            'rut' => RutGenerator::generarRut(),
            'seguro' => Seguro::inRandomOrder()->first()->id,
            'telefono1' => $this->faker->phoneNumber,
            'telefono2' => $this->faker->phoneNumber,
            'unidad' => Unidad::inRandomOrder()->first()->id,
        ];
    }
}
