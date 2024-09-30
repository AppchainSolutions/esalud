<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\EstablecimientoEducacional;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Afp>
 */
class EstablecimientoEducacionalFactory extends Factory
{
    protected $model = EstablecimientoEducacional::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'descripcion' => $this->faker->word,
        ];
    }
}
