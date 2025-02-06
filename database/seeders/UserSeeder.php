<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

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
        //User::truncate();

        User::create([
            'name' => 'Admin',
            'lastname' => 'User',
            'rut' => '12345678-9',
            'email' => 'admin@example.com',
            'isAdmin' => true,
            'password' => Hash::make('clave123'),
            'rol' => 'admin',
        ]);

        User::create([
            'name' => 'Test',
            'lastname' => 'User',
            'rut' => '12345678-0',
            'email' => 'test@example.com',
            'isAdmin' => true,
            'password' => Hash::make('clave123'),
            'rol' => 'admin',
        ]);

        // Puedes agregar más usuarios según sea necesario
    }
}
