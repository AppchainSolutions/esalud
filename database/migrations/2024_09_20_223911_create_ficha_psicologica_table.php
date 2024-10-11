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
        Schema::create('ficha_psicologica', function (Blueprint $table) {
            $table->id();
            $table->integer('paciente_id');
            $table->integer('genograma');
            $table->integer('ecomapa');
            $table->integer('factores_riesgo');
            $table->integer('factores_protectores');
            $table->string('tratamientos_anteriores');
            $table->string('tratamientos_actual');
            $table->string('tratamientos_farmacológico');
            $table->string('tratamientos_comunitario');
            $table->string('red_apoyo_comunitario');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ficha_psicologica');
    }
};
