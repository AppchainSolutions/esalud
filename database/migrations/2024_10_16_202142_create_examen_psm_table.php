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
        Schema::create('examen_psm', function (Blueprint $table) {
            $table->id();
            $table->integer('estado_id')->nullable();
            $table->integer('paciente_id');
            $table->string('contraindicacion')->nullable();
            $table->date('fecha_solicitud')->nullable();
            $table->date('fecha_realizacion')->nullable();
            $table->date('fecha_recepcion')->nullable();
            $table->date('fecha_vencimiento')->nullable();
            $table->integer('dias_restantes')->nullable();
            $table->string('comentario')->nullable();
            $table->string('tipo_vehiculo')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('examen_psm');
    }
};
