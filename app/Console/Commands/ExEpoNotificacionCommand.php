<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\ExEpo;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
use App\Mail\ExEpoMail;


class ExEpoNotificacionCommand extends Command
{
    protected $signature = 'exepo:notificacion';
    protected $description = 'Prueba el envío de notificaciones de exámenes';

  /*   public function handle()
    {
        // Obtener algunos exámenes de prueba
        $examenes = ExEpo::get()->first();
        $fechaObjetivoIni = now()->addMonth(); // Un mes en el futuro
        $fechaObjetivoTer = now()->addMonth()->addDays(14); // Un mes en el futuro
        $examenes = ExEpo::whereBetween('fecha_vencimiento', [$fechaObjetivoIni, $fechaObjetivoTer])
            ->with('paciente', 'bateria')
            ->get();
        $range = 'Vencimiento de exámenes desde ' .
            $fechaObjetivoIni->format('d-m-Y') .
            ' hasta ' .
            $fechaObjetivoTer->format('d-m-Y');
        $title = 'Vencimiento de exámenes ocupacionales y preocupacionales';

        echo ($range);

        if (!$examenes) {
            $this->error('No hay exámenes para probar.');
            return;
        } else {
            $data = $examenes->map(function ($examen) {
                return [
                    'nombre' => $examen->paciente->nombre,
                    'apellidos' => $examen->paciente->apellidos,
                    'rut' => $examen->paciente->rut,
                    'fecha_vencimiento' => $examen->fecha_vencimiento,
                    'bateria' => $examen->bateria->descripcion,
                    'email' => $examen->paciente->email,
                    'codigo_verificacion' => $examen->codigo_verificacion,
                    'numero_solicitud' => $examen->numero_solicitud,
                    'protocolo_minsal' => $examen->paciente->protocolo_minsal,
                    'activo' => $examen->paciente->activo
                ];
            });
            echo (config('app.notification_emails'));
            
            $notificationEmails = env('NOTIFICATION_EMAILS', '');
            
            $correos = array_filter(explode(',', $notificationEmails), function($correo) {
                return filter_var(trim($correo), FILTER_VALIDATE_EMAIL);
            });
            
            echo('Correos: ' . implode(',', $correos));
            
                
            
             if (!empty($correos)) {
                 Mail::to(array_shift($correos))
                     ->cc($correos)
                     ->send(new ExEpoMail($data, $range, $title));
             }
        }
    } */
    public function handle()
{
    // Manually dump all mail configuration
    Log::info('Mail Configuration Dump:', [
        'MAIL_DRIVER' => env('MAIL_DRIVER'),
        'MAIL_HOST' => env('MAIL_HOST'),
        'MAIL_PORT' => env('MAIL_PORT'),
        'MAIL_USERNAME' => env('MAIL_USERNAME') ? '***' : 'NOT SET',
        'MAIL_PASSWORD' => env('MAIL_PASSWORD') ? '***' : 'NOT SET',
        'MAIL_ENCRYPTION' => env('MAIL_ENCRYPTION'),
        'MAIL_FROM_ADDRESS' => env('MAIL_FROM_ADDRESS'),
    ]);

    // Clear and reload configuration
    \Artisan::call('config:clear');

    // Verify mail configuration
    $this->info('MAIL_HOST from env: ' . env('MAIL_HOST'));
    $this->info('MAIL_HOST from config: ' . config('mail.host'));

    // Test mail sending
    try {
        Mail::raw('Debug Email', function ($message) {
            $message->to('omar.ahumadag@gmail.com')
                    ->subject('Debug Email');
        });
        $this->info('Email sent successfully');
    } catch (\Exception $e) {
        $this->error('Email sending failed: ' . $e->getMessage());
        Log::error('Email sending error: ' . $e->getMessage());
    }
}
}
