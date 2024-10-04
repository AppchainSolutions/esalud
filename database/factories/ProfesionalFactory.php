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

        Especialidad::factory()->create();

        Profesional::truncate();


        return [
            'apellidos' => $this->faker->lastName,
            'email' => $this->faker->unique()->safeEmail,
            'nombre' => $this->faker->firstName,
            'especialidad_id' => Especialidad::inRandomOrder()->first()->id,
            'rut' => RutGenerator::generarRut(), // Genera un RUT chileno válido
            'telefono' => $this->faker->phoneNumber,
            'direccion' => $this->faker->address
        ];
    }
}
