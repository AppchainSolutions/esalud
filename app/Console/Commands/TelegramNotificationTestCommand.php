<?php
namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

class TelegramNotificationTestCommand extends Command
{
    protected $signature = 'telegram:test-suite';
    protected $description = 'Run comprehensive Telegram notification test suite';

    public function handle()
    {
        $this->info('🚀 Starting Telegram Notification Test Suite');

        $tests = [
            ['message' => 'Basic Test Notification', 'type' => 'test'],
            ['message' => 'System Performance Alert', 'type' => 'alert'],
            ['message' => 'Scheduled Job Information', 'type' => 'info'],
            ['message' => 'Long message test to check message truncation and formatting. This message is intentionally long to test how the Telegram notification handles extended text content.', 'type' => 'test']
        ];

        foreach ($tests as $test) {
            $this->info("\n🔍 Running Test: {$test['type']} Notification");
            
            try {
                Artisan::call('telegram:notify', [
                    'message' => $test['message'],
                    '--type' => $test['type']
                ]);
                
                $this->info("✅ Test Passed: {$test['type']} Notification");
                
                // Brief pause between notifications
                sleep(2);
            } catch (\Exception $e) {
                $this->error("❌ Test Failed: {$test['type']} Notification");
                $this->error($e->getMessage());
            }
        }

        $this->info('\n🏁 Telegram Notification Test Suite Completed');
    }
}