<?php

namespace App\Console\Commands;

use App\Services\CorreoService;
use Illuminate\Console\Command;

class ProbarConfiguracionCorreo extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'correo:probar {email?}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Probar la configuración de envío de correos electrónicos';

    /**
     * Execute the console command.
     */
    public function handle(CorreoService $correoService)
    {
        $email = $this->argument('email') ?? 'omar.ahumadag@gmail.com';

        $this->info("Probando configuración de correo para: $email");

        try {
            // Enviar correo de prueba
            \Mail::raw('Prueba de configuración de correo Brevo', function ($message) use ($email) {
                $message->to($email)
                        ->subject('Prueba de Configuración de Correo - eSalud');
            });

            $this->info('✅ Correo de prueba enviado exitosamente');
            return Command::SUCCESS;
        } catch (\Exception $e) {
            $this->error('❌ Error al enviar correo de prueba:');
            $this->error($e->getMessage());
            return Command::FAILURE;
        }
    }
}
