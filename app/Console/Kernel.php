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
    ];

    protected function schedule(Schedule $schedule)
    {
        $schedule->command('exepo:notificacion')
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
                // Send Telegram notification before job
                Artisan::call('telegram:notify', [
                    'message' => 'Starting Production ExEpo Notification Job',
                    '--type' => 'info'
                ]);
            })
            ->after(function () {
                Log::channel('daily')->info('Weekly Notification Job Completed', [
                    'timestamp' => now()->toDateTimeString(),
                    'timezone' => config('app.timezone')
                ]);
                // Send Telegram notification after job
                Artisan::call('telegram:notify', [
                    'message' => 'Production ExEpo Notification Job Completed',
                    '--type' => 'info'
                ]);
            })
            ->onFailure(function () {
                Artisan::call('telegram:notify', [
                    'message' => 'CRITICAL: ExEpo Notification Job Failed in Production',
                    '--type' => 'alert'
                ]);
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
