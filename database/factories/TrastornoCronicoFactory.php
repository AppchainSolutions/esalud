<?php

namespace Database\Factories;

use App\Models\TrastornoCronico;
use Illuminate\Database\Eloquent\Factories\Factory;

class TrastornoCronicoFactory extends Factory
{
    protected $model = TrastornoCronico::class;

    public function definition()
    {
        return [
            'descripcion' => $this->faker->word,
        ];
    }
}
