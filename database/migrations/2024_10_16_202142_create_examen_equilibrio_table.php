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
        Schema::create('examen_equilibrio', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('paciente_id');
            $table->date('fecha_examen')->nullable();
            $table->string('comentario')->nullable();
            $table->timestamps();
            $table->string('resultado', 10)->nullable()->default('"No Apto"');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('examen_equilibrio');
    }
};
