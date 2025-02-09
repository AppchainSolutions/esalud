<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Afp;
use App\Models\Area;
use App\Models\Ceco;
use App\Models\Empresa;
use App\Models\EstadoCivil;
use App\Models\Exposicion;
use App\Models\Genero;
use App\Models\GrupoSanguineo;
use App\Models\NivelInstruccion;
use App\Models\LeySocial;
use App\Models\Nacionalidad;
use App\Models\ModalidadAtencion;
use App\Models\Planta;
use App\Models\Prevision;
use App\Models\PuebloOriginario;
use App\Models\Religion;
use App\Models\SeguroSalud;
use App\Models\Unidad;

class DatabaseMasterSeeder extends Seeder
{
    public function run()
    {
        // Crear datos maestros básicos
        Afp::factory()->count(5)->create();
        Area::factory()->count(5)->create();
        Ceco::factory()->count(5)->create();
        Empresa::factory()->count(3)->create();
        EstadoCivil::factory()->count(5)->create();
        Exposicion::factory()->count(3)->create();
        Genero::factory()->count(3)->create();
        GrupoSanguineo::factory()->count(8)->create();
        NivelInstruccion::factory()->count(5)->create();
        LeySocial::factory()->count(3)->create();
        Nacionalidad::factory()->count(10)->create();
        ModalidadAtencion::factory()->count(3)->create();
        Planta::factory()->count(5)->create();
        Prevision::factory()->count(5)->create();
        PuebloOriginario::factory()->count(10)->create();
        Religion::factory()->count(10)->create();
        SeguroSalud::factory()->count(5)->create();
        Unidad::factory()->count(5)->create();
    }
}
