<?php
namespace App\Console\Commands;

use Illuminate\Console\Command;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;


class NextScheduleCheckCommand extends Command
{
    protected $signature = 'app:next-schedule-check';
    protected $description = 'Check details of next scheduled run';

    public function handle()
    {
        $now = Carbon::now();
        $nextMonday = Carbon::parse('next monday');
        $scheduledTime = $nextMonday->setTime(9, 0);
        
        $this->table(['Schedule Detail', 'Value'], [
            ['Current Time', $now->toDateTimeString()],
            ['Next Scheduled Run', $scheduledTime->toDateTimeString()],
            ['Time Until Next Run', $now->diffForHumans($scheduledTime)],
            ['Days Until Next Run', $now->diffInDays($scheduledTime)],
            ['Current Day', $now->englishDayOfWeek],
            ['Scheduled Day', $scheduledTime->englishDayOfWeek],
        ]);

        // Detailed logging
        Log::channel('daily')->info('Next Schedule Check', [
            'current_time' => $now->toDateTimeString(),
            'next_scheduled_run' => $scheduledTime->toDateTimeString(),
            'time_until_next_run' => $now->diffForHumans($scheduledTime),
        ]);
    }
}