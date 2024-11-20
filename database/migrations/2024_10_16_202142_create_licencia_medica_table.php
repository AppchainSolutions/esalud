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
        Schema::create('licencia_medica', function (Blueprint $table) {
            $table->id();
            $table->integer('paciente_id');
            $table->string('comentario')->nullable();
            $table->date('fecha_emision')->nullable();
            $table->date('fecha_inicio')->nullable();
            $table->date('fecha_recepcion')->nullable();
            $table->date('fecha_termino')->nullable();
            $table->integer('folio')->nullable();
            $table->timestampTz('created_at');
            $table->timestampTz('updated_at');
            $table->string('caract_reposo')->nullable();
            $table->string('lugar_reposo')->nullable();
            $table->string('tipo_licencia')->nullable();
            $table->string('titulo_profesional')->nullable();
            $table->string('nombre_profesional')->nullable();
            $table->boolean('recuperabilidad_laboral')->nullable()->default(false);
            $table->boolean('inicio_invalidez')->nullable()->default(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('licencia_medica');
    }
};
