<?php

namespace Database\Factories;

use App\Models\Nacionalidad;
use Illuminate\Database\Eloquent\Factories\Factory;

class NacionalidadFactory extends Factory
{
    protected $model = Nacionalidad::class;

    public function definition()
    {
        return [
            'descripcion' => $this->faker->country,
        ];
    }
}
