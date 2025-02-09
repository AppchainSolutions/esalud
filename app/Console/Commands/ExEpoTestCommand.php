<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Carbon\Carbon;
use App\Models\ExEpo;

class ExEpoTestCommand extends Command
{
    protected $signature = 'exepo:test';
    protected $description = 'Muestra los exámenes EPO próximos a vencer (solo prueba, sin notificaciones)';

    public function handle()
    {
        try {
            // Configurar zona horaria
            date_default_timezone_set(config('app.timezone'));
            $now = now();

            // Obtener los exámenes a vencer
            $fechaObjetivoIni = $now->copy()->subMonths(1);
            $fechaObjetivoTer = $now->copy()->addMonths(12);

            $examenes = ExEpo::whereBetween('fecha_vencimiento', [$fechaObjetivoIni, $fechaObjetivoTer])
                ->whereHas('paciente', function ($query) {
                    $query->where('activo', 1);
                })
                ->with('paciente', 'bateria')
                ->get();

            // Mostrar el rango de fechas
            $this->info('Rango de búsqueda:');
            $this->info('Desde: ' . $fechaObjetivoIni->format('d-m-Y'));
            $this->info('Hasta: ' . $fechaObjetivoTer->format('d-m-Y'));
            $this->line('----------------------------------------');

            if ($examenes->isEmpty()) {
                $this->warn('No se encontraron exámenes para notificar en este período.');
                return;
            }

            // Mostrar los resultados en una tabla
            $headers = ['RUT', 'Nombre', 'Apellidos', 'Vencimiento', 'Batería', 'N° Solicitud', 'Protocolo'];
            $rows = [];

            foreach ($examenes as $examen) {
                $rows[] = [
                    $examen->paciente->rut,
                    $examen->paciente->nombre,
                    $examen->paciente->apellidos,
                    Carbon::parse($examen->fecha_vencimiento)->format('d-m-Y'),
                    $examen->bateria->descripcion,
                    $examen->numero_solicitud,
                    $examen->paciente->protocolo_minsal ?? 'N/A'
                ];
            }

            $this->table($headers, $rows);
            $this->info('Total de exámenes encontrados: ' . $examenes->count());

        } catch (\Exception $e) {
            $this->error('Error al ejecutar el comando: ' . $e->getMessage());
        }
    }
}
