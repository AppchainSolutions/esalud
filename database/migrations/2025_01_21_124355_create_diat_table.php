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
        Schema::create('diat', function (Blueprint $table) {
            $table->integer('paciente_id');
            $table->integer('accidente')->nullable();
            $table->integer('seguro_salud')->nullable();
            $table->string('comentario')->nullable();
            $table->date('fecha_admision')->nullable();
            $table->integer('folio')->nullable();
            $table->integer('numero_resolucion')->nullable();
            $table->string('origen_denuncia')->nullable();
            $table->string('sucursal')->nullable();
            $table->integer('tipo_accidente')->nullable();
            $table->integer('idpgp')->nullable();
            $table->string('validado_por')->nullable();
            $table->integer('estado_diat')->nullable();
            $table->id();
            $table->boolean('aprobado')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('diat');
    }
};
