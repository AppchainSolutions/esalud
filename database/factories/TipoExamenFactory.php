<?php

namespace Database\Factories;

use App\Models\TipoExamen;
use Illuminate\Database\Eloquent\Factories\Factory;

class TipoExamenFactory extends Factory
{
    protected $model = TipoExamen::class;

    public function definition()
    {
        return [
            'descripcion' => $this->faker->word,
        ];
    }
}
