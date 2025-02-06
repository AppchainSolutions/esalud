<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AccidenteCondicionSeeder extends Seeder
{
    public function run()
    {
        $condiciones = [
            ['id' => 1, 'nombre' => 'Leve'],
            ['id' => 2, 'nombre' => 'Moderado'],
            ['id' => 3, 'nombre' => 'Grave'],
            ['id' => 4, 'nombre' => 'Crítico'],
            ['id' => 5, 'nombre' => 'Potencialmente Mortal']
        ];

        DB::table('accidente_condicion')->insert($condiciones);
    }
}
