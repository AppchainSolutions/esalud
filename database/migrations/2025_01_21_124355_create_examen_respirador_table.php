<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('examen_respirador', function (Blueprint $table) {
            $table->id();
            $table->integer('paciente_id');
            $table->date('fecha_examen')->nullable();
            $table->string('prueba_ajuste')->nullable();
            $table->string('talla_respirador')->nullable();
            $table->string('modelo_marca')->nullable();
            $table->string('comentario')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('examen_respirador');
    }
};
