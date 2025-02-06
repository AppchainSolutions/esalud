<?php

namespace Database\Factories;

use App\Models\ExAldehido;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class ExAldehidosFactory extends Factory
{
    protected $model = ExAldehido::class;

    public function definition(): array
    {
        $fechaControl = $this->faker->dateTimeBetween('-2 years', 'now');

        return [
            'paciente_id' => $this->faker->numberBetween(1, 100),
            'estado_examen' => $this->generarEstadoExamen(),
            'idpgp' => $this->generarIdPgp(),
            'fecha_control' => $fechaControl,
            'resultado_examen' => $this->generarResultadoExamen(),
            'nivel_exposicion' => $this->generarNivelExposicion(),
            'comentario' => $this->generarComentario()
        ];
    }

    // Método para generar ID PGP único
    private function generarIdPgp(): string
    {
        return strtoupper(substr(md5(uniqid()), 0, 10));
    }

    // Método para generar estados de examen
    private function generarEstadoExamen(): string
    {
        $estados = [
            'Pendiente',
            'Realizado',
            'En Proceso',
            'Cancelado',
            'Programado'
        ];

        return $this->faker->randomElement($estados);
    }

    // Método para generar resultados de examen de aldehídos
    private function generarResultadoExamen(): string
    {
        $resultados = [
            'Normal',
            'Elevado',
            'Alto Riesgo',
            'Crítico',
            'Dentro de Límites'
        ];

        return $this->faker->randomElement($resultados);
    }

    // Método para generar niveles de exposición
    private function generarNivelExposicion(): string
    {
        $niveles = [
            'Bajo',
            'Moderado',
            'Alto',
            'Extremo',
            'Sin Exposición'
        ];

        return $this->faker->randomElement($niveles);
    }

    // Método para generar comentarios contextualizados
    private function generarComentario(): ?string
    {
        $tiposComentarios = [
            // Exposición
            'Exposición ocupacional detectada',
            'Sin evidencia de exposición significativa',
            'Niveles dentro de parámetros normales',

            // Riesgo
            'Riesgo potencial de exposición',
            'Requiere monitoreo continuo',
            'Medidas de protección recomendadas',

            // Seguimiento
            'Control periódico necesario',
            'Seguimiento semestral',
            'Evaluación de impacto en salud',

            // Estado general
            'Condiciones laborales seguras',
            'Necesidad de intervención preventiva',
            'Cumplimiento de normativas de seguridad'
        ];

        $detallesAdicionales = [
            'Última evaluación: ' . $this->faker->dateTimeBetween('-1 year', 'now')->format('d/m/Y'),
            'Recomendación: ' . $this->generarRecomendacion()
        ];

        $comentario = $this->faker->randomElement($tiposComentarios);

        // Añadir detalles adicionales con 50% de probabilidad
        if ($this->faker->boolean(50)) {
            $comentario .= '. ' . $this->faker->randomElement($detallesAdicionales);
        }

        return $comentario;
    }

    // Método para generar recomendaciones
    private function generarRecomendacion(): string
    {
        $recomendaciones = [
            'Uso de EPP',
            'Ventilación adecuada',
            'Monitoreo periódico',
            'Reducción de exposición',
            'Exámenes complementarios',
            'Capacitación en seguridad',
            'Rotación de personal',
            'Mejora de condiciones ambientales'
        ];

        return $this->faker->randomElement($recomendaciones);
    }

    // Estado para exámenes normales
    public function normal()
    {
        return $this->state(function (array $attributes) {
            return [
                'resultado_examen' => 'Normal',
                'nivel_exposicion' => 'Bajo',
                'estado_examen' => 'Realizado',
                'comentario' => 'Examen completado. Niveles de aldehídos dentro de parámetros normales.'
            ];
        });
    }

    // Estado para exámenes con riesgo
    public function riesgo()
    {
        return $this->state(function (array $attributes) {
            return [
                'resultado_examen' => 'Alto Riesgo',
                'nivel_exposicion' => 'Alto',
                'estado_examen' => 'Realizado',
                'comentario' => 'Niveles elevados detectados. Requiere intervención inmediata y plan de mitigación.'
            ];
        });
    }

    // Estado para exámenes en seguimiento
    public function seguimiento()
    {
        return $this->state(function (array $attributes) {
            return [
                'estado_examen' => 'Programado',
                'comentario' => 'Examen de seguimiento programado. Control de exposición a aldehídos.'
            ];
        });
    }
}
