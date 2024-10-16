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
        Schema::create('examen_somnolencia', function (Blueprint $table) {
            $table->bigInteger('id')->primary();
            $table->integer('paciente_id');
            $table->string('comentario')->nullable();
            $table->date('fecha_examen')->nullable();
            $table->date('fecha_primer')->nullable();
            $table->date('fecha_segundo')->nullable();
            $table->string('resultado')->nullable();
            $table->timestampTz('created_at')->nullable()->default(DB::raw("now()"));
            $table->timestampTz('updated_at')->nullable()->default(DB::raw("now()"));
            $table->integer('nivel_riesgo')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('examen_somnolencia');
    }
};
