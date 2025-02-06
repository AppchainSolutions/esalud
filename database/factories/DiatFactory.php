<?php

namespace Database\Factories;

use App\Models\Diat;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class DiatFactory extends Factory
{
    protected $model = Diat::class;

    public function definition(): array
    {
        $fechaAdmision = $this->faker->dateTimeBetween('-2 years', 'now');

        return [
            'paciente_id' => $this->faker->numberBetween(1, 100),
            'idpgp' => $this->generarIdPgp(),
            'accidente' => $this->faker->optional()->numberBetween(1, 50),
            'seguro_salud' => $this->faker->numberBetween(1, 5),
            'estado_diat' => $this->faker->numberBetween(1, 6),
            'fecha_admision' => $fechaAdmision,
            'folio' => $this->generarFolio(),
            'numero_resolucion' => $this->generarNumeroResolucion(),
            'origen_denuncia' => $this->generarOrigenDenuncia(),
            'sucursal' => $this->faker->randomElement([
                'Santiago', 'Valparaíso', 'Concepción', 
                'Antofagasta', 'Viña del Mar', 'La Serena'
            ]),
            'tipo_accidente' => $this->faker->numberBetween(1, 5),
            'validado_por' => $this->faker->name(),
            'comentario' => $this->faker->optional()->sentence(5)
        ];
    }

    // Método para generar ID PGP único
    private function generarIdPgp(): int
    {
        return $this->faker->unique()->numberBetween(100000, 999999);
    }

    // Método para generar folio único
    private function generarFolio(): int
    {
        return $this->faker->unique()->numberBetween(1000, 9999);
    }

    // Método para generar número de resolución
    private function generarNumeroResolucion(): ?int
    {
        return $this->faker->boolean(70) 
            ? $this->faker->unique()->numberBetween(1000, 9999)
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

    // Estado para DIATs en revisión
    public function enRevision()
    {
        return $this->state(function (array $attributes) {
            return [
                'estado_diat' => 2,
                'comentario' => 'Documento pendiente de validación'
            ];
        });
    }

    // Estado para DIATs validados
    public function validado()
    {
        return $this->state(function (array $attributes) {
            return [
                'estado_diat' => 3,
                'numero_resolucion' => $this->generarNumeroResolucion(),
                'comentario' => 'Documento validado correctamente'
            ];
        });
    }

    // Estado para DIATs rechazados
    public function rechazado()
    {
        return $this->state(function (array $attributes) {
            return [
                'estado_diat' => 4,
                'comentario' => 'Documento rechazado por inconsistencias'
            ];
        });
    }
}
