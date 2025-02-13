<?php

namespace App\Console\Commands\Activation;

use Illuminate\Console\Command;
use App\Models\Paciente;
use App\Mail\PacienteActivacionMail;
use Illuminate\Support\Facades\Mail;

class TestActivationEmail extends Command
{
    protected $signature = 'test:activation-email {email}';
    protected $description = 'Enviar un correo de activación de prueba';

    public function handle()
    {
        $email = $this->argument('email');

        // Crear un paciente de prueba
        $paciente = Paciente::factory()->create([
            'email' => $email,
            'nombre' => 'Juan',
            'apellidos' => 'Pérez'
        ]);

        // Generar token de activación
        $token = $paciente->generarTokenActivacion();
        $activationUrl = route('paciente.activar', ['token' => $token]);

        // Enviar correo
        Mail::to($email)->send(new PacienteActivacionMail(
            $paciente, 
            $token, 
            $activationUrl,
            24
        ));

        $this->info("Correo de activación enviado a $email");
        $this->info("Token: $token");
        $this->info("URL: $activationUrl");
    }
}
