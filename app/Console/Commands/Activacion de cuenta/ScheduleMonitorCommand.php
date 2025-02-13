<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Artisan;

class ScheduleMonitorCommand extends Command
{
    protected $signature = 'app:schedule-monitor';
    protected $description = 'Monitor and report on scheduled job performance';

    public function handle()
    {
        $this->systemHealthReport();
        $this->checkLogFiles();
        $this->checkScheduledJobLogs();
        //$this->checkRecentLogEntries(); // Optional
        $this->performHealthChecks();
    }

    private function systemHealthReport()
    {
        $this->info('🖥️ System Health Report 🖥️');

        // Hostname
        $hostname = gethostname();
        $timestamp = now()->format('D d M Y H:i:s T');

        // System Metrics Collection
        $cpuUsage = $this->getCpuUsage();
        $memoryUsage = $this->getMemoryUsage();
        $diskUsage = $this->getDiskUsage();
        $loadAverage = $this->getLoadAverage();

        // Formatted Output
        $this->table('System Metrics', [
            ['Metric', 'Value'],
            ['Host', $hostname],
            ['Timestamp', $timestamp],
            ['💻 CPU Usage', $cpuUsage . '%'],
            ['🧠 Memory Usage', $memoryUsage . '%'],
            ['💾 Disk Usage', $diskUsage . '%'],
            ['⚖️ Load Average', $loadAverage],
        ]);

        // Optional: Telegram Notification for Critical Conditions
        $this->checkCriticalConditions($cpuUsage, $memoryUsage, $diskUsage);
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

        // Read log file contents
        $logPath = storage_path('logs/laravel.log');
        $logContents = File::get($logPath);

        // Search for scheduled job related logs
        $scheduledJobLogs = $this->findScheduledJobLogs($logContents);

        if (!empty($scheduledJobLogs)) {
            $this->table(
                ['Scheduled Job Log Entries'],
                array_map(function ($log) {
                    return [$log];
                }, array_slice($scheduledJobLogs, -10))
            );
        } else {
            $this->warn('No scheduled job logs found.');
        }
    }

    private function findScheduledJobLogs($logContents)
    {
        // Regex to find logs related to scheduled jobs
        $pattern = '/\[(.*?)\].*Scheduled Job/';
        preg_match_all($pattern, $logContents, $matches);

        return $matches[0] ?? [];
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

    private function checkRecentLogEntries()
    {
        $logPath = storage_path('logs/laravel.log');

        try {
            // Read file contents
            $logContents = file_get_contents($logPath);

            // Split into lines and reverse
            $lines = array_reverse(explode("\n", $logContents));

            // Filter and prepare log entries
            $recentEntries = collect($lines)
                ->filter(function ($line) {
                    // Filter for meaningful log entries
                    return !empty(trim($line)) &&
                        (strpos($line, 'local.') !== false ||
                            strpos($line, 'Scheduled') !== false);
                })
                ->take(20)
                ->map(function ($line) {
                    // Truncate and format log lines
                    return [
                        substr($line, 0, 200) . (strlen($line) > 200 ? '...' : '')
                    ];
                })
                ->toArray();

            if (!empty($recentEntries)) {
                $this->info('Recent Significant Log Entries:');
                $this->table(['Log Entry'], $recentEntries);
            } else {
                $this->warn('No significant recent log entries found.');
            }
        } catch (\Exception $e) {
            $this->error('Error reading log file: ' . $e->getMessage());
        }
    }
    private function getCpuUsage()
    {
        $output = shell_exec("top -bn1 | grep 'Cpu(s)' | awk '{print $2 + $4}'");
        return round(floatval($output), 2);
    }

    private function getMemoryUsage()
    {
        $free = shell_exec("free | grep Mem | awk '{print $3/$2 * 100.0}'");
        return round(floatval($free), 2);
    }

    private function getDiskUsage()
    {
        $output = shell_exec("df -h / | awk '/\// {print $(NF-1)}'");
        return intval(rtrim($output, '%'));
    }

    private function getLoadAverage()
    {
        $load = sys_getloadavg();
        return implode(', ', array_map('round', $load, array_fill(0, 3, 2)));
    }

    private function checkCriticalConditions($cpuUsage, $memoryUsage, $diskUsage)
    {
        $criticalMessage = [];

        if ($cpuUsage > 90) {
            $criticalMessage[] = "⚠️ High CPU Usage: {$cpuUsage}%";
        }

        if ($memoryUsage > 85) {
            $criticalMessage[] = "⚠️ High Memory Usage: {$memoryUsage}%";
        }

        if ($diskUsage > 90) {
            $criticalMessage[] = "⚠️ High Disk Usage: {$diskUsage}%";
        }

        if (!empty($criticalMessage)) {
            $fullMessage = "🚨 System Health Alert 🚨\n" .
                implode("\n", $criticalMessage);

            // Optional: Send Telegram Notification
            try {
                Artisan::call('telegram:notify', [
                    'message' => $fullMessage
                ]);
            } catch (\Exception $e) {
                $this->error('Failed to send Telegram notification: ' . $e->getMessage());
            }
        }
    }
}
