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
        Schema::create('asignacion_servicio', function (Blueprint $table) {
            $table->id();
            $table->integer('servicio');
            $table->integer('dias_atencion');
            $table->integer('num_sesiones');
            $table->integer('hora_atencion');
            $table->integer('profesional');
            $table->integer('disponibilidad_horaria');
            $table->string('comentario');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('asignacion_servicio');
    }
};
