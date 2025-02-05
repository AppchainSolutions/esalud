<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use App\Models\User;
use App\Models\Paciente;

class PacienteSeeder extends Seeder
{
    public function run()
    {
        DB::table('users')->truncate();
        DB::table('paciente')->truncate();
        //DB::table('citas')->truncate();
        // DB::table('consultas')->truncate();
        // DB::table('examenes')->truncate();
        // DB::table('vacunas')->truncate();
        // DB::table('tratamientos')->truncate();
    

        // Crear usuario
        $userId = DB::table('users')->insertGetId([
            'name' => 'Juan Pérez',
            'lastname' => 'Pérez',
            'rut' => '12.345.678-9',
            'email' => 'paciente@ejemplo.com',
            'password' => Hash::make('password'),
            'rol' => 'paciente',
            'activo' => true,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        
        $userId = DB::table('users')->insertGetId([
            'name' => 'Administrador',
            'lastname' => 'Jedi Master',
            'rut' => '11.222.333-4',
            'email' => 'admin@example.com',
            'password' => Hash::make('clave123'),
            'isAdmin' => true,
            'rol' => 'admin',
            'activo' => true,
            'created_at' => now(),
            'updated_at' => now()
        ]);

        // Crear paciente
        $pacienteId = DB::table('paciente')->insertGetId([
            'user_id' => $userId,
            'rut' => '12.345.678-9',
            'nombre' => 'Juan',
            'apellidos' => 'Pérez',
            'fecha_nacimiento' => '1990-05-15',
            'telefono1' => '+56912345678',
            'direccion' => 'Av. Ejemplo 123, Santiago',
            'email' => 'paciente@ejemplo.com',
            'password' => Hash::make('password'),
            'activo' => true,
            'created_at' => now(),
            'updated_at' => now()
        ]);

        // Insertar datos de prueba
        //$this->insertCitas($pacienteId);
       // $this->insertConsultas($pacienteId);
       // $this->insertExamenes($pacienteId);
       // $this->insertVacunas($pacienteId);
       // $this->insertTratamientos($pacienteId);
    }

    private function insertCitas($pacienteId)
    {
        DB::table('citas')->insert([
            [
                'paciente_id' => $pacienteId,
                'fecha' => now()->addDays(7),
                'especialidad' => 'Medicina General',
                'nombre_medico' => 'Dr. Carlos Sánchez',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'paciente_id' => $pacienteId,
                'fecha' => now()->addDays(30),
                'especialidad' => 'Cardiología',
                'nombre_medico' => 'Dra. María González',
                'created_at' => now(),
                'updated_at' => now()
            ]
        ]);
    }

    private function insertConsultas($pacienteId)
    {
        DB::table('consultas')->insert([
            [
                'paciente_id' => $pacienteId,
                'fecha' => now()->subMonths(2),
                'diagnostico_principal' => 'Chequeo de rutina',
                'especialidad' => 'Medicina General',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'paciente_id' => $pacienteId,
                'fecha' => now()->subMonths(1),
                'diagnostico_principal' => 'Control de presión arterial',
                'especialidad' => 'Cardiología',
                'created_at' => now(),
                'updated_at' => now()
            ]
        ]);
    }

    private function insertExamenes($pacienteId)
    {
        DB::table('examenes')->insert([
            [
                'paciente_id' => $pacienteId,
                'fecha' => now()->subMonths(1),
                'tipo' => 'Examen de sangre',
                'estado' => 'completado',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'paciente_id' => $pacienteId,
                'fecha' => now()->addDays(15),
                'tipo' => 'Radiografía de tórax',
                'estado' => 'pendiente',
                'created_at' => now(),
                'updated_at' => now()
            ]
        ]);
    }

    private function insertVacunas($pacienteId)
    {
        DB::table('vacunas')->insert([
            [
                'paciente_id' => $pacienteId,
                'nombre' => 'Influenza',
                'fecha' => now()->subYear(),
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'paciente_id' => $pacienteId,
                'nombre' => 'COVID-19',
                'fecha' => now()->subMonths(6),
                'created_at' => now(),
                'updated_at' => now()
            ]
        ]);
    }

    private function insertTratamientos($pacienteId)
    {
        DB::table('tratamientos')->insert([
            [
                'paciente_id' => $pacienteId,
                'nombre' => 'Control de presión',
                'estado' => 'activo',
                'created_at' => now(),
                'updated_at' => now()
            ]
        ]);
    }
}
