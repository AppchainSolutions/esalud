<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('plan_trabajo', function (Blueprint $table) {
            $table->id();
            $table->integer('profesional_id');
            $table->integer('paciente_id');
            $table->integer('diganostico_dsm_cie');
            $table->string('motivo_consulta');
            $table->integer('num_Sesiones');
            $table->integer('NNAJ');
            $table->string('problemas');
            $table->string('facilitadores');
            $table->string('obstaculizadores');
            $table->string('tratamientos_anteriores');
            $table->string('derivado_desde');
            $table->string('comentario');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('plan_trabajo');
    }
};
