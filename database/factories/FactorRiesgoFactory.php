<?php

namespace Database\Factories;

use App\Models\FactorRiesgo;
use App\Models\Paciente;
use Illuminate\Database\Eloquent\Factories\Factory;

class FactorRiesgoFactory extends Factory
{
    protected $model = FactorRiesgo::class;

    public function definition(): array
    {
        return [
            'paciente_id' => Paciente::factory(),
            'factor_riesgo' => $this->generarFactorRiesgo(),
            'comentario' => $this->faker->optional(0.7)->sentence()
        ];
    }

    private function generarFactorRiesgo(): string
    {
        $factoresRiesgo = [
            // Factores de riesgo cardiovascular
            'Hipertensión arterial',
            'Colesterol alto',
            'Diabetes',
            'Obesidad',
            'Sedentarismo',
            'Tabaquismo',
            'Consumo excesivo de alcohol',

            // Factores de riesgo laboral
            'Exposición a ruido industrial',
            'Trabajo en altura',
            'Manipulación de sustancias químicas',
            'Trabajo con radiación',
            'Estrés laboral crónico',

            // Factores de riesgo psicosocial
            'Depresión',
            'Ansiedad',
            'Trastornos del sueño',
            'Aislamiento social',

            // Factores de riesgo genético
            'Antecedentes familiares de cáncer',
            'Predisposición genética a enfermedades',

            // Factores de riesgo ambiental
            'Contaminación atmosférica',
            'Exposición a metales pesados',
            'Radiación solar excesiva'
        ];

        return $this->faker->randomElement($factoresRiesgo);
    }
}
