<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use App\Jobs\GenerarNotificacionesExamenesJob;

class ProgramarNotificacionesExamenesCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'notificaciones:programar 
                            {--dias=30 : Número de días de anticipación para notificaciones}
                            {--queue=default : Cola a utilizar para el job}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Programa un job para generar y enviar notificaciones de exámenes próximos a vencer';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $diasAnticipacion = $this->option('dias');
        $queue = $this->option('queue');

        try {
            // Crear instancia del job
            // Programar job en la cola especificada
            GenerarNotificacionesExamenesJob::dispatch($diasAnticipacion)
                ->onQueue($queue);

            $this->info("Job de notificaciones de exámenes programado exitosamente.");
            $this->info("Días de anticipación: {$diasAnticipacion}");
            $this->info("Cola utilizada: {$queue}");

            Log::info('Job de notificaciones de exámenes programado', [
                'dias_anticipacion' => $diasAnticipacion,
                'cola' => $queue
            ]);
        } catch (\Exception $e) {
            $this->error("Error al programar job de notificaciones: " . $e->getMessage());

            Log::error('Error al programar job de notificaciones de exámenes', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
        }
    }
}
