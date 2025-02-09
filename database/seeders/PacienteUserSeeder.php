<?php

namespace Database\Seeders;

use App\Models\AtencionDiaria;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Models\Paciente;

class PacienteUserSeeder extends Seeder
{
    public function run()
    {
        // DB::table('users')->truncate();
        // DB::table('paciente')->truncate();
        //DB::table('citas')->truncate();
        // DB::table('consultas')->truncate();
        // DB::table('examenes')->truncate();
        // DB::table('vacunas')->truncate();
        // DB::table('tratamientos')->truncate();
       
        Paciente::factory()->count(1)->create();
        //Log::info($paciente);

        // Insertar datos de prueba
        //$this->insertarAtencionesDiarias($pacienteId);
        /* $this->insertAlergias($pacienteId);
        $this->insertCirugiasEnfermedades($pacienteId);
        $this->insertFactoresRiesgo($pacienteId);
        $this->insertEnfermedad($pacienteId);
        $this->insertMedicamentos($pacienteId);
        $this->insertVacuna($pacienteId);
        $this->insertAntecedentesFamiliares($pacienteId);
        $this->insertLicencias($pacienteId);
        $this->insertDiat($pacienteId);
        $this->insertDiep($pacienteId);
        $this->insertExamenAlcohol($pacienteId);
        $this->insertExamenAldehido($pacienteId);
        $this->insertExamenAsma($pacienteId);
        $this->insertExamenEpo($pacienteId);
        $this->insertExamenEquilibrio($pacienteId);
        $this->insertExamenHumoNegro($pacienteId);
        $this->insertExamenMetales($pacienteId);
        $this->insertExamenPsico($pacienteId);
        $this->insertExamenPVTMertDiep($pacienteId);
        $this->insertExamenRespirador($pacienteId);
        $this->insertExamenRuido($pacienteId);
        $this->insertExamenSalud($pacienteId);
        $this->insertExamenSilice($pacienteId);
        $this->insertExamenSolvente($pacienteId);
        $this->insertExamenSomnolencia($pacienteId); */

        //$this->insert($pacienteId);

    }

    // private function insertarAtencionesDiarias($pacienteId)
    // {
    //     AtencionDiaria::factory()->count(4)->create([
    //         'paciente_id' => $pacienteId,
    //     ]);
    // }
}
