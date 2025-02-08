<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\URL;
use App\Models\Paciente;

class GenerateSignedUrlCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:generate-signed-url {email}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Genera una URL firmada para activación de paciente: php artisan app:generate-signed-url email@domain.com';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $email = $this->argument('email');
        $paciente = Paciente::where('email', $email)->firstOrFail();

        $url = URL::signedRoute('paciente.activacion.formulario', [
            'token' => $paciente->token_activacion
        ], now()->addHours(24));

        $this->info('URL firmada generada:');
        $this->line($url);

        return 0;
    }
}
