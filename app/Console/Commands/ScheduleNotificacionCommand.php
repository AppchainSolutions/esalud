<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

class ScheduleNotificacionCommand extends Command
{
    protected $signature = 'schedule:notificacion';
    protected $description = 'Schedule the test notification command';

    public function handle()
    {
        Artisan::call('test:notificacion');
        $this->info('Test notification command scheduled and executed');
    }
}