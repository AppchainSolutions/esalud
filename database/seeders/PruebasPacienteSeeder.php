<?php

namespace Database\Seeders;

use App\Models\Paciente;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class PruebasPacienteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Paciente para pruebas de activación
        $paciente = Paciente::updateOrCreate(
            ['email' => 'paciente_prueba@example.com'],
            [
                'nombre' => 'Paciente',
                'apellidos' => 'Prueba',
                'rut' => '12.345.678-9',
                'activo' => false,
                'cuenta_activada' => false,
                'fecha_nacimiento' => now()->subYears(30),
                'protocolo_minsal' => false,
                'donante' => false
            ]
        );

        // Paciente con cuenta ya activada
        Paciente::updateOrCreate(
            ['email' => 'paciente_activo@example.com'],
            [
                'nombre' => 'Paciente',
                'apellidos' => 'Activo',
                'rut' => '98.765.432-1',
                'activo' => true,
                'cuenta_activada' => true,
                'fecha_nacimiento' => now()->subYears(35),
                'protocolo_minsal' => true,
                'donante' => true,
                'user_id' => User::firstOrCreate([
                    'email' => 'paciente_activo@example.com'
                ], [
                    'name' => 'Paciente',
                    'lastname' => 'Activo',
                    'password' => Hash::make('password_activo'),
                    'rol' => 'paciente',
                    'activo' => true,
                    'rut' => '98.765.432-1'
                ])->id
            ]
        );
    }
}
