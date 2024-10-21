<?php

namespace Database\Factories;

use App\Models\EstadosCiviles;
use Illuminate\Database\Eloquent\Factories\Factory;

class EstadosCivilesFactory extends Factory
{
    protected $model = EstadosCiviles::class;

    public function definition()
    {
        return [
            'descripcion' => $this->faker->word,
        ];
    }
}
