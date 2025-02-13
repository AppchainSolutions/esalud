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
        Schema::create('examen_pvmor', function (Blueprint $table) {
            $table->integer('paciente_id');
            $table->integer('idpgp')->nullable();
            $table->string('comentario')->nullable();
            $table->date('fecha_control')->nullable();
            $table->date('fecha_ingreso')->nullable();
            $table->date('fecha_prox_control')->nullable();
            $table->date('fecha_ult_control')->nullable();
            $table->timestamps();

            $table->string('estatus')->nullable();
            $table->id();
            $table->integer('estado_examen')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('examen_pvmor');
    }
};
