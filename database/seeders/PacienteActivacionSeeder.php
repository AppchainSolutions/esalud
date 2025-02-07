<?php

namespace Database\Seeders;

use App\Models\Paciente;
use App\Models\Unidad;
use App\Models\PuebloOriginario;
use App\Models\Prevision;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Mail;
use App\Mail\PacienteActivacionMail;

class PacienteActivacionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Obtener referencias para relaciones
        // $unidad = Unidad::firstOrCreate([
        //     'nombre' => 'Unidad de Prueba',
        //     'codigo' => 'TEST001'
        // ]);

        // $puebloOriginario = PuebloOriginario::firstOrCreate([
        //     'nombre' => 'Mapuche'
        // ]);

        // $prevision = Prevision::firstOrCreate([
        //     'nombre' => 'FONASA',
        //     'codigo' => 'A'
        // ]);

        // Crear paciente de prueba para activación
        $paciente = Paciente::firstOrCreate(
            [
                'email' => 'omar.ahumadag@gmail.com'
            ],
            [
                'nombre' => 'Juan Carlos',
                'apellidos' => 'Pérez González',
                'rut' => '12.345.678-9',
                'fecha_nacimiento' => now()->subYears(35)->subMonths(2),
                // 'sexo' => 'masculino',
                // 'direccion' => 'Av. Ejemplo 123, Santiago',
                // 'telefono1' => '+56912345678',
                // 'unidad' => $unidad->id,
                // 'pueblo_originario' => $puebloOriginario->id,
                // 'prevision' => $prevision->id,
                
                // Campos específicos para prueba de activación
                'token_activacion' => null,
                'token_activacion_expira' => null,
                'activo' => true
            ]
        );

        // Generar token de activación
        $token = $paciente->generarTokenActivacion();

        // Opcional: Simular envío de correo (en ambiente local/testing)
        if (app()->environment(['local', 'testing'])) {
            Mail::to($paciente->email)->send(new PacienteActivacionMail($paciente, $token));
        }

        // Mensaje informativo
        $this->command->info("Paciente de prueba creado:");
        $this->command->info("Email: {$paciente->email}");
        $this->command->info("Token de Activación: {$token}");
        $this->command->info("Expira: {$paciente->token_activacion_expira}");
    }
}
