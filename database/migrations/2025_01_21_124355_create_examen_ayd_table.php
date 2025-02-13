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
        Schema::create('examen_ayd', function (Blueprint $table) {
            $table->id();
            $table->integer('paciente_id');
            $table->string('idpgp');
            $table->date('fecha_control');
            $table->date('fecha_ult_control');
            $table->date('fecha_prox_control')->nullable();
            $table->date('fecha_vencimiento')->nullable();
            $table->timestamp('fecha_notificacion')->nullable();
            $table->string('test_drogas');
            $table->string('item');
            $table->text('comentario');
            $table->string('estado_examen');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('examen_ayd');
    }
};
