<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Artisan;
use Carbon\Carbon;
use App\Models\ExEpo;
use App\Mail\ExEpoMail;

class ExEpoNotificacionCommand extends Command
{
    protected $signature = 'notification:exepo';
    protected $description = 'Envío de notificaciones de vencimiento de exámenes ocupacionales y preocupacionales';

    public function handle()
    {
        // Start Telegram notification
        $this->sendTelegramNotification('start');

        try {
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

            // Logging
            Log::channel('daily')->info('ExEpo Notification Job Started', [
                'timestamp' => $timestamp,
                'environment' => $environment,
                'day_of_week' => $dayName,
                'is_monday' => $now->isMonday(),
            ]);

            // Obtener los exámenes a vencer
            $fechaObjetivoIni = $now->copy()->addMonth();
            $fechaObjetivoTer = $fechaObjetivoIni->copy()->addDays(14);

            $examenes = ExEpo::whereBetween('fecha_vencimiento', [$fechaObjetivoIni, $fechaObjetivoTer])
                ->whereHas('paciente', function ($query) {
                    $query->where('activo', 1);
                })
                ->with('paciente', 'bateria')
                ->get();

            $range = 'Vencimiento de exámenes desde ' .
                $fechaObjetivoIni->format('d-m-Y') .
                ' hasta ' .
                $fechaObjetivoTer->format('d-m-Y');

            $title = 'Vencimiento de exámenes ocupacionales y preocupacionales';

            // Check if there are any exams
            if ($examenes->isEmpty()) {
                $this->sendTelegramNotification('no_exams', [
                    'start_date' => $fechaObjetivoIni->toDateString(),
                    'end_date' => $fechaObjetivoTer->toDateString()
                ]);
                Log::channel('daily')->info('No exams found for notification period');
                return;
            }

            // Prepare exam data
            $data = $examenes->map(fn($examen) => [
                'nombre' => $examen->paciente->nombre,
                'apellidos' => $examen->paciente->apellidos,
                'rut' => $examen->paciente->rut,
                'fecha_vencimiento' => $examen->fecha_vencimiento,
                'bateria' => $examen->bateria->descripcion,
                'numero_solicitud' => $examen->numero_solicitud,
                'protocolo_minsal' => $examen->paciente->protocolo_minsal,
            ]);

            // Notification emails
            $notificationEmails = env('NOTIFICATION_EMAILS', '');
            $correos = array_filter(
                explode(',', $notificationEmails),
                fn($correo) => filter_var(trim($correo), FILTER_VALIDATE_EMAIL)
            );

            // Send email notifications
            // Logging for debugging
            Log::info('Notification Emails:', ['emails' => $correos]);



            if (!empty($correos)) {
                try {
                    // Send Telegram notification with exam summary
                    $this->sendTelegramNotification('exam_summary', [
                        'total_exams' => $examenes->count(),
                        'date_range' => sprintf(
                            'From %s to %s',
                            $fechaObjetivoIni->toDateString(),
                            $fechaObjetivoTer->toDateString()
                        )
                    ]);
                    Mail::to(array_shift($correos))
                        ->cc($correos)
                        ->send(new ExEpoMail($data, $range, $title));

                    $this->info('Emails sent successfully');
                    Log::info('Emails sent successfully');
                    // Final logging and Telegram notification
                    Log::channel('daily')->info('ExEpo Notification Job Completed', [
                        'total_exams' => $examenes->count(),
                        'email_recipients' => count($correos)
                    ]);

                    $this->sendTelegramNotification('completed', [
                        'total_exams' => $examenes->count(),
                        'email_recipients' => count($correos)
                    ]);
                } catch (\Exception $e) {
                    $this->error('Email sending failed: ' . $e->getMessage());
                    Log::error('Email sending error: ' . $e->getMessage());
                }
            } else {
                $this->error('No valid email addresses found');
                Log::error('No valid email addresses found');
            }

            // Existing email sending logic...
            // (Keep your current email sending code)


        } catch (\Exception $e) {
            // Error handling with Telegram notification
            $this->sendTelegramNotification('error', [
                'error_message' => $e->getMessage(),
                'error_trace' => $e->getTraceAsString()
            ]);

            Log::channel('daily')->error('ExEpo Notification Job Failed', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);

            throw $e;
        }
    }

    /**
     * Send Telegram notifications with different templates
     */
    private function sendTelegramNotification(string $type, array $context = [])
    {
        // Ensure all possible keys exist
        $context = array_merge([
            'start_date' => 'N/A',
            'end_date' => 'N/A',
            'total_exams' => 0,
            'date_range' => 'N/A',
            'email_recipients' => 0,
            'error_message' => 'Unknown error'
        ], $context);

        $messages = [
            'start' => "🚀 *ExEpo Notification Job Started*\nTimestamp: " . now()->toDateTimeString(),

            'no_exams' => "📋 *No Exams Found*\n" .
                "Date Range: {$context['start_date']} to {$context['end_date']}",

            'exam_summary' => "📊 *Exam Notification Summary*\n" .
                "Total Exams: {$context['total_exams']}\n" .
                "Date Range: {$context['date_range']}",

            'completed' => "✅ *ExEpo Notification Job Completed*\n" .
                "Total Exams: {$context['total_exams']}\n" .
                "Email Recipients: {$context['email_recipients']}",

            'error' => "🚨 *ExEpo Notification Job Failed*\n" .
                "Error: {$context['error_message']}"
        ];

        try {
            Artisan::call('telegram:notify', [
                'message' => $messages[$type] ?? $messages['start'],
                '--type' => 'info'
            ]);
        } catch (\Exception $e) {
            Log::channel('daily')->error('Telegram Notification Failed', [
                'error' => $e->getMessage(),
                'type' => $type,
                'context' => $context
            ]);
        }
    }
}
