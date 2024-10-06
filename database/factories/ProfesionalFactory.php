<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Helpers\RutGenerator;
use App\Models\Especialidad;
use App\Models\Profesional;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Profesional>
 */
class ProfesionalFactory extends Factory
{
    protected $model = Profesional::class;


    public function definition()
    {

        Profesional::truncate();
        Especialidad::factory()->count(5)->create();

        return [
            'apellidos' => $this->faker->lastName,
            'direccion' => $this->faker->address,
            'email' => $this->faker->unique()->safeEmail,
            'especialidad_id' => Especialidad::inRandomOrder()->first()->id,
            'fecha_nacimiento' => $this->faker->date,
            'foto' => null, // Aquí podrías agregar una imagen o un link a una imagen en un repositorio externo.
            'nombre' => $this->faker->firstName,
            'rut' => RutGenerator::generarRut(), // Genera un RUT chileno válido
            'telefono' => $this->faker->phoneNumber,
            'vigente' => $this->faker->boolean,
        ];
    }
}
