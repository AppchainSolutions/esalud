<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Services\NotificacionService;

class EnviarNotificacionesVencimiento extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'notificaciones:vencimiento 
                            {--R|reintentar : Reintentar notificaciones fallidas}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Enviar notificaciones de exámenes próximos a vencer';

    /**
     * Servicio de notificaciones
     *
     * @var NotificacionService
     */
    protected $notificacionService;

    /**
     * Create a new command instance.
     *
     * @param NotificacionService $notificacionService
     */
    public function __construct(NotificacionService $notificacionService)
    {
        parent::__construct();
        $this->notificacionService = $notificacionService;
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        if ($this->option('reintentar')) {
            $this->info('Reintentando notificaciones fallidas...');
            $this->notificacionService->reintentarNotificacionesFallidas();
            $this->info('Reintentos completados.');
            return 0;
        }

        $this->info('Generando notificaciones de exámenes próximos a vencer...');
        $this->notificacionService->generarNotificacionesVencimiento();
        $this->info('Notificaciones generadas exitosamente.');

        return 0;
    }
}
