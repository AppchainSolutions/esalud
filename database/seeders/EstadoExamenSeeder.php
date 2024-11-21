<?php

namespace Database\Seeders;

use App\Models\EstadoExamen;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class EstadoExamenSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Truncar la tabla users
        EstadoExamen::truncate();

        EstadoExamen::create([
            'name' => 'Admin',
            'lastname' => 'User',
            'rut' => '12345678-9',
            'email' => 'admin@example.com',
            'isAdmin' => true,
            'password' => Hash::make('clave123'),
            'isAdmin' => true,
        ]);

        EstadoExamen::create([
            'name' => 'Test',
            'lastname' => 'User',
            'rut' => '12345678-0',
            'email' => 'test@example.com',
            'isAdmin' => false,
            'password' => Hash::make('clave123'),
            'isAdmin' => false,
        ]);

        // Puedes agregar más usuarios según sea necesario
    }
}
