<?php

namespace Database\Factories;

use App\Models\AntecedenteFamiliar;
use Illuminate\Database\Eloquent\Factories\Factory;

class AntecedenteFamiliarFactory extends Factory
{
    protected $model = AntecedenteFamiliar::class;

    public function definition(): array
    {
        return [
            'paciente_id' => $this->faker->numberBetween(1, 100),
            'parentesco' => $this->generarParentesco(),
            'patologia' => $this->generarPatologia()
        ];
    }

    // Método para generar parentescos de manera realista
    private function generarParentesco(): string
    {
        $parentescos = [
            'Padre',
            'Madre',
            'Hermano',
            'Hermana',
            'Abuelo paterno',
            'Abuela paterna',
            'Abuelo materno',
            'Abuela materna',
            'Tío paterno',
            'Tía paterna',
            'Tío materno',
            'Tía materna',
            'Primo',
            'Prima'
        ];

        return $this->faker->randomElement($parentescos);
    }

    // Método para generar patologías de manera realista
    private function generarPatologia(): string
    {
        $patologias = [
            'Diabetes tipo 2',
            'Hipertensión arterial',
            'Cáncer de mama',
            'Cáncer de próstata',
            'Enfermedad cardíaca',
            'Alzheimer',
            'Depresión',
            'Artritis',
            'Asma',
            'Colesterol alto',
            'Obesidad',
            'Enfermedad renal',
            'Epilepsia',
            'Esquizofrenia',
            'Enfermedad de Parkinson'
        ];

        return $this->faker->randomElement($patologias);
    }

    // Estado para antecedentes familiares con patologías graves
    public function patologiaGrave()
    {
        return $this->state(function (array $attributes) {
            $patologiasGraves = [
                'Cáncer de páncreas',
                'Enfermedad de Huntington',
                'Fibrosis quística',
                'Distrofia muscular',
                'Esclerosis múltiple'
            ];

            return [
                'patologia' => $this->faker->randomElement($patologiasGraves)
            ];
        });
    }

    // Estado para antecedentes familiares con patologías leves
    public function patologiaLeve()
    {
        return $this->state(function (array $attributes) {
            $patologiasLeves = [
                'Alergias',
                'Migraña',
                'Problemas de visión',
                'Intolerancia a la lactosa',
                'Dermatitis'
            ];

            return [
                'patologia' => $this->faker->randomElement($patologiasLeves)
            ];
        });
    }
}
