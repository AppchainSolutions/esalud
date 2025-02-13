<?php
namespace App\Console\Commands\Activation;

use Illuminate\Console\Command;
use Carbon\Carbon;
/**
 * Command to verify the timing configuration of scheduled jobs.
 *
 * This command outputs the current time, day of the week, and calculates
 * the next Monday's date and time at 9 AM. It is useful for ensuring
 * that scheduled jobs are configured to run at the correct times.
 *
 * Usage:
 *   php artisan app:schedule-timing-check
 */
class ScheduleTimingVerificationCommand extends Command
{
    /**
     * php artisan app:schedule-timing-check for general timing
     */
    protected $signature = 'app:schedule-timing-check';
    protected $description = 'Verify scheduled job timing configuration';

    public function handle()
    {
        // Current time in different contexts
        $now = Carbon::now();
        
        $this->info('Scheduling Timing Verification:');
        
        $this->table(['Property', 'Value'], [
            ['Current Time', $now->format('Y-m-d H:i:s T')],
            ['Day of Week', $now->englishDayOfWeek],
            ['Day Number', $now->dayOfWeek],
            ['Next Monday', Carbon::parse('next monday')->format('Y-m-d')],
            ['Next Monday at 09:00', Carbon::parse('next monday 09:00')->format('Y-m-d H:i:s T')],
        ]);

        // Verify Monday at 9 AM condition
        $nextMonday = Carbon::parse('next monday 09:00');
        $this->info("\nNext Scheduled Run:");
        $this->info("Date: " . $nextMonday->format('Y-m-d'));
        $this->info("Time: " . $nextMonday->format('H:i:s T'));
    }
}
