<?php
namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;

class ScheduleMonitorCommand extends Command
{
    protected $signature = 'app:schedule-monitor';
    protected $description = 'Monitor and report on scheduled job performance';

    public function handle()
    {
        $this->checkLogFiles();
        $this->checkScheduledJobLogs();
        $this->performHealthChecks();
    }

    private function checkLogFiles()
    {
        $logPath = storage_path('logs/laravel.log');
        $this->info('Log File Analysis:');
        
        $this->table(['Log File Metric', 'Value'], [
            ['Log Path', $logPath],
            ['Log File Size', $this->formatBytes(File::size($logPath))],
            ['Last Modified', date('Y-m-d H:i:s', File::lastModified($logPath))],
        ]);
    }

    private function checkScheduledJobLogs()
    {
        $this->info('Scheduled Job Log Analysis:');
        
        $notificationLogs = Log::getMonolog()
            ->getHandlers()[0]
            ->getFormatter()
            ->getLogs('ExEpo Notification Job');
        
        $this->table(['Job Log Metric', 'Value'], [
            ['Total Execution Logs', count($notificationLogs)],
            ['Last Execution', $notificationLogs ? $notificationLogs[0]['datetime'] : 'No logs found'],
        ]);
    }

    private function performHealthChecks()
    {
        $this->info('System Health Checks:');
        
        $checks = [
            ['PHP Version', phpversion()],
            ['Laravel Version', app()->version()],
            ['Environment', app()->environment()],
            ['Timezone', config('app.timezone')],
        ];

        $this->table(['System Check', 'Value'], $checks);
    }

    private function formatBytes($bytes, $precision = 2)
    {
        $units = ['B', 'KB', 'MB', 'GB', 'TB'];
        $bytes = max($bytes, 0);
        $pow = floor(($bytes ? log($bytes) : 0) / log(1024));
        $pow = min($pow, count($units) - 1);
        $bytes /= pow(1024, $pow);
        return round($bytes, $precision) . ' ' . $units[$pow];
    }
}