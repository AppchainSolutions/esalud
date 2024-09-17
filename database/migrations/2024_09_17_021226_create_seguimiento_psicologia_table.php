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
        Schema::create('seguimiento_psicologia', function (Blueprint $table) {
            $table->id();
            $table->integer('paciente_id');
            $table->integer('profesional_id');
            $table->date('fecha_ingreso');
            $table->integer('sesiones_totales');
            $table->integer('sesiones_ocupadas');
            $table->boolean('asiste')->default('false');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('seguimiento_psicologia');
    }
};
