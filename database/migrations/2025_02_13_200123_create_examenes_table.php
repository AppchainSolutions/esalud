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
        Schema::create('examenes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('paciente_id');
            $table->string('tipo_examen');
            $table->date('fecha_realizacion')->nullable();
            $table->date('fecha_prox_control')->nullable();
            $table->enum('estado', ['pendiente', 'realizado', 'vencido'])->default('pendiente');
            $table->text('observaciones')->nullable();
            $table->timestamps();

            $table->foreign('paciente_id')
                  ->references('id')
                  ->on('pacientes')
                  ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('examenes');
    }
};
