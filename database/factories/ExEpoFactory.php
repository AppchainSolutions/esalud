<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Paciente;
use App\Models\TipoExamen;
use App\Models\Semaforo;
use App\Models\EstadoEpo;
use App\Models\ExEpo;
use App\Models\Bateria;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ExEpoFactory extends Factory
{
    protected $model = ExEpo::class;

    public function definition(): array
    {

/*         TipoExamen::Truncate();
        Semaforo::Truncate();
        EstadoEpo::Truncate();
        Bateria::Truncate(); */
        ExEpo::Truncate();

        TipoExamen::factory()->create();
        Semaforo::factory()->create();
        EstadoEpo::factory()->create();
        Bateria::factory()->create();

        // Fecha de hoy
        $startDate = now(); // o puedes usar $faker->dateTimeThisYear();

        // Fecha un año más adelante
        $endDate = now()->addMonths(3);

        // Generar fechas aleatorias dentro del rango
        $randomDate = $this->faker->dateTimeBetween($startDate, $endDate);

        return [
            'paciente_id' => Paciente::inRandomOrder()->first()->id,
            'comentario' => $this->faker->word,
            'fecha_realizacion' => $this->faker->date(),
            'fecha_recepcion' => $this->faker->date(),
            'fecha_solicitud' => $this->faker->date(),
            'fecha_vencimiento' => $randomDate,
            'numero_solicitud' => $this->faker->numberBetween(1000, 9999),
            'resultado' => $this->faker->word,
            'tipo_examen' => TipoExamen::inRandomOrder()->first()->id,
            'semaforo' => Semaforo::inRandomOrder()->first()->id,
            'estado_epo' => EstadoEPO::inRandomOrder()->first()->id,
            'bateria' => Bateria::inRandomOrder()->first()->id,
            'codigo_verificacion' => $this->faker->numberBetween(1000, 9999),
        ];
    }
}
