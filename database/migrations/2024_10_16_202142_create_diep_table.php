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
        Schema::create('diep', function (Blueprint $table) {
            $table->bigInteger('id')->primary();
            $table->integer('paciente_id');
            $table->integer('seguro')->nullable();
            $table->string('comentario')->nullable();
            $table->date('fecha_admision')->nullable();
            $table->integer('folio')->nullable();
            $table->integer('numero_resolucion')->nullable();
            $table->string('origen_denuncia')->nullable();
            $table->integer('tipo_enfermedad')->nullable();
            $table->string('validado_por')->nullable();
            $table->timestamps();
            $table->integer('idpgp')->nullable();
            $table->string('enfermedad')->nullable();
            $table->string('estado_diep')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('diep');
    }
};
