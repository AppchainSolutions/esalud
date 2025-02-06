<?php

namespace Database\Factories;

use App\Models\Accidente;
use Illuminate\Database\Eloquent\Factories\Factory;

class AccidenteFactory extends Factory
{
    protected $model = Accidente::class;

    public function definition(): array
    {
        return [
            'descripcion' => $this->generarDescripcionAccidente()
        ];
    }

    // Método para generar descripciones de accidente más realistas
    private function generarDescripcionAccidente(): string
    {
        $tiposAccidente = [
            'Caída desde altura',
            'Accidente de tráfico',
            'Lesión por esfuerzo repetitivo',
            'Golpe con objeto',
            'Quemadura',
            'Accidente laboral',
            'Lesión deportiva',
            'Accidente doméstico',
            'Corte o herida',
            'Lesión por aplastamiento'
        ];

        $lugaresAccidente = [
            'en el trabajo',
            'durante una actividad deportiva',
            'en casa',
            'en la calle',
            'en un vehículo',
            'en una zona de construcción',
            'durante una actividad recreativa'
        ];

        $detallesAdicionales = [
            'con heridas leves',
            'requiriendo atención médica',
            'sin consecuencias graves',
            'con traumatismo',
            'con posible fractura',
            'con contusiones múltiples'
        ];

        return sprintf(
            "%s %s, %s",
            $this->faker->randomElement($tiposAccidente),
            $this->faker->randomElement($lugaresAccidente),
            $this->faker->randomElement($detallesAdicionales)
        );
    }

    // Estado para accidentes graves
    public function grave()
    {
        return $this->state(function (array $attributes) {
            return [
                'descripcion' => 'Accidente grave: ' . $this->generarDescripcionAccidente()
            ];
        });
    }

    // Estado para accidentes leves
    public function leve()
    {
        return $this->state(function (array $attributes) {
            return [
                'descripcion' => 'Accidente leve: ' . $this->generarDescripcionAccidente()
            ];
        });
    }
}
