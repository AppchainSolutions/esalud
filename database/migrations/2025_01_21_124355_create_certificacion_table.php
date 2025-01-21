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
        Schema::create('certificacion', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('paciente_id')->nullable();
            $table->string('certificacion')->nullable();
            $table->date('fecha_certificacion')->nullable();
            $table->date('fecha_caducidad')->nullable();
            $table->integer('estado_certificacion')->nullable();
            $table->timestampTz('created_at')->nullable()->default(DB::raw("now()"));
            $table->timestampTz('updated_at')->nullable()->default(DB::raw("now()"));
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('certificacion');
    }
};
