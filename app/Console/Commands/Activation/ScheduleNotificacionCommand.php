<?php
namespace App\Console\Commands\Activation;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Log;
use Carbon\Carbon;

/**
 * Class ScheduleNotificacionCommand
 *
 * This command is responsible for testing and verifying the scheduling of notifications.
 * It executes a predefined notification command and logs the execution details.
 * Additionally, it verifies the timing of the notification to ensure it aligns with
 * expected scheduling parameters, such as the day and time.
 */
class ScheduleNotificacionCommand extends Command
{
    /**
     * php artisan notificacion:test-schedule for notification-specific testing
     */
    protected $signature = 'notification:test-schedule';
    protected $description = 'Test and verify notification scheduling';

    /**
     * Handle the execution of the notification scheduling command.
     *
     * This method calls the 'exepo:notificacion' command to test notification scheduling,
     * logs the execution details, and verifies the timing to ensure it meets expected
     * scheduling parameters.
     */    
    public function handle()
    {
        // Execute the notification command
        Artisan::call('exepo:notificacion');
        $this->info('Notification command executed');

        // Log execution details
        Log::info('Notification Schedule Test', [
            'execution_time' => now()->toDateTimeString(),
            'command' => 'exepo:notificacion'
        ]);

        // Specific timing details for notification
        $this->verifyNotificationTiming();
    }

    /**
     * Verify the timing of the notification scheduling.
     *
     * This method checks the current date and time against the expected
     * scheduling parameters, such as being a Monday and near 09:00 AM.
     * It outputs a table displaying the current execution time and whether
     * the current day and time match the expected values.
     */
    private function verifyNotificationTiming(): void
    {
        $now = Carbon::now();
        
        $this->info('Notification Scheduling Verification:');
        
        $this->table(['Notification Timing', 'Value'], [
            ['Execution Time', $now->format('Y-m-d H:i:s T')],
            ['Expected Day', 'Monday'],
            ['Expected Time', '09:00'],
            ['Current Day Match', $now->isMonday() ? 'Yes' : 'No'],
            ['Current Time Near 09:00', 
             ($now->hour == 9 && $now->minute < 5) ? 'Yes' : 'No'],
        ]);
    }
}
