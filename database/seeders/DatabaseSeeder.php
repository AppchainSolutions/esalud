<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Paciente;

class DatabaseSeeder extends Seeder
{

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        //Paciente::factory(10)->create();

        $this->call([
            Seeder::class,
        ]);
    }
}
