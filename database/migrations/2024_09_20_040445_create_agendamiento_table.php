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
        Schema::create('agendamiento', function (Blueprint $table) {
            $table->id();
            $table->integer('horario_id');
            $table->date('fecha_atencion');
            $table->time('hora_agenda_ini');
            $table->time('hora_agenda_fin');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('agendamiento');
    }
};
