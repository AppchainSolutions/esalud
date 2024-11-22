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
            'descripcion' => 'Evaluación realizada',
        ]);

        EstadoExamen::create([
            'descripcion' => 'Inasistente',
        ]);

        EstadoExamen::create([
            'descripcion' => 'Rechaza evaluación',
        ]);

        EstadoExamen::create([
            'descripcion' => 'Desvinculado',
        ]);

        EstadoExamen::create([
            'descripcion' => 'En evaluación',
        ]);

        // Puedes agregar más usuarios según sea necesario
    }
}
