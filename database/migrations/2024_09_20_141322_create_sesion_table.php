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
        Schema::create('sesion', function (Blueprint $table) {
            $table->id();
            $table->integer('agendamiento_id');
            $table->text('registro_sesion');
            $table->integer('tipo_sesion_id');
            $table->string('objetivos_sesion');
            $table->string('compromisos_sesion');
            $table->string('acuerdos_sesion');
            $table->string('evaluacion_sesion');
            $table->integer('logro_objetivos_sesion');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sesion');
    }
};
