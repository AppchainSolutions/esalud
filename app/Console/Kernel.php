<?php

namespace App\Console;

use App\Jobs\SendExamVencNotification;
use App\Models\ExEpo;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

//use Illuminate\Support\Facades\Schedule;

class Kernel extends ConsoleKernel
{
    protected function schedule(Schedule $schedule)
    {
        /*   $schedule->job(new SendExamVencNotification(ExEpo::where('fecha_vencimiento', '<=', now())->get()))
            ->dailyAt('08:00'); */
        $schedule->job(new SendExamVencNotification)->everyFiveMinutes();
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
