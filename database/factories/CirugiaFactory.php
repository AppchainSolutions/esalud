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
        $tiposCirugia = [
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
        ];

        return [
            'paciente_id' => Paciente::factory(),
            'cirugia' => $this->faker->randomElement($tiposCirugia),
            'fecha' => $this->faker->dateTimeBetween('-10 years', 'now'),
            'comentario' => $this->faker->optional(0.7)->sentence(),
            'lugar' => $this->faker->randomElement([
                'Hospital Público',
                'Clínica Privada',
                'Centro Médico',
                'Hospital Regional'
            ]),
            'resultado' => $this->faker->randomElement([
                'Exitoso',
                'Parcialmente Exitoso',
                'Complicaciones Menores',
                'Sin Complicaciones'
            ])
        ];
    }
}
