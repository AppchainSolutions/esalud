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
        Schema::create('vacuna', function (Blueprint $table) {
            $table->bigInteger('id')->primary();
            $table->integer('paciente_id');
            $table->string('vacuna')->nullable();
            $table->string('tipo_vacuna')->nullable();
            $table->string('fecha_vacuna')->nullable();
            $table->string('comentario')->nullable();
            $table->timestampTz('created_at')->nullable()->default(DB::raw("now()"));
            $table->timestampTz('updated_at')->nullable()->default(DB::raw("now()"));
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vacuna');
    }
};
