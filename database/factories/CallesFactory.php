<?php

namespace Database\Factories;

use App\Models\Calles;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Afp>
 */
class CallesFactory extends Factory
{
    protected $model = Calles::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'descripcion' => $this->faker->streetAddress(),
        ];
    }
}
