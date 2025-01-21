<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('examen_pvmom', function (Blueprint $table) {
            $table->integer('paciente_id');
            $table->integer('idpgp')->nullable();
            $table->string('comentario')->nullable();
            $table->date('fecha_ingreso')->nullable();
            $table->date('fecha_prox_control')->nullable();
            $table->date('fecha_ult_control')->nullable();
            $table->timestampTz('created_at')->nullable()->default(DB::raw("now()"));
            $table->timestampTz('updated_at')->nullable()->default(DB::raw("now()"));
            $table->integer('estado_examen')->nullable();
            $table->increments('id');
            $table->date('fecha_control')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('examen_pvmom');
    }
};
