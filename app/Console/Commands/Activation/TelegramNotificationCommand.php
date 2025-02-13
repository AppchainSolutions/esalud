<?php
namespace App\Console\Commands\Activation;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Process;
use Illuminate\Support\Facades\Log;

class TelegramNotificationCommand extends Command
{
    protected $signature = 'telegram:notify 
        {message=Default notification} 
        {--type=test : Type of notification (test, alert, info)}
        {--parse-mode=Markdown}';
    
    protected $description = 'Send a notification via Telegram with various options';

    public function handle()
    {
        $message = $this->argument('message');
        $type = $this->option('type');
        $parseMode = $this->option('parse-mode');
        
        // Customize message based on type
        $formattedMessage = $this->formatMessage($message, $type);
        
        // Get the absolute path to the script
        $scriptPath = base_path('scripts/telegram_notification.sh');
        
        // Ensure script is executable
        chmod($scriptPath, 0755);

        // Detailed logging before execution
        Log::channel('daily')->info('Telegram Notification Attempt', [
            'type' => $type,
            'message' => $formattedMessage,
            'parse_mode' => $parseMode
        ]);

        // Run the script with full environment
        $process = Process::run([
            $scriptPath,
            $formattedMessage
        ]);

        // Log the full process output
        Log::channel('daily')->info('Telegram Notification Result', [
            'exit_code' => $process->exitCode(),
            'output' => $process->output(),
            'error_output' => $process->errorOutput()
        ]);

        if ($process->successful()) {
            $this->info('🟢 Telegram notification sent successfully');
            $this->table(['Notification Details'], [
                ['Type', $type],
                ['Message', substr($formattedMessage, 0, 100) . '...'],
                ['Timestamp', now()->toDateTimeString()]
            ]);
        } else {
            $this->error('🔴 Failed to send Telegram notification');
            $this->error('Output: ' . $process->output());
            $this->error('Error: ' . $process->errorOutput());
        }
    }

    private function formatMessage($message, $type)
    {
        $hostname = gethostname();
        $timestamp = now()->format('Y-m-d H:i:s T');

        switch ($type) {
            case 'alert':
                return "🚨 *ALERT* 🚨\n" .
                       "Host: $hostname\n" .
                       "Timestamp: $timestamp\n" .
                       "Message: $message";
            
            case 'info':
                return "ℹ️ *Information* ℹ️\n" .
                       "Host: $hostname\n" .
                       "Timestamp: $timestamp\n" .
                       "Message: $message";
            
            default:
                return "🧪 *Test Notification* 🧪\n" .
                       "Host: $hostname\n" .
                       "Timestamp: $timestamp\n" .
                       "Message: $message";
        }
    }
}
