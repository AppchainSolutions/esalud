<?php

namespace Database\Factories;

use App\Models\Cirugia;
use App\Models\Paciente;
use Illuminate\Database\Eloquent\Factories\Factory;

class CirugiaFactory extends Factory
{
    protected $model = Cirugia::class;

    public function definition()
    {
        return [
            'paciente_id' => Paciente::factory(),
            'comentario' => $this->faker->optional(0.7)->sentence(),
            'cirugia' => $this->faker->randomElement([
                'Cirugía General',
                'Cirugía Cardiovascular',
                'Cirugía Plástica',
                'Cirugía Ortopédica',
                'Cirugía Neurológica',
                'Cirugía de Tórax',
                'Cirugía Laparoscópica',
                'Cirugía Reconstructiva',
                'Cirugía Oncológica',
                'Cirugía Vascular'
            ]),
            'fecha_cirugia' => $this->faker->dateTimeBetween('-10 years', 'now')
        ];
    }
}
