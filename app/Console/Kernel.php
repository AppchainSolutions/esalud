<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Artisan;
use Carbon\Carbon;

class Kernel extends ConsoleKernel
{
    protected $commands = [
        // Other commands...
        \App\Console\Commands\TelegramNotificationCommand::class,
        \App\Console\Commands\TelegramNotificationTestCommand::class,
        \App\Console\Commands\ScheduleDebugCommand::class,
        \App\Console\Commands\NextScheduleCheckCommand::class,
        \App\Console\Commands\ScheduleMonitorCommand::class,
        \App\Console\Commands\TimezoneCheckCommand::class,
        \App\Console\Commands\TestAtencionDiariaFactory::class,
        \App\Console\Commands\BaseTruncateCommand::class,
        \App\Console\Commands\TestActivationEmail::class,
        \App\Console\Commands\EnviarNotificacionesVencimiento::class,
        \App\Console\Commands\FileTagCommand::class,
    ];

    protected function schedule(Schedule $schedule)
    {
        $schedule->command('notification:exepo')
            ->mondays()
            ->at('09:00')
            ->timezone('America/Santiago')
            ->runInBackground()
            ->withoutOverlapping()
            ->before(function () {
                Log::channel('daily')->info('Weekly Notification Job Started', [
                    'timestamp' => now()->toDateTimeString(),
                    'timezone' => config('app.timezone'),
                    'next_run' => now()->next(Carbon::MONDAY)->setTime(9, 0)
                ]);
            })
            ->after(function () {
                Log::channel('daily')->info('Weekly Notification Job Completed', [
                    'timestamp' => now()->toDateTimeString(),
                    'timezone' => config('app.timezone')
                ]);
            })
            ->onFailure(function () {
                Artisan::call('telegram:notify', [
                    'message' => 'CRITICAL: ExEpo Notification Job Failed in Production',
                    '--type' => 'alert'
                ]);
            });

        // Añadir notificaciones de vencimiento de exámenes
        $schedule->command('notificaciones:vencimiento')
            ->mondays()
            ->at('19:00')
            ->timezone('America/Santiago')
            ->runInBackground()
            ->withoutOverlapping()
            ->before(function () {
                Log::channel('daily')->info('Exam Expiration Notifications Started', [
                    'timestamp' => now()->toDateTimeString()
                ]);
            })
            ->after(function () {
                Log::channel('daily')->info('Exam Expiration Notifications Completed', [
                    'timestamp' => now()->toDateTimeString()
                ]);
            })
            ->onFailure(function () {
                Artisan::call('telegram:notify', [
                    'message' => 'CRITICAL: Exam Expiration Notification Job Failed',
                    '--type' => 'alert'
                ]);
            });

        // Programar generación de notificaciones de exámenes
        $schedule->command('examenes:notificar --log')
                 ->weekly()  // Ejecutar semanalmente
                 ->mondays() // Los lunes
                 ->at('19:00') // A las 7 PM
                 ->timezone('America/Santiago') // Zona horaria de Chile
                 ->withoutOverlapping(); // Evitar ejecuciones simultáneas

        /**
         * Schedule Test Email
         * # Send email now to default recipients
         *  php artisan test:email
         *
         *# Send email now to specific recipients
         *   php artisan test:email --recipients="test1@example.com,test2@example.com"
         *
         *   # Simulate scheduling (for manual testing)
         *   php artisan test:email --interval=5m
         *   php artisan test:email --interval=1h
         *   php artisan test:email --interval=daily
         */
        // Optional: Add test email schedule
        $schedule->command('test:email --interval=daily')
            ->dailyAt('23:21')
            ->timezone('America/Santiago')
            ->runInBackground()
            ->before(function () {
                Log::channel('daily')->info('Daily Test Email Scheduled');
            })
            ->after(function () {
                Log::channel('daily')->info('Daily Test Email Completed');
            });
    }


    /**
     * Register the commands for the application.
     */
    protected function commands(): void
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }
}
