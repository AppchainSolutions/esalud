<?php

namespace Database\Factories;

use App\Models\GrupoSanguineo;
use Illuminate\Database\Eloquent\Factories\Factory;

class GrupoSanguineoFactory extends Factory
{
    protected $model = GrupoSanguineo::class;

    public function definition()
    {
        return [
            'descripcion' => $this->faker->randomElement(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
        ];
    }
}