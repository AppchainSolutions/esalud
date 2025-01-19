<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Illuminate\Support\Facades\Log;
use Carbon\Carbon;

class Kernel extends ConsoleKernel
{
    protected $commands = [
        // Other commands...
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
            ->before(function () {
                // Detailed logging before execution
                Log::info('Scheduled Job Timing Check', [
                    'scheduled_time' => now()->format('Y-m-d H:i:s T'),
                    'expected_day' => 'Monday',
                    'expected_hour' => '09:00',
                    'current_timestamp' => time(),
                    'carbon_now' => Carbon::now()->toDateTimeString(),
                    'system_timezone' => date_default_timezone_get(),
                    'laravel_timezone' => config('app.timezone')
                ]);
            })
            ->after(function () {
                Log::info('Scheduled Job Completed', [
                    'completion_time' => now()->format('Y-m-d H:i:s T')
                ]);
            });
    }


    /**
     * Register the commands for the application.
     */
    protected function commands(): void
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }

}
