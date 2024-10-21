<?php

namespace Database\Factories;

use App\Models\GruposSanguineos;
use Illuminate\Database\Eloquent\Factories\Factory;

class GruposSanguineosFactory extends Factory
{
    protected $model = GruposSanguineos::class;

    public function definition()
    {
        return [
            'descripcion' => $this->faker->bloodGroup(),
        ];
    }
}
