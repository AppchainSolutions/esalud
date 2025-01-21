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
        Schema::create('examen_pvt', function (Blueprint $table) {
            $table->id();
            $table->integer('paciente_id');
            $table->date('fecha_examen')->nullable();
            $table->date('fecha_control')->nullable();
            $table->string('nordico')->nullable();
            $table->string('quickdash')->nullable();
            $table->string('derivacion')->nullable();
            $table->string('comentario')->nullable();
            $table->timestampTz('created_at')->nullable()->default(DB::raw("now()"));
            $table->timestampTz('updated_at')->nullable()->default(DB::raw("now()"));
            $table->integer('estado_examen')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('examen_pvt');
    }
};
