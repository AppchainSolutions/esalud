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

   
// Enhanced email validation function
private function isValidEmail($email)
{
    $notificationEmails = env('NOTIFICATION_EMAILS', '');
    
    $correos = array_filter(explode(',', $notificationEmails), function ($correo) {
        $trimmedEmail = trim($correo);
        $isValid = $this->isValidEmail($trimmedEmail);
        
        // Detailed logging for each email
        Log::info('Email Validation', [
            'original' => $correo,
            'trimmed' => $trimmedEmail,
            'is_valid' => $isValid ? 'Yes' : 'No'
        ]);

        return $isValid;
    });

    // Logging and debugging
    $this->info('Total Valid Emails Found: ' . count($correos));
    $this->info('Validated Emails: ' . implode(', ', $correos));

    // Trim the email and convert to lowercase
    $email = trim(strtolower($email));
    
    // First, use PHP's built-in filter
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return false;
    }
    
    // Additional checks
    $disallowedDomains = ['example.com', 'test.com'];
    $domain = substr(strrchr($email, "@"), 1);
    
    // Check against disallowed domains
    if (in_array($domain, $disallowedDomains)) {
        return false;
    }
    
    // Optional: DNS validation (uncomment if needed)
    // return checkdnsrr($domain, 'MX');
    
    return true;
}

    public function handle()
    {
        // Obtener algunos exámenes de prueba
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

        if ($examenes->isEmpty()) {
            $this->error('No hay exámenes para probar.');
            return;
        }

        $data = $examenes->map(function ($examen) {
            return [
                'nombre' => $examen->paciente->nombre,
                'apellidos' => $examen->paciente->apellidos,
                'rut' => $examen->paciente->rut,
                'fecha_vencimiento' => $examen->fecha_vencimiento,
                'bateria' => $examen->bateria->descripcion,
                'numero_solicitud' => $examen->numero_solicitud,
                'protocolo_minsal' => $examen->paciente->protocolo_minsal,
                'activo' => $examen->paciente->activo
            ];
        });

        $notificationEmails = env('NOTIFICATION_EMAILS', '');

        $correos = array_filter(explode(',', $notificationEmails), function ($correo) {
            return filter_var(trim($correo), FILTER_VALIDATE_EMAIL);
        });

        // Logging for debugging
        Log::info('Notification Emails:', ['emails' => $correos]);

        if (!empty($correos)) {
            try {
                Mail::to(array_shift($correos))
                    ->cc($correos)
                    ->send(new ExEpoMail($data, $range, $title));

                $this->info('Emails sent successfully');
                Log::info('Emails sent successfully');
            } catch (\Exception $e) {
                $this->error('Email sending failed: ' . $e->getMessage());
                Log::error('Email sending error: ' . $e->getMessage());
            }
        } else {
            $this->error('No valid email addresses found');
            Log::error('No valid email addresses found');
        }
    }
}
