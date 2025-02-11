<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Tablas de exámenes a modificar
     *
     * @var array
     */
    protected $tablas = [
        'examen_pvmoal',    // Examen Aldehido
        'examen_pvmohn',    // Examen Humo Negro
        'examen_ayd',       // Examen Alcohol y Drogas
        'examen_pvmom',     // Otros exámenes
        'examen_pvmor',
        'examen_pvmos',
        'examen_pvmosol',
        'examen_pvt',
        'examen_respirador',
        'examen_salud',
        'examen_somnolencia',
        'examen_psm',
        'examen_epo',
        'examen_equilibrio',
        'examen_asma'
    ];

    /**
     * Run the migrations.
     */
    public function up()
    {
        foreach ($this->tablas as $nombreTabla) {
            if (Schema::hasTable($nombreTabla)) {
                Schema::table($nombreTabla, function (Blueprint $table) use ($nombreTabla) {
                    if (!Schema::hasColumn($nombreTabla, 'fecha_prox_control')) {
                        $table->date('fecha_prox_control')->nullable()->after('fecha_control');
                    }
                });
            }
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        foreach ($this->tablas as $nombreTabla) {
            if (Schema::hasTable($nombreTabla)) {
                Schema::table($nombreTabla, function (Blueprint $table) use ($nombreTabla) {
                    if (Schema::hasColumn($nombreTabla, 'fecha_prox_control')) {
                        $table->dropColumn('fecha_prox_control');
                    }
                });
            }
        }
    }
};
