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

            // Relación polimórfica con exámenes
            $table->morphs('examinable');

            // Información del paciente
            $table->foreignId('paciente_id')
                ->constrained('paciente')
                ->onDelete('cascade');

            // Detalles de la notificación
            $table->string('tipo_examen');
            $table->enum('estado', ['pendiente', 'enviada', 'fallida'])
                ->default('pendiente');
            $table->enum('canal_notificacion', ['email', 'sms', 'base_datos'])
                ->default('email');

            // Fechas relevantes
            $table->date('fecha_control')->nullable();
            $table->date('fecha_prox_control')->nullable();
            $table->timestamp('fecha_notificacion')->nullable();
            $table->timestamp('fecha_envio')->nullable();

            // Reintentos y seguimiento
            $table->integer('intentos')->default(0);
            $table->text('mensaje_error')->nullable();

            $table->timestamps();

            // Índices para optimizar consultas
            // $table->index(['examinable_type', 'examinable_id']);
            // $table->index('paciente_id');
            // $table->index('estado');
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
