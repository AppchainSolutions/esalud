<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        DB::statement("CREATE VIEW \"ListaCorreos\" AS SELECT examen_epo.fecha_vencimiento,
    examen_epo.numero_solicitud,
    paciente.rut,
    paciente.nombre,
    paciente.apellidos,
    bateria.descripcion AS bateria,
    paciente.activo
   FROM ((paciente
     JOIN examen_epo ON ((paciente.id = examen_epo.paciente_id)))
     JOIN bateria ON ((examen_epo.bateria_id = bateria.id)))
  WHERE ((examen_epo.fecha_vencimiento >= '2024-12-15'::date) AND (examen_epo.fecha_vencimiento <= '2024-12-22'::date) AND (paciente.activo = true))
  ORDER BY examen_epo.fecha_vencimiento;");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::statement("DROP VIEW IF EXISTS \"ListaCorreos\"");
    }
};
