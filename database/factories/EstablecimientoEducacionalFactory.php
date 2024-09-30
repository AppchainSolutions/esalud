<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\EstablecimientoEducacional;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Afp>
 */
class EstablecimientoEducacionalFactory extends Factory{

    protected $model = EstablecimientoEducacional::class;
    /**
     * Define the model's default state.
     *
     * This function is used by Laravel's Eloquent Factories to generate default data for the EstablecimientoEducacional model.
     *
     * @return array<string, mixed> The default state of the EstablecimientoEducacional model.
     *     - 'descripcion': A random word generated using Faker.
     */
    public function definition(): array
    {
        return [
            'descripcion' => $this->faker->word,
        ];
    }
}