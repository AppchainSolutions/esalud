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
        Schema::create('horario_profesional', function (Blueprint $table) {
            $table->id();
            $table->integer('profesional_id');
            $table->string('dia_semana_horario_profesional');
            $table->string('hora_semana_horario_profesional_ini');
            $table->string('hora_semana_horario_profesional_termino');
            $table->integer('disponibilidad_box_id');
            $table->boolean('disponible')->default('true');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('horario_profesional');
    }
};
