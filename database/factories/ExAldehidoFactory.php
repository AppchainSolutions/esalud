<?php

namespace Database\Factories;

use App\Models\ExAldehido;
use App\Models\Paciente;
use App\Models\EstadoExamen;
use Illuminate\Database\Eloquent\Factories\Factory;

class ExAldehidoFactory extends Factory
{
    protected $model = ExAldehido::class;

    public function definition(): array
    {
        return [
            'paciente_id' => Paciente::factory(), 
            'fecha_prox_control'=> $this->faker->dateTimeBetween('-1 year', 'now'),
            'fecha_ult_control'=> $this->faker->dateTimeBetween('-1 year', 'now'),
            'idpgp' => strtoupper(substr(md5(uniqid()), 0, 10)),
            'estado_examen' => EstadoExamen::inRandomOrder()->first()->id, 
            'comentario' => $this->faker->sentence()
        ];
    }

    public function realizado()
    {
        return $this->state(fn (array $attributes) => [
            'estado_examen' => EstadoExamen::where('descripcion', 'Realizado')->first()->id
        ]);
    }

    public function pendiente()
    {
        return $this->state(fn (array $attributes) => [
            'estado_examen' => EstadoExamen::where('descripcion', 'Pendiente')->first()->id
        ]);
    }
}
