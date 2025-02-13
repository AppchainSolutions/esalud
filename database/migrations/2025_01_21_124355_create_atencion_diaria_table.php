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
        Schema::create('atencion_diaria', function (Blueprint $table) {
            $table->id();
            $table->integer('paciente_id')->default(0);
            $table->integer('accidente')->nullable()->default(0);
            $table->integer('accidente_condicion')->nullable()->default(0);
            $table->boolean('alerta_she')->nullable()->default(false);
            $table->string('at_realizada_por')->nullable();
            $table->boolean('cuenta_acr')->nullable()->default(false);
            $table->boolean('declaracion_completa')->nullable()->default(false);
            $table->integer('derivacion')->nullable()->default(0);
            $table->boolean('derivacion_inmediata')->nullable()->default(false);
            $table->string('descripcion_breve')->nullable();
            $table->integer('dias_descanso')->nullable()->default(0);
            $table->integer('error_critico')->nullable()->default(0);
            $table->integer('estado_mental')->nullable()->default(0);
            $table->date('fecha_atencion')->nullable();
            $table->integer('fuente_incidente')->nullable()->default(0);
            $table->time('hora_inicio')->nullable();
            $table->time('hora_termino')->nullable();
            $table->integer('lugar_atencion')->nullable()->default(0);
            $table->string('medicamentos')->nullable();
            $table->integer('medio_derivacion')->nullable()->default(0);
            $table->string('motivo_consulta')->nullable();
            $table->string('nombre_supervisor')->nullable();
            $table->boolean('puede_reintegrarse')->nullable();
            $table->string('RECA')->nullable();
            $table->integer('responsable')->nullable()->default(0);
            $table->integer('sistema_afectado')->nullable()->default(0);
            $table->integer('tipo_atencion')->nullable()->default(0);
            $table->integer('tipo_licencia')->nullable()->default(0);
            $table->integer('turno')->nullable()->default(0);
            $table->boolean('acompanado')->nullable()->default(false);
            $table->text('comentario')->nullable();
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
