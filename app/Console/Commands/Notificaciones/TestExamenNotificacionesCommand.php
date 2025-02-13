<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Services\ExamenNotificationService;
use Illuminate\Support\Facades\Log;

class TestExamenNotificacionesCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'test:examen-notificaciones 
        {--D|dry-run : Ejecutar en modo de prueba sin enviar notificaciones}
        {--d|dias=60 : Días de anticipación para notificaciones}
        {--c|config= : Configuración personalizada en formato JSON}
        {--details : Mostrar información detallada}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Probar el servicio de notificaciones de exámenes';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle(ExamenNotificationService $notificationService)
    {
        // Configuración por defecto
        $config = [];
        
        // Parsear configuración personalizada si se proporciona
        if ($this->option('config')) {
            try {
                $config = json_decode($this->option('config'), true);
                if (json_last_error() !== JSON_ERROR_NONE) {
                    $this->error('Configuración JSON inválida');
                    return 1;
                }
            } catch (\Exception $e) {
                $this->error('Error al parsear configuración: ' . $e->getMessage());
                return 1;
            }
        }

        // Establecer configuración
        if (!empty($config)) {
            $notificationService->setConfig($config);
        }

        // Modo dry run
        $dryRun = $this->option('dry-run');

        // Días de anticipación
        $diasAntelacion = (int)$this->option('dias');

        // Depuración de modelos de exámenes
        $this->info('🔍 Modelos de Exámenes:');
        $modelosExamenes = $notificationService->getModelosExamenes();
        foreach ($modelosExamenes as $modelo) {
            $this->line("  • $modelo");
            
            // Contar registros de cada modelo
            $totalRegistros = $modelo::count();
            $this->line("    - Total registros: $totalRegistros");

            // Obtener algunos registros de ejemplo
            $ejemplos = $modelo::take(3)->get();
            foreach ($ejemplos as $ejemplo) {
                $this->line("    - Ejemplo ID: {$ejemplo->id}, Fecha Próximo Control: {$ejemplo->fecha_prox_control}");
            }
        }

        // Generar notificaciones
        $this->info('🔍 Generando notificaciones de exámenes...');
        
        $notificaciones = $notificationService->generarNotificacionesVencimiento($dryRun, $diasAntelacion);

        // Mostrar resultados
        $this->info("\n📊 Resumen de Notificaciones:");
        $this->line("  • Total de notificaciones: " . $notificaciones->count());
        $this->line("  • Modo de prueba: " . ($dryRun ? 'Sí' : 'No'));
        $this->line("  • Días de anticipación: $diasAntelacion");

        // Mostrar detalles si se solicita
        if ($this->option('details')) {
            $this->info("\n📝 Detalles de Notificaciones:");
            $notificaciones->each(function($notificacion) {
                $this->line("  • Notificación ID: {$notificacion->id}");
                $this->line("    - Paciente: {$notificacion->paciente->nombre}");
                $this->line("    - Tipo de Examen: {$notificacion->tipo_examen}");
                $this->line("    - Fecha Próximo Control: {$notificacion->fecha_prox_control}");
                $this->line("    - Estado: {$notificacion->estado}");
            });
        }

        return 0;
    }
}
