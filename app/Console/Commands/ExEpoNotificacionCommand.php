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
        // Explicitly set timezone
        date_default_timezone_set(config('app.timezone'));

        $now = now();
        $environment = app()->environment();
        $timestamp = $now->toDateTimeString();
        $timezone = config('app.timezone');
        $dayOfWeek = $now->dayOfWeek;
        $dayName = $now->englishDayOfWeek;
        $serverTime = date('Y-m-d H:i:s');
        $phpVersion = phpversion();
        $currentTimeCarbon = $now->format('Y-m-d H:i:s T');
        $currentTimePhp = date('Y-m-d H:i:s T');

        Log::info('ExEpo Notification Job Execution Details', compact(
            'environment', 'timestamp', 'timezone', 'dayOfWeek', 'dayName', 
            'serverTime', 'phpVersion', 'currentTimeCarbon', 'currentTimePhp'
        ));

        Log::info('ExEpo Notification Execution Context', [
            'current_time' => $currentTimeCarbon,
            'day_of_week' => $dayName,
            'is_monday' => $now->isMonday(),
            'is_expected_time' => $this->isExpectedExecutionTime(),
        ]);

        // Detailed execution logging
        Log::channel('daily')->info('ExEpo Notification Job Started', compact('timestamp', 'environment'));

        try {
            // Your existing job logic

            Log::channel('daily')->info('ExEpo Notification Job Completed Successfully');
        } catch (\Exception $e) {
            Log::channel('daily')->error('ExEpo Notification Job Failed', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
        }

        // Obtener algunos exámenes de prueba
        $fechaObjetivoIni = $now->copy()->addMonth(); // Un mes en el futuro
        $fechaObjetivoTer = $fechaObjetivoIni->copy()->addDays(14); // Un mes en el futuro

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

        $data = $examenes->map(fn($examen) => [
            'nombre' => $examen->paciente->nombre,
            'apellidos' => $examen->paciente->apellidos,
            'rut' => $examen->paciente->rut,
            'fecha_vencimiento' => $examen->fecha_vencimiento,
            'bateria' => $examen->bateria->descripcion,
            'numero_solicitud' => $examen->numero_solicitud,
            'protocolo_minsal' => $examen->paciente->protocolo_minsal,
            'activo' => $examen->paciente->activo
        ]);

        $notificationEmails = env('NOTIFICATION_EMAILS', '');
        $correos = array_filter(explode(',', $notificationEmails), fn($correo) => filter_var(trim($correo), FILTER_VALIDATE_EMAIL));

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

    private function isExpectedExecutionTime(): bool
    {
        $now = now();
        return $now->isMonday() &&
            $now->hour == 9 &&
            $now->minute == 0;
    }
}
