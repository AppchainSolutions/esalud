<?php

namespace Database\Factories;

use App\Models\Certificacion;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class CertificacionFactory extends Factory
{
    protected $model = Certificacion::class;

    public function definition(): array
    {
        $fechaCertificacion = $this->faker->dateTimeBetween('-2 years', 'now');
        $fechaCaducidad = Carbon::instance($fechaCertificacion)->addMonths($this->generarVigencia());

        return [
            'paciente_id' => $this->faker->numberBetween(1, 100),
            'certificacion' => $this->generarCertificacion(),
            'tipo_certificacion' => $this->faker->numberBetween(1, 5),
            'fecha_certificacion' => $fechaCertificacion,
            'fecha_caducidad' => $fechaCaducidad
        ];
    }

    // Método para generar certificaciones realistas
    private function generarCertificacion(): string
    {
        $certificaciones = [
            'Aptitud Médica Laboral',
            'Examen Ocupacional Completo',
            'Certificado de Salud Mental',
            'Evaluación Ergonómica',
            'Certificado de No Impedimento',
            'Evaluación de Riesgo Psicosocial',
            'Certificado de Salud Cardiovascular',
            'Evaluación de Capacidad Física',
            'Certificado de Salud Respiratoria',
            'Evaluación de Capacidad Visual'
        ];

        return $this->faker->randomElement($certificaciones);
    }

    // Método para generar vigencia de certificación
    private function generarVigencia(): int
    {
        $vigencias = [6, 12, 18, 24];
        return $this->faker->randomElement($vigencias);
    }

    // Estado para certificaciones vigentes
    public function vigente()
    {
        return $this->state(function (array $attributes) {
            $fechaCertificacion = now();
            $fechaCaducidad = $fechaCertificacion->copy()->addMonths(12);

            return [
                'fecha_certificacion' => $fechaCertificacion,
                'fecha_caducidad' => $fechaCaducidad
            ];
        });
    }

    // Estado para certificaciones próximas a caducar
    public function proximoACaducar()
    {
        return $this->state(function (array $attributes) {
            $fechaCertificacion = now()->subMonths(10);
            $fechaCaducidad = now()->addMonths(2);

            return [
                'fecha_certificacion' => $fechaCertificacion,
                'fecha_caducidad' => $fechaCaducidad
            ];
        });
    }

    // Estado para certificaciones caducadas
    public function caducada()
    {
        return $this->state(function (array $attributes) {
            $fechaCertificacion = now()->subMonths(18);
            $fechaCaducidad = now()->subMonths(6);

            return [
                'fecha_certificacion' => $fechaCertificacion,
                'fecha_caducidad' => $fechaCaducidad
            ];
        });
    }
}
