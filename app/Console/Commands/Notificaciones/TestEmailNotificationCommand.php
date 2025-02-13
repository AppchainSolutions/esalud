<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;
use App\Mail\ExEpoMail;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Artisan;

class TestEmailNotificationCommand extends Command
{
    protected $signature = 'test:email 
        {--interval=now : When to send (now, 5m, 1h, daily)}
        {--recipients=default : Comma-separated email recipients or "default"}
        {--simulate : Run in simulation mode}';

    protected $description = 'Send a test email notification with flexible scheduling';
    /**
     *    # Simulate scheduling
     *   php artisan test:email --simulate
     *   php artisan test:email --interval=5m --simulate
     *   php artisan test:email --interval=1h --simulate
     *   php artisan test:email --interval=daily --simulate
     *
     *   # Actually send email
     *   php artisan test:email
     *   php artisan test:email --recipients="test@example.com"
     */

    public function handle()
    {
        $interval = $this->option('interval');
        $recipients = $this->option('recipients');
        $simulate = $this->option('simulate');

        if ($simulate) {
            $this->simulateSchedule($interval);
            return Command::SUCCESS;
        }

        // Prepare recipient list
        $recipientList = $this->prepareRecipients($recipients);

        // Prepare test data
        $testData = $this->generateTestData();

        // Send email
        $this->sendTestEmail($recipientList, $testData);

        // Log and notify
        $this->logAndNotify($recipientList, $interval);

        return Command::SUCCESS;
    }

    private function simulateSchedule($interval)
    {
        $this->info("🕒 Simulating Email Scheduler");

        $schedules = [
            'now' => now(),
            '1m' => now()->addMinutes(1),
            '5m' => now()->addMinutes(5),
            '1h' => now()->addHour(),
            'daily' => now()->addDay()->setTime(23, 21)
        ];

        $scheduleTime = $schedules[$interval] ?? $schedules['now'];

        $this->table('Simulation Details', [
            ['Property', 'Value'],
            ['Interval', $interval],
            ['Scheduled Time', $scheduleTime->toDateTimeString()],
            ['Current Time', now()->toDateTimeString()],
            ['Time Difference', $scheduleTime->diffForHumans()]
        ]);
    }

    private function prepareRecipients($recipients)
    {
        // Use default emails from .env if "default" is specified
        if ($recipients === 'default') {
            $recipients = env('NOTIFICATION_EMAILS', 'omar.ahumadag@gmail.com');
        }

        return array_filter(explode(',', $recipients), 'filter_var');
    }

    private function generateTestData()
    {
        return collect([
            [
                'nombre' => 'Test User',
                'apellidos' => 'Apellidos Test',
                'rut' => '12.345.678-9',
                'fecha_vencimiento' => now()->addDays(30)->format('Y-m-d'),
                'bateria' => 'Test Battery',
                'numero_solicitud' => 'TEST-' . now()->timestamp,
                'protocolo_minsal' => 'PROTO-TEST',
                'activo' => true
            ]
        ]);
    }

    private function sendTestEmail($recipients, $testData)
    {
        $range = sprintf(
            'Test Email Range: %s to %s',
            now()->format('d-m-Y'),
            now()->addDays(30)->format('d-m-Y')
        );
        $title = 'Test Email Notification System';

        foreach ($recipients as $recipient) {
            try {
                Mail::to($recipient)->send(
                    new ExEpoMail($testData, $range, $title)
                );

                Log::channel('daily')->info('Test Email Sent', [
                    'recipient' => $recipient,
                    'timestamp' => now()->toDateTimeString()
                ]);
            } catch (\Exception $e) {
                Log::channel('daily')->error('Test Email Failed', [
                    'recipient' => $recipient,
                    'error' => $e->getMessage()
                ]);
            }
        }
    }

    private function logAndNotify($recipients, $interval)
    {
        $message = sprintf(
            "📧 *Test Email Notification* 📧\n" .
                "Interval: %s\n" .
                "Recipients: %s\n" .
                "Timestamp: %s",
            $interval,
            implode(', ', $recipients),
            now()->toDateTimeString()
        );

        try {
            Artisan::call('telegram:notify', [
                'message' => $message,
                '--type' => 'info'
            ]);
        } catch (\Exception $e) {
            Log::channel('daily')->error('Telegram Notification Failed', [
                'error' => $e->getMessage()
            ]);
        }
    }
}
