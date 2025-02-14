<?php

namespace Database\Factories;

use App\Models\EstadoExamen;
use App\Models\ExPVTMERT;
use App\Models\Paciente;
use Illuminate\Database\Eloquent\Factories\Factory;

class ExPVTMERTFactory extends Factory
{
    protected $model = ExPVTMERT::class;

    public function definition(): array
    {
        $estadoExamen = EstadoExamen::count() > 0
        ? EstadoExamen::inRandomOrder()->first()->id
        : EstadoExamen::create(['descripcion' => 'Pendiente'])->id;

        return [
            'paciente_id' => Paciente::factory(),
            'fecha_prox_control' => now()->addMonths(1),
            'fecha_ult_control' => now()->subMonths(1),
            'idpgp' => strtoupper(substr(md5(uniqid()), 0, 10)),
            'estado_examen' => $estadoExamen,
            'comentario' => $this->faker->sentence(),
            'nordico' => $this->faker->sentence(),
            'quickdash' => $this->faker->sentence(),
            'derivacion' => $this->faker->sentence(),
            'comentario' => $this->faker->sentence(),
            'fecha_examen' => $this->faker->dateTime(),
            'fecha_control' => $this->faker->dateTime(),
            'fecha_ingreso' => $this->faker->dateTime(),
        ];
    }

    public function realizado()
    {
        return $this->state(fn(array $attributes) => [
            'estado_examen' => EstadoExamen::where('descripcion', 'Realizado')->first()->id,
        ]);
    }

    public function pendiente()
    {
        return $this->state(fn(array $attributes) => [
            'estado_examen' => EstadoExamen::where('descripcion', 'Pendiente')->first()->id,
        ]);
    }

    public function proximoAVencer()
    {
        return $this->state(fn(array $attributes) => [
            'fecha_prox_control' => now()->addMonths(1)->addWeeks(2),
            'estado_examen' => EstadoExamen::where('descripcion', 'Pendiente')->first()->id,
        ]);
    }
}
