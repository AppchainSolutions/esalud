<?php

namespace Database\Factories;

use App\Models\ExMetal;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class ExMetalFactory extends Factory
{
    protected $model = ExMetal::class;

    public function definition(): array
    {
        $fechaIngreso = $this->faker->dateTimeBetween('-2 years', 'now');
        $fechaUltControl = clone $fechaIngreso;
        $fechaUltControl->modify('-' . $this->faker->numberBetween(1, 12) . ' months');
        $fechaControl = clone $fechaIngreso;
        $fechaControl->modify('+' . $this->faker->numberBetween(1, 6) . ' months');
        $fechaProxControl = clone $fechaControl;
        $fechaProxControl->modify('+' . $this->faker->numberBetween(3, 12) . ' months');

        return [
            'paciente_id' => $this->faker->numberBetween(1, 100),
            'idpgp' => $this->generarIdPgp(),
            'estado_examen' => $this->generarEstadoExamen(),
            'fecha_control' => $fechaControl,
            'fecha_ingreso' => $fechaIngreso,
            'fecha_prox_control' => $fechaProxControl,
            'fecha_ult_control' => $fechaUltControl,
            'comentario' => $this->generarComentario($fechaIngreso, $fechaControl)
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
            'Programado',
            'En Seguimiento'
        ];

        return $this->faker->randomElement($estados);
    }

    // Método para generar comentarios contextualizados
    private function generarComentario(\DateTime $fechaIngreso, \DateTime $fechaControl): ?string
    {
        $tiposComentarios = [
            // Resultados generales
            'Evaluación de exposición a metales pesados',
            'Monitoreo de riesgos ocupacionales',
            'Control de niveles de metales en sangre',
            
            // Observaciones
            'Sin hallazgos significativos',
            'Niveles leves de exposición detectados',
            'Requiere seguimiento médico',
            
            // Recomendaciones
            'Medidas de protección recomendadas',
            'Valoración de riesgo ocupacional',
            'Necesidad de intervención preventiva'
        ];

        $detallesAdicionales = [
            'Última actualización: ' . $this->faker->dateTimeBetween('-6 months', 'now')->format('d/m/Y'),
            'Profesional a cargo: Dr(a). ' . $this->faker->name(),
            'Próximo control: ' . $fechaControl->format('d/m/Y'),
            'Metal detectado: ' . $this->generarMetalDetectado(),
            'Nivel de exposición: ' . $this->generarNivelExposicion()
        ];

        $comentario = $this->faker->randomElement($tiposComentarios);
        
        // Añadir detalles adicionales con 50% de probabilidad
        if ($this->faker->boolean(50)) {
            $comentario .= '. ' . $this->faker->randomElement($detallesAdicionales);
        }

        return $comentario;
    }

    // Método para generar metales detectados
    private function generarMetalDetectado(): string
    {
        $metales = [
            'Plomo',
            'Mercurio',
            'Cadmio',
            'Arsénico',
            'Cromo',
            'Níquel',
            'Aluminio',
            'Berilio'
        ];

        return $this->faker->randomElement($metales);
    }

    // Método para generar niveles de exposición
    private function generarNivelExposicion(): string
    {
        $nivelesExposicion = [
            'Bajo',
            'Moderado',
            'Alto',
            'Crítico'
        ];

        return $this->faker->randomElement($nivelesExposicion);
    }

    // Estado para exámenes pendientes
    public function pendiente()
    {
        return $this->state(function (array $attributes) {
            return [
                'estado_examen' => 'Pendiente',
                'comentario' => 'Examen de exposición a metales pesados pendiente de realización'
            ];
        });
    }

    // Estado para exámenes completados
    public function completado()
    {
        return $this->state(function (array $attributes) {
            return [
                'estado_examen' => 'Realizado',
                'comentario' => 'Examen de exposición a metales pesados completado satisfactoriamente'
            ];
        });
    }

    // Estado para exámenes con exposición detectada
    public function exposicionDetectada()
    {
        return $this->state(function (array $attributes) {
            return [
                'estado_examen' => 'En Seguimiento',
                'comentario' => 'Exposición a metales pesados detectada. Requiere monitoreo y medidas preventivas.'
            ];
        });
    }

    // Estado para exámenes de alto riesgo
    public function altoRiesgo()
    {
        return $this->state(function (array $attributes) {
            return [
                'estado_examen' => 'En Seguimiento',
                'comentario' => 'Alto riesgo de exposición a metales pesados. Requiere intervención inmediata y plan de mitigación.'
            ];
        });
    }

    // Estado para exámenes de trabajadores en ambientes industriales
    public function ambienteIndustrial()
    {
        return $this->state(function (array $attributes) {
            return [
                'comentario' => 'Evaluación de exposición en ambiente industrial. Control exhaustivo de riesgos ocupacionales.'
            ];
        });
    }
}
