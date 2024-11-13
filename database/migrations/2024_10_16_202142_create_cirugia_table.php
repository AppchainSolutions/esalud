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
        Schema::create('cirugia', function (Blueprint $table) {
            $table->id();
            $table->integer('paciente_id');
            $table->string('cirugia')->nullable();
            $table->string('comentario')->nullable();
            $table->timestampsTz();
            $table->string('fecha_cirugia')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cirugia');
    }
};
