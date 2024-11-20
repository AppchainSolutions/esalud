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
        Schema::create('examen_somnolencia', function (Blueprint $table) {
            $table->id();
            $table->integer('estatus_id')->nullable();
            $table->integer('paciente_id');
            $table->string('comentario')->nullable();
            $table->date('fecha_examen')->nullable();
            $table->date('fecha_primer')->nullable();
            $table->date('fecha_segundo')->nullable();
            $table->string('resultado')->nullable();
            $table->integer('nivel_riesgo')->nullable();
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('examen_somnolencia');
    }
};
