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
        Schema::create('examen_epo', function (Blueprint $table) {
            $table->integer('paciente_id');
            $table->text('comentario')->nullable();
            $table->date('fecha_realizacion')->nullable()->default('1900-01-01');
            $table->date('fecha_recepcion')->nullable()->default('1900-01-01');
            $table->date('fecha_solicitud')->nullable()->default('1900-01-01');
            $table->date('fecha_vencimiento')->nullable()->default('1900-01-01');
            $table->integer('numero_solicitud')->nullable();
            $table->string('resultado')->nullable();
            $table->integer('tipo_examen')->nullable();
            $table->timestampTz('created_at')->nullable()->default(DB::raw("now()"));
            $table->timestampTz('updated_at')->nullable()->default(DB::raw("now()"));
            $table->integer('semaforo')->nullable();
            $table->integer('estado_epo')->nullable();
            $table->integer('id')->primary();
            $table->integer('bateria')->nullable();
            $table->integer('codigo_verificacion')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('examen_epo');
    }
};
