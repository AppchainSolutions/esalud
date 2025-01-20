<?php
namespace App\Logging;

use Monolog\Handler\AbstractProcessingHandler;
use Monolog\LogRecord;
use Illuminate\Support\Facades\Artisan;

class TelegramNotificationHandler extends AbstractProcessingHandler
{
    protected function write(LogRecord $record): void
    {
        // Only send critical or emergency level logs via Telegram
        if ($record->level >= \Monolog\Level::Critical) {
            $this->sendTelegramNotification($record);
        }
    }

    private function sendTelegramNotification(LogRecord $record)
    {
        try {
            // Prepare message
            $message = sprintf(
                "🚨 *Critical Log Alert* 🚨\n" .
                "Level: %s\n" .
                "Channel: %s\n" .
                "Message: %s\n" .
                "Context: %s",
                $record->level->getName(),
                $record->channel,
                $record->message,
                json_encode($record->context, JSON_PRETTY_PRINT)
            );

            // Send via Artisan command
            Artisan::call('telegram:notify', [
                'message' => $message,
                '--type' => 'alert'
            ]);
        } catch (\Exception $e) {
            // Fallback error logging
            error_log('Failed to send Telegram notification: ' . $e->getMessage());
        }
    }
}