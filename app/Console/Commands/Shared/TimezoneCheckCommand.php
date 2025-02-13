<?php

namespace App\Console\Commands\Shared;

use Illuminate\Console\Command;
use Carbon\Carbon;
use DateTime;
use DateTimeZone;

class TimezoneCheckCommand extends Command
{
    protected $signature = 'app:timezone-check';
    protected $description = 'Check and display timezone information';

    public function handle()
    {
        // PHP Default Timezone
        $this->info('PHP Default Timezone: ' . date_default_timezone_get());
        
        // Laravel App Timezone from Config
        $this->info('Laravel App Timezone: ' . config('app.timezone'));
        
        // Current Time using PHP
        $this->info('Current Time (PHP): ' . date('Y-m-d H:i:s T'));
        
        // Current Time using Carbon
        $now = Carbon::now();
        $this->info('Current Time (Carbon): ' . $now->format('Y-m-d H:i:s T'));
        
        // Environment
        $this->info('Current Environment: ' . app()->environment());
        
        // Detailed Timezone Information
        $this->table(['Property', 'Value'], [
            ['Timestamp', $now->timestamp],
            ['Timezone', $now->timezone],
            ['Timezone Name', $now->tzName],
            ['UTC Offset', $now->utcOffset() . ' minutes'],
            ['Daylight Saving Check', $this->checkDaylightSaving($now)],
        ]);

        // Additional Timezone Verification
        $this->verifyTimezoneDetails();
    }

    private function checkDaylightSaving(Carbon $date)
    {
        try {
            $timezone = new DateTimeZone($date->tzName);
            $transitions = $timezone->getTransitions();
            
            foreach ($transitions as $transition) {
                if ($transition['ts'] > $date->timestamp) {
                    return $transition['isdst'] ? 'Yes' : 'No';
                }
            }
            
            return 'Unable to determine';
        } catch (\Exception $e) {
            return 'Error checking DST: ' . $e->getMessage();
        }
    }

    private function verifyTimezoneDetails()
    {
        $this->info("\nAdditional Timezone Verification:");
        
        $now = new DateTime('now', new DateTimeZone('America/Santiago'));
        
        $this->table(['Detail', 'Value'], [
            ['Current Date', $now->format('Y-m-d')],
            ['Current Time', $now->format('H:i:s')],
            ['Timezone', $now->getTimezone()->getName()],
            ['Offset', $now->format('P')],
            ['Offset Seconds', $now->getOffset()],
        ]);
    }
}