<?php

namespace App\Console\Commands\Notifications;

use Illuminate\Console\Command;
use Carbon\Carbon;
use App\Models\ExEpo;
use App\Models\ExAlt;
use App\Models\ExPsi;
use App\Models\ExEsp;
// Agregar otros modelos de exámenes según sea necesario

class ExamenesTestCommand extends Command
{
    protected $signature = 'examenes:test {tipo?}';
    protected $description = 'Muestra los exámenes próximos a vencer por tipo (sin enviar notificaciones)';

    protected $tiposExamenes = [
        'epo' => [
            'modelo' => ExEpo::class,
            'nombre' => 'Exámenes Ocupacionales',
            'descripcion' => 'Exámenes ocupacionales y preocupacionales'
        ],
        // Agregar otros tipos según necesites
        /*
        'alt' => [
            'modelo' => ExAlt::class,
            'nombre' => 'Exámenes de Altura',
            'descripcion' => 'Exámenes de trabajo en altura'
        ],
        'psi' => [
            'modelo' => ExPsi::class,
            'nombre' => 'Exámenes Psicológicos',
            'descripcion' => 'Evaluaciones psicológicas'
        ],
        */
    ];

    public function handle()
    {
        try {
            date_default_timezone_set(config('app.timezone'));
            $now = now();
            
            $tipo = $this->argument('tipo');
            
            if ($tipo && !array_key_exists($tipo, $this->tiposExamenes)) {
                $this->error("Tipo de examen no válido. Tipos disponibles: " . implode(', ', array_keys($this->tiposExamenes)));
                return;
            }

            $tiposAProcesar = $tipo ? [$tipo => $this->tiposExamenes[$tipo]] : $this->tiposExamenes;

            foreach ($tiposAProcesar as $tipoKey => $tipoInfo) {
                $this->procesarTipoExamen($tipoKey, $tipoInfo, $now);
            }

        } catch (\Exception $e) {
            $this->error('Error al ejecutar el comando: ' . $e->getMessage());
        }
    }

    protected function procesarTipoExamen($tipo, $tipoInfo, $now)
    {
        $this->info("\n" . str_repeat('=', 50));
        $this->info($tipoInfo['nombre']);
        $this->info(str_repeat('=', 50));

        // Definir rango de fechas
        $fechaObjetivoIni = $now->copy()->subMonths(1);
        $fechaObjetivoTer = $now->copy()->addMonths(12);

        $this->info('Rango de búsqueda:');
        $this->info('Desde: ' . $fechaObjetivoIni->format('d-m-Y'));
        $this->info('Hasta: ' . $fechaObjetivoTer->format('d-m-Y'));
        $this->line('----------------------------------------');

        // Obtener exámenes
        $examenes = $tipoInfo['modelo']::whereBetween('fecha_vencimiento', [$fechaObjetivoIni, $fechaObjetivoTer])
            ->whereHas('paciente', function ($query) {
                $query->where('activo', 1);
            })
            ->with('paciente')
            ->get();

        if ($examenes->isEmpty()) {
            $this->warn("No se encontraron {$tipoInfo['nombre']} para notificar en este período.");
            return;
        }

        // Agrupar exámenes por paciente
        $examenesPorPaciente = $examenes->groupBy('paciente.email');

        // Mostrar resultados
        foreach ($examenesPorPaciente as $email => $examenesDelPaciente) {
            $this->info("\nNotificaciones para: " . ($email ?: 'Sin email'));
            
            $headers = ['RUT', 'Nombre', 'Apellidos', 'Vencimiento', 'N° Solicitud'];
            $rows = [];

            foreach ($examenesDelPaciente as $examen) {
                $rows[] = [
                    $examen->paciente->rut,
                    $examen->paciente->nombre,
                    $examen->paciente->apellidos,
                    Carbon::parse($examen->fecha_vencimiento)->format('d-m-Y'),
                    $examen->numero_solicitud ?? 'N/A'
                ];
            }

            $this->table($headers, $rows);
        }

        $this->info("\nTotal de {$tipoInfo['nombre']} encontrados: " . $examenes->count());
    }
}
