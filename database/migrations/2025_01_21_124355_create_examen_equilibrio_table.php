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
            $table->id();
            $table->integer('paciente_id');
            $table->date('fecha_examen')->nullable();
            $table->timestamp('fecha_notificacion')->nullable();
            $table->string('comentario')->nullable();
            $table->string('resultado', 10)->nullable()->default('"No Apto"');
            $table->timestamps();
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
