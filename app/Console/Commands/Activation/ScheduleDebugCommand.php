<?php
namespace App\Console\Commands\Activation;

use Illuminate\Console\Command;
use Illuminate\Console\Scheduling\Schedule;
use Carbon\Carbon;
use Illuminate\Support\Facades\Artisan;

class ScheduleDebugCommand extends Command
{
    protected $signature = 'app:schedule-debug';
    protected $description = 'Debug Laravel scheduling configuration';

    public function handle()
    {
        $this->info('Schedule Debugging Tool');
        
        // Current time details
        $now = Carbon::now();
        
        $this->table('Current Time Details', [
            ['Property', 'Value'],
            ['Current Time', $now->toDateTimeString()],
            ['Timezone', config('app.timezone')],
            ['Day of Week', $now->englishDayOfWeek],
            ['Next Monday', Carbon::parse('next monday')->toDateTimeString()],
        ]);

        // Scheduled command verification
        $this->info("\nScheduled Command Check:");
        $this->verifyScheduledCommand();
    }

    private function verifyScheduledCommand()
    {
        $nextMonday = Carbon::parse('next monday')->setTime(9, 0);
        
        $this->table('Scheduled Notification Details', [
            ['Property', 'Value'],
            ['Next Run', $nextMonday->toDateTimeString()],
            ['Time Until Next Run', $nextMonday->diffForHumans()],
            ['Is Schedulable', $this->isSchedulable() ? 'Yes' : 'No'],
        ]);
    }

    private function isSchedulable(): bool
    {
        try {
            // Attempt to run the command
            Artisan::call('exepo:notificacion');
            return true;
        } catch (\Exception $e) {
            $this->error('Command execution failed: ' . $e->getMessage());
            return false;
        }
    }
}
