<?php

namespace Database\Factories;

use App\Models\Vacuna;
use App\Models\Paciente;
use Illuminate\Database\Eloquent\Factories\Factory;
use Carbon\Carbon;

class VacunaFactory extends Factory
{
    protected $model = Vacuna::class;

    public function definition(): array
    {
        $vacunaInfo = $this->generarVacuna();

        return [
            'paciente_id' => Paciente::factory(),
            'vacuna' => $vacunaInfo['nombre'],
            'tipo_vacuna' => $vacunaInfo['tipo'],
            'fecha_vacuna' => $this->generarFechaVacuna(),
            'comentario' => $this->faker->optional(0.7)->sentence()
        ];
    }

    private function generarVacuna(): array
    {
        $vacunas = [
            // Vacunas infantiles
            [
                'nombre' => 'Triple Viral (Sarampión, Paperas, Rubéola)',
                'tipo' => 'Infantil'
            ],
            [
                'nombre' => 'Pentavalente (DPT, Hepatitis B, Haemophilus influenzae)',
                'tipo' => 'Infantil'
            ],
            [
                'nombre' => 'Polio',
                'tipo' => 'Infantil'
            ],

            // Vacunas para adultos
            [
                'nombre' => 'Hepatitis A',
                'tipo' => 'Adulto'
            ],
            [
                'nombre' => 'Hepatitis B',
                'tipo' => 'Adulto'
            ],
            [
                'nombre' => 'Influenza (Gripe)',
                'tipo' => 'Adulto'
            ],

            // Vacunas COVID-19
            [
                'nombre' => 'Pfizer-BioNTech',
                'tipo' => 'COVID-19'
            ],
            [
                'nombre' => 'Moderna',
                'tipo' => 'COVID-19'
            ],
            [
                'nombre' => 'AstraZeneca',
                'tipo' => 'COVID-19'
            ],

            // Vacunas especiales
            [
                'nombre' => 'Tétanos',
                'tipo' => 'Refuerzo'
            ],
            [
                'nombre' => 'Neumococo',
                'tipo' => 'Adulto Mayor'
            ],
            [
                'nombre' => 'HPV (Virus del Papiloma Humano)',
                'tipo' => 'Prevención Cáncer'
            ]
        ];

        return $this->faker->randomElement($vacunas);
    }

    private function generarFechaVacuna(): Carbon
    {
        // Generar fecha de vacuna entre los últimos 5 años
        return $this->faker->dateTimeBetween('-5 years', 'now');
    }
}
