<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('examen_pvt', function (Blueprint $table) {
            $table->id();
            $table->date('fecha_control')->nullable();
            $table->date('fecha_examen')->nullable();
            $table->date('fecha_ingreso')->nullable();
            $table->date('fecha_prox_control')->nullable();
            $table->date('fecha_ult_control')->nullable();
            $table->integer('estado_examen')->nullable();
            $table->integer('paciente_id');
            $table->integer('idpgp')->nullable();
            $table->string('comentario')->nullable();
            $table->string('derivacion')->nullable();
            $table->string('nordico')->nullable();
            $table->string('quickdash')->nullable();
            $table->timestamp('fecha_notificacion')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('examen_pvt');
    }
};
