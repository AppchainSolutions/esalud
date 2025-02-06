<?php

namespace Database\Factories;

use App\Models\Alergia;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Alergia>
 */
class AlergiaFactory extends Factory
{
    protected $model = Alergia::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'paciente_id' => $this->faker->numberBetween(1, 100),
            'comentario' => $this->faker->optional()->sentence(),
            'alergia' => $this->faker->randomElement([
                'Penicilina',
                'Látex',
                'Maní',
                'Polen',
                'Polvo',
                'Mariscos',
                'Huevo',
                'Leche',
                'Aspirina',
                'Picadura de abeja'
            ])
        ];
    }

    // Estado para alergias graves
    public function grave()
    {
        return $this->state(function (array $attributes) {
            return [
                'comentario' => 'Alergia grave: ' . $this->faker->sentence()
            ];
        });
    }

    // Estado para alergias leves
    public function leve()
    {
        return $this->state(function (array $attributes) {
            return [
                'comentario' => 'Alergia leve: ' . $this->faker->sentence()
            ];
        });
    }
}
