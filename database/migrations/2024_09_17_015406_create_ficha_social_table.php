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
        Schema::create('ficha_social', function (Blueprint $table) {
            $table->id();
            $table->integer('paciente_id');
            $table->integer('tipo_vivienda');
            $table->integer('sector_vivienda');
            $table->string('cuenta_servicios');
            $table->integer('sector_servicios');
            $table->integer('material_vivienda');
            $table->string('fuente_ingresos');
            $table->boolean('vivienda_riesgo');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ficha_social');
    }
};
