<?php

namespace Database\Seeders;

use App\Models\Paciente;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ActualizarFechasProximoControlSeeder extends Seeder
{
    public function run()
    {
        // Tablas de exámenes a actualizar
        $tablasExamenes = [
            'examen_pvmoal',
            'examen_pvmohn',
            'examen_pvmom',
            'examen_pvmor',
            'examen_pvmos',
            'examen_pvmosol',
        ];

        // Obtener paciente activos
        $paciente = Paciente::where('activo', true)->get();

        // Fecha actual y límite para próximo control
        $fechaActual = now();
        $fechaLimite = $fechaActual->copy()->addMonths(2);

        // Limpiar registros existentes en todas las tablas
        foreach ($tablasExamenes as $tabla) {
            DB::table($tabla)->truncate();
        }

        // Generar un registro por paciente para cada tabla de examen
        foreach ($paciente as $paciente) {
            foreach ($tablasExamenes as $tabla) {
                // Generar una fecha de próximo control aleatoria dentro del rango
                $fechaProximoControl = $this->generarFechaProximoControl($fechaActual, $fechaLimite);

                // Datos base para la inserción
                $datosComunes = [
                    'paciente_id' => $paciente->id,
                    'fecha_prox_control' => $fechaProximoControl,
                    'created_at' => $fechaActual,
                    'updated_at' => $fechaActual,
                    'estado_examen' => $this->generarEstadoExamen(),
                ];

                // Datos específicos por tabla
                $datosEspecificos = [
                    'examen_pvmoal' => [
                        'idpgp' => $this->generarIdPgp($paciente->id, $tabla),
                        'fecha_ingreso' => $fechaActual,
                    ],
                    'examen_pvmohn' => [
                        'idpgp' => $this->generarIdPgp($paciente->id, $tabla),
                        'fecha_ingreso' => $fechaActual,
                    ],
                    'examen_pvmom' => [
                        'idpgp' => $this->generarIdPgp($paciente->id, $tabla),
                        'fecha_ingreso' => $fechaActual,
                    ],
                    'examen_pvmor' => [
                        'fecha_ingreso' => $fechaActual,
                    ],
                    'examen_pvmos' => [
                        'idpgp' => $this->generarIdPgp($paciente->id, $tabla),
                        'fecha_ingreso' => $fechaActual,
                    ],
                    'examen_pvmosol' => [
                        'idpgp' => $this->generarIdPgp($paciente->id, $tabla),
                        'fecha_ingreso' => $fechaActual,
                    ],
                ];

                // Combinar datos
                $datosInsercion = array_merge(
                    $datosComunes,
                    $datosEspecificos[$tabla] ?? []
                );

                // Insertar en la tabla correspondiente
                DB::table($tabla)->insert($datosInsercion);
            }
        }

        // Mensaje de confirmación
        $this->command->info('Fechas de próximo control actualizadas para ' . $paciente->count() . ' paciente en ' . count($tablasExamenes) . ' tablas de exámenes.');
    }

    /**
     * Genera una fecha de próximo control aleatoria dentro del rango especificado
     */
    private function generarFechaProximoControl($fechaInicio, $fechaLimite)
    {
        // Generar un timestamp aleatorio entre la fecha actual y dos meses después
        $timestamp = mt_rand($fechaInicio->timestamp, $fechaLimite->timestamp);
        return Carbon::createFromTimestamp($timestamp);
    }

    /**
     * Genera un estado de examen aleatorio
     */
    private function generarEstadoExamen()
    {
        // Estados de examen: 1 (pendiente), 2 (en proceso), 3 (completado)
        return rand(1, 3);
    }

    /**
     * Genera un ID PGP único para el registro de examen
     */
    private function generarIdPgp($pacienteId, $tabla)
    {
        // Generar un ID PGP basado en el ID del paciente, la tabla y un número aleatorio
        return $tabla . '_' . $pacienteId . '_' . uniqid();
    }
}
