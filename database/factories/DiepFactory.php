<?php

namespace Database\Factories;

use App\Models\Diep;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class DiepFactory extends Factory
{
    protected $model = Diep::class;

    public function definition(): array
    {
        $fechaAdmision = $this->faker->dateTimeBetween('-2 years', 'now');

        return [
            'paciente_id' => $this->faker->numberBetween(1, 100),
            'idpgp' => $this->generarIdPgp(),
            'enfermedad' => $this->generarEnfermedad(),
            'seguro_salud' => $this->faker->numberBetween(1, 5),
            'estado_diep' => $this->generarEstadoDiep(),
            'fecha_admision' => $fechaAdmision,
            'folio' => $this->generarFolio(),
            'numero_resolucion' => $this->generarNumeroResolucion(),
            'origen_denuncia' => $this->generarOrigenDenuncia(),
            'sucursal' => $this->faker->randomElement([
                'Santiago', 'Valparaíso', 'Concepción', 
                'Antofagasta', 'Viña del Mar', 'La Serena'
            ]),
            'tipo_enfermedad' => $this->faker->numberBetween(1, 5),
            'validado_por' => $this->faker->name(),
            'comentario' => $this->faker->optional()->sentence(5)
        ];
    }

    // Método para generar ID PGP único
    private function generarIdPgp(): string
    {
        return strtoupper(substr(md5(uniqid()), 0, 10));
    }

    // Método para generar enfermedades profesionales
    private function generarEnfermedad(): string
    {
        $enfermedades = [
            'Síndrome del túnel carpiano',
            'Tendinitis',
            'Epicondilitis',
            'Lumbalgia ocupacional',
            'Hernias discales',
            'Estrés laboral',
            'Pérdida auditiva',
            'Dermatitis ocupacional',
            'Asma ocupacional',
            'Silicosis',
            'Burnout',
            'Problemas respiratorios',
            'Lesiones por movimientos repetitivos',
            'Problemas visuales ocupacionales'
        ];

        return $this->faker->randomElement($enfermedades);
    }

    // Método para generar estados de DIEP
    private function generarEstadoDiep(): string
    {
        $estados = [
            'Ingresado',
            'En Revisión',
            'Validado',
            'Rechazado',
            'Pendiente',
            'Cerrado'
        ];

        return $this->faker->randomElement($estados);
    }

    // Método para generar folio único
    private function generarFolio(): string
    {
        return 'DIEP-' . date('Y') . '-' . $this->faker->unique()->numberBetween(1000, 9999);
    }

    // Método para generar número de resolución
    private function generarNumeroResolucion(): ?string
    {
        return $this->faker->boolean(70) 
            ? 'RES-' . $this->faker->unique()->numberBetween(1000, 9999) 
            : null;
    }

    // Método para generar origen de denuncia
    private function generarOrigenDenuncia(): string
    {
        $origenes = [
            'Empleador',
            'Trabajador',
            'Mutual',
            'Supervisor',
            'Recursos Humanos',
            'Servicio Médico'
        ];

        return $this->faker->randomElement($origenes);
    }

    // Estado para DIEPs en revisión
    public function enRevision()
    {
        return $this->state(function (array $attributes) {
            return [
                'estado_diep' => 'En Revisión',
                'comentario' => 'Documento pendiente de validación'
            ];
        });
    }

    // Estado para DIEPs validados
    public function validado()
    {
        return $this->state(function (array $attributes) {
            return [
                'estado_diep' => 'Validado',
                'numero_resolucion' => $this->generarNumeroResolucion(),
                'comentario' => 'Documento validado correctamente'
            ];
        });
    }

    // Estado para DIEPs rechazados
    public function rechazado()
    {
        return $this->state(function (array $attributes) {
            return [
                'estado_diep' => 'Rechazado',
                'comentario' => 'Documento rechazado por inconsistencias'
            ];
        });
    }

    // Estado para enfermedades profesionales graves
    public function enfermedadGrave()
    {
        return $this->state(function (array $attributes) {
            $enfermedadesGraves = [
                'Silicosis avanzada',
                'Asbestosis',
                'Cáncer ocupacional',
                'Intoxicación crónica',
                'Pérdida auditiva severa'
            ];

            return [
                'enfermedad' => $this->faker->randomElement($enfermedadesGraves),
                'estado_diep' => 'Urgente',
                'comentario' => 'Enfermedad profesional de alta gravedad'
            ];
        });
    }
}
