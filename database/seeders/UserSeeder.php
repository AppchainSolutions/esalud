<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Paciente;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Helpers\RutGenerator;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Truncar la tabla users
        User::truncate();
        Paciente::truncate();
        
        $this->call(DatabaseMasterSeeder::class);
        
        User::create([
            'name' => 'Admin',
            'lastname' => 'User',
            'rut' => RutGenerator::generate(),
            'email' => 'admin@example.com',
            'isAdmin' => true,
            'password' => Hash::make('clave123'),
            'rol' => 'admin',
        ]);

        User::create([
            'name' => 'Test',
            'lastname' => 'User',
            'rut' => RutGenerator::generate(),
            'email' => 'test@example.com',
            'isAdmin' => false,
            'password' => Hash::make('clave123'),
            'rol' => 'paciente',
        ]);

        

        Paciente::factory()->create([
            'nombre' => 'Test',
            'apellidos' => 'User',
            'rut' => RutGenerator::generate(),
            'email' => 'test@example.com',
            'cuenta_activada' => true,
            'user_id' => 2
        ]);


        // Puedes agregar más usuarios según sea necesario
    }
}
