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
        Schema::create('profesional', function (Blueprint $table) {
            $table->binary('foto')->nullable();
            $table->foreignId('especialidad_id')->constrained('especialidad');
            $table->id();
            $table->boolean('vigente')->default(true);
            $table->string('apellidos');
            $table->string('direccion')->nullable();
            $table->string('email')->nullable();
            $table->date('fecha_nacimiento')->nullable();
            $table->string('nombre');
            $table->string('rut');
            $table->string('telefono')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profesional');
    }
};