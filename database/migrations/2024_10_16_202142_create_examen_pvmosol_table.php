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
        Schema::create('examen_pvmosol', function (Blueprint $table) {
            $table->bigInteger('id')->primary();
            $table->integer('paciente_id');
            $table->integer('idpgp')->nullable();
            $table->string('comentario')->nullable();
            $table->date('fecha_control')->nullable();
            $table->date('fecha_ingreso')->nullable();
            $table->date('fecha_prox_control')->nullable();
            $table->date('fecha_ult_control')->nullable();
            $table->time('created_at')->nullable()->default(DB::raw("now()"));
            $table->time('updated_at')->nullable()->default(DB::raw("now()"));
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('examen_pvmosol');
    }
};
