<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\AtencionDiaria;

class TestAtencionDiariaFactory extends Command
{
    protected $signature = 'test:atencion-diaria-factory';
    protected $description = 'Prueba la generación de registros de Atención Diaria';

    public function handle()
    {
        try {
            $registros = AtencionDiaria::factory()->count(5)->create();
            $this->info('Se crearon ' . $registros->count() . ' registros de Atención Diaria');
        } catch (\Exception $e) {
            $this->error('Error al crear registros: ' . $e->getMessage());
        }
    }
}
