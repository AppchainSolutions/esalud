<?php

namespace Database\Factories;

use App\Models\Nacionalidades;
use Illuminate\Database\Eloquent\Factories\Factory;

class NacionalidadesFactory extends Factory
{
    protected $model = Nacionalidades::class;

    public function definition()
    {
        return [
            'descripcion' => $this->faker->country,
        ];
    }
}
