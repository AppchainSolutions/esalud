<?php

namespace Database\Factories;

use App\Models\ExEpo;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class ExEpoFactory extends Factory
{
    protected $model = ExEpo::class;

    public function definition(): array
    {
        $fechaSolicitud = $this->faker->dateTimeBetween('-2 years', 'now');
        $fechaRecepcion = clone $fechaSolicitud;
        $fechaRecepcion->modify('+' . $this->faker->numberBetween(1, 15) . ' days');
        $fechaRealizacion = clone $fechaRecepcion;
        $fechaRealizacion->modify('+' . $this->faker->numberBetween(1, 10) . ' days');
        $fechaVencimiento = clone $fechaRealizacion;
        $fechaVencimiento->modify('+' . $this->faker->numberBetween(30, 180) . ' days');

        return [
            'paciente_id' => $this->faker->numberBetween(1, 100),
            'codigo_verificacion' => $this->generarCodigoVerificacion(),
            'comentario' => $this->generarComentario(),
            'estado_epo' => $this->faker->numberBetween(1, 5),
            'fecha_realizacion' => $fechaRealizacion,
            'fecha_recepcion' => $fechaRecepcion,
            'fecha_solicitud' => $fechaSolicitud,
            'fecha_vencimiento' => $fechaVencimiento,
            'bateria_id' => $this->faker->numberBetween(1, 10),
            'numero_solicitud' => $this->generarNumeroSolicitud(),
            'resultado' => $this->generarResultado(),
            'semaforo' => $this->faker->numberBetween(1, 3),
            'tipo_examen' => $this->faker->numberBetween(1, 5)
        ];
    }

    // Método para generar código de verificación único
    private function generarCodigoVerificacion(): string
    {
        return strtoupper(substr(md5(uniqid()), 0, 8));
    }

    // Método para generar comentarios contextualizados
    private function generarComentario(): ?string
    {
        $tiposComentarios = [
            // Estados generales
            'Examen programado',
            'Examen en proceso',
            'Examen completado',
            
            // Resultados
            'Resultados pendientes de revisión',
            'Resultados en análisis',
            'Requiere seguimiento',
            
            // Observaciones
            'Sin observaciones significativas',
            'Observaciones menores detectadas',
            'Requiere atención adicional'
        ];

        $detallesAdicionales = [
            'Última actualización: ' . $this->faker->dateTimeBetween('-6 months', 'now')->format('d/m/Y'),
            'Profesional a cargo: Dr(a). ' . $this->faker->name()
        ];

        $comentario = $this->faker->randomElement($tiposComentarios);
        
        // Añadir detalles adicionales con 50% de probabilidad
        if ($this->faker->boolean(50)) {
            $comentario .= '. ' . $this->faker->randomElement($detallesAdicionales);
        }

        return $comentario;
    }

    // Método para generar número de solicitud único
    private function generarNumeroSolicitud(): string
    {
        return 'EPO-' . date('Y') . '-' . $this->faker->unique()->numberBetween(1000, 9999);
    }

    // Método para generar resultados de examen
    private function generarResultado(): ?string
    {
        $resultados = [
            'Normal',
            'Alterado',
            'Con Observaciones',
            'Requiere Seguimiento',
            null
        ];

        return $this->faker->randomElement($resultados);
    }

    // Estado para exámenes pendientes
    public function pendiente()
    {
        return $this->state(function (array $attributes) {
            return [
                'estado_epo' => 1, // Suponiendo que 1 es estado pendiente
                'resultado' => null,
                'comentario' => 'Examen pendiente de realización'
            ];
        });
    }

    // Estado para exámenes completados
    public function completado()
    {
        return $this->state(function (array $attributes) {
            return [
                'estado_epo' => 3, // Suponiendo que 3 es estado completado
                'resultado' => $this->generarResultado() ?? 'Normal',
                'comentario' => 'Examen completado satisfactoriamente'
            ];
        });
    }

    // Estado para exámenes con observaciones
    public function conObservaciones()
    {
        return $this->state(function (array $attributes) {
            return [
                'estado_epo' => 4, // Suponiendo que 4 es estado con observaciones
                'resultado' => 'Con Observaciones',
                'comentario' => 'Se detectaron observaciones que requieren seguimiento',
                'semaforo' => 2 // Suponiendo que 2 es semáforo amarillo
            ];
        });
    }

    // Estado para exámenes críticos
    public function critico()
    {
        return $this->state(function (array $attributes) {
            return [
                'estado_epo' => 5, // Suponiendo que 5 es estado crítico
                'resultado' => 'Alterado',
                'comentario' => 'Resultado crítico. Requiere atención médica inmediata',
                'semaforo' => 3 // Suponiendo que 3 es semáforo rojo
            ];
        });
    }
}
