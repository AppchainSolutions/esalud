<?php

namespace Database\Factories;

use App\Models\ExPsico;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class ExPsicoFactory extends Factory
{
    protected $model = ExPsico::class;

    public function definition(): array
    {
        $fechaSolicitud = $this->faker->dateTimeBetween('-2 years', 'now');
        $fechaRealizacion = clone $fechaSolicitud;
        $fechaRealizacion->modify('+' . $this->faker->numberBetween(1, 15) . ' days');
        $fechaRecepcion = clone $fechaRealizacion;
        $fechaRecepcion->modify('+' . $this->faker->numberBetween(1, 10) . ' days');
        $fechaVencimiento = clone $fechaRecepcion;
        $fechaVencimiento->modify('+' . $this->faker->numberBetween(180, 365) . ' days');
        
        $diasRestantes = max(0, Carbon::now()->diffInDays($fechaVencimiento, false));

        return [
            'paciente_id' => $this->faker->numberBetween(1, 100),
            'estado_examen' => $this->generarEstadoExamen(),
            'tipo_vehiculo' => $this->generarTipoVehiculo(),
            'contraindicacion' => $this->generarContraindicacion(),
            'fecha_solicitud' => $fechaSolicitud,
            'fecha_realizacion' => $fechaRealizacion,
            'fecha_recepcion' => $fechaRecepcion,
            'fecha_vencimiento' => $fechaVencimiento,
            'dias_restantes' => $diasRestantes,
            'comentario' => $this->generarComentario($fechaSolicitud, $fechaRealizacion, $fechaVencimiento)
        ];
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
            'Aprobado',
            'No Aprobado'
        ];

        return $this->faker->randomElement($estados);
    }

    // Método para generar tipos de vehículo
    private function generarTipoVehiculo(): string
    {
        $tiposVehiculo = [
            'Automóvil',
            'Camión',
            'Bus',
            'Motocicleta',
            'Camioneta',
            'Vehículo de Transporte Público',
            'Vehículo de Emergencia',
            'Vehículo Comercial'
        ];

        return $this->faker->randomElement($tiposVehiculo);
    }

    // Método para generar contraindicaciones
    private function generarContraindicacion(): ?string
    {
        $contraindicaciones = [
            null,
            'Problemas de visión',
            'Déficit de atención',
            'Trastorno de ansiedad',
            'Epilepsia',
            'Problemas auditivos',
            'Trastorno del sueño',
            'Condición neurológica'
        ];

        return $this->faker->randomElement($contraindicaciones);
    }

    // Método para generar comentarios contextualizados
    private function generarComentario(\DateTime $fechaSolicitud, \DateTime $fechaRealizacion, \DateTime $fechaVencimiento): ?string
    {
        $tiposComentarios = [
            // Resultados generales
            'Evaluación psicológica para licencia de conducir',
            'Examen de aptitud psicológica',
            'Valoración de capacidad para conducción',
            
            // Observaciones
            'Sin limitaciones significativas',
            'Requiere seguimiento psicológico',
            'Evaluación de riesgo en conducción',
            
            // Recomendaciones
            'Apto para conducción',
            'Necesidad de intervención psicológica',
            'Seguimiento y reevaluación recomendados'
        ];

        $detallesAdicionales = [
            'Última actualización: ' . $this->faker->dateTimeBetween('-6 months', 'now')->format('d/m/Y'),
            'Profesional a cargo: Dr(a). ' . $this->faker->name(),
            'Fecha de vencimiento: ' . $fechaVencimiento->format('d/m/Y'),
            'Días restantes: ' . Carbon::now()->diffInDays($fechaVencimiento, false)
        ];

        $comentario = $this->faker->randomElement($tiposComentarios);
        
        // Añadir detalles adicionales con 50% de probabilidad
        if ($this->faker->boolean(50)) {
            $comentario .= '. ' . $this->faker->randomElement($detallesAdicionales);
        }

        return $comentario;
    }

    // Estado para exámenes pendientes
    public function pendiente()
    {
        return $this->state(function (array $attributes) {
            return [
                'estado_examen' => 'Pendiente',
                'comentario' => 'Examen psicológico pendiente de realización'
            ];
        });
    }

    // Estado para exámenes completados y aprobados
    public function aprobado()
    {
        return $this->state(function (array $attributes) {
            return [
                'estado_examen' => 'Aprobado',
                'comentario' => 'Examen psicológico completado. Apto para conducción.'
            ];
        });
    }

    // Estado para exámenes no aprobados
    public function noAprobado()
    {
        return $this->state(function (array $attributes) {
            return [
                'estado_examen' => 'No Aprobado',
                'comentario' => 'Examen psicológico no aprobado. Requiere intervención y reevaluación.'
            ];
        });
    }

    // Estado para vehículos de transporte público
    public function transportePublico()
    {
        return $this->state(function (array $attributes) {
            return [
                'tipo_vehiculo' => 'Vehículo de Transporte Público',
                'comentario' => 'Evaluación psicológica para conductor de transporte público. Requisitos especiales.'
            ];
        });
    }

    // Estado para vehículos de emergencia
    public function vehiculoEmergencia()
    {
        return $this->state(function (array $attributes) {
            return [
                'tipo_vehiculo' => 'Vehículo de Emergencia',
                'comentario' => 'Evaluación psicológica para conductor de vehículo de emergencia. Alto nivel de exigencia.'
            ];
        });
    }
}
