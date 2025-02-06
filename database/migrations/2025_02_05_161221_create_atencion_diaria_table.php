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
        Schema::dropIfExists('atencion_diaria');
        
        Schema::create('atencion_diaria', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('paciente_id');
            $table->unsignedBigInteger('accidente_condicion')->nullable();
            $table->unsignedBigInteger('accidente')->nullable();
            $table->boolean('acompanado')->default(false);
            $table->boolean('alerta_she')->default(false);
            $table->string('at_realizada_por')->nullable();
            $table->unsignedBigInteger('calificacion')->nullable();
            $table->text('comentario')->nullable();
            $table->string('cuenta_acr')->nullable();
            $table->boolean('declaracion_completa')->default(false);
            $table->boolean('derivacion_inmediata')->default(false);
            $table->unsignedBigInteger('derivacion')->nullable();
            $table->text('descripcion_breve')->nullable();
            $table->integer('dias_descanso')->nullable();
            $table->unsignedBigInteger('error_critico')->nullable();
            $table->unsignedBigInteger('estado_mental')->nullable();
            $table->date('fecha_atencion')->nullable();
            $table->unsignedBigInteger('fuente_incidente')->nullable();
            $table->time('hora_inicio')->nullable();
            $table->time('hora_termino')->nullable();
            $table->unsignedBigInteger('lugar_atencion')->nullable();
            $table->text('medicamentos')->nullable();
            $table->unsignedBigInteger('medio_derivacion')->nullable();
            $table->string('motivo_consulta')->nullable();
            $table->string('nombre_supervisor')->nullable();
            $table->boolean('puede_reintegrarse')->default(false);
            $table->unsignedBigInteger('responsable')->nullable();
            $table->unsignedBigInteger('sistema_afectado')->nullable();
            $table->unsignedBigInteger('tipo_atencion')->nullable();
            $table->unsignedBigInteger('tipo_licencia')->nullable();
            $table->unsignedBigInteger('turno')->nullable();
            
            // Foreign key constraints
            $table->foreign('paciente_id')->references('id')->on('paciente');
            $table->foreign('accidente_condicion')->references('id')->on('accidente_condicion');
            $table->foreign('accidente')->references('id')->on('accidente');
            $table->foreign('calificacion')->references('id')->on('calificacion');
            $table->foreign('derivacion')->references('id')->on('derivacion');
            $table->foreign('error_critico')->references('id')->on('error_critico');
            $table->foreign('estado_mental')->references('id')->on('estado_mental');
            $table->foreign('fuente_incidente')->references('id')->on('fuente_incidente');
            $table->foreign('lugar_atencion')->references('id')->on('lugar_atencion');
            $table->foreign('medio_derivacion')->references('id')->on('medio_derivacion');
            $table->foreign('responsable')->references('id')->on('responsable');
            $table->foreign('sistema_afectado')->references('id')->on('sistema_afectado');
            $table->foreign('tipo_atencion')->references('id')->on('tipo_atencion');
            $table->foreign('tipo_licencia')->references('id')->on('tipo_licencia');
            $table->foreign('turno')->references('id')->on('turno');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('atencion_diaria');
    }
};
