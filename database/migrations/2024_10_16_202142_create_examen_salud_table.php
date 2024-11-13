<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('examen_salud', function (Blueprint $table) {
            $table->bigInteger('id')->primary();
            $table->integer('paciente_id');
            $table->string('colesterol_hdl')->nullable();
            $table->string('colesterol_ldl')->nullable();
            $table->string('colesterol_total')->nullable();
            $table->string('comentario')->nullable();
            $table->string('creatinemia')->nullable();
            $table->string('ecg')->nullable();
            $table->string('espirometria')->nullable();
            $table->string('estatus')->nullable();
            $table->date('fecha_recepcion')->nullable();
            $table->string('framingham')->nullable();
            $table->string('glicemia')->nullable();
            $table->string('hba1c')->nullable();
            $table->string('hemoglobina')->nullable();
            $table->string('hemograma')->nullable();
            $table->string('optometria')->nullable();
            $table->string('trigliceridos')->nullable();
            $table->timestampTz('created_at');
            $table->timestampTz('updated_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('examen_salud');
    }
};
