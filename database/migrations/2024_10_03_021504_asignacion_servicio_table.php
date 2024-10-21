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
            $table->foreignId('paciente_id')->nullable()->constrained('paciente');
            $table->foreignId('profesional_id')->nullable()->constrained('profesional');
            $table->foreignId('especialidad_id')->nullable()->constrained('especialidad');
            $table->date('fecha_solicitud')->nullable();

            $table->boolean('personal_team');
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
