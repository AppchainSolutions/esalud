<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\EstablecimientosEducacionales;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\EstablecimientosEducacionales>
 */
class EstablecimientosEducacionalesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'descripcion' => $this->faker->company,
        ];
    }
}
