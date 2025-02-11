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
        Schema::create('notificaciones', function (Blueprint $table) {
            $table->id();
            $table->morphs('examinable'); // Relación polimórfica con exámenes
            $table->unsignedBigInteger('paciente_id');
            $table->string('tipo_examen');
            $table->enum('estado', ['pendiente', 'enviada', 'fallida', 'pendiente_activacion'])->default('pendiente');
            $table->timestamp('fecha_control')->nullable();
            $table->timestamp('fecha_prox_control')->nullable();
            $table->timestamp('fecha_notificacion')->nullable();
            $table->integer('intentos')->default(0);
            $table->timestamps();

            $table->foreign('paciente_id')
                  ->references('id')
                  ->on('paciente')
                  ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notificaciones');
    }
};
