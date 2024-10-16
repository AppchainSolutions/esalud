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
        Schema::create('paciente', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->string('rut');
            $table->string('nombre');
            $table->string('apellidos');
            $table->string('actividad_economica');
            $table->integer('seguro');
            $table->integer('afp');
            $table->integer('ceco');
            $table->integer('area');
            $table->string('cargo');
            $table->timestamp('email_verified_at');
            $table->string('password');
            $table->string('remember_token');
            $table->string('email');
            $table->string('ciudad');
            $table->string('direccion');
            $table->boolean('donante');
            $table->integer('edad');
            $table->integer('empresa');
            $table->integer('estado_civil');
            $table->date('fecha_nacimiento');
            $table->integer('grupo_sanguineo');
            $table->integer('instruccion');
            $table->integer('ley_social');
            $table->string('ocupacion');
            $table->integer('previsión');
            $table->string('profesion');
            $table->string('modalidad');
            $table->integer('pueblo');
            $table->integer('religion');
            $table->string('telefono1');
            $table->string('telefono2');
            $table->integer('genero');
            $table->boolean('activo');
            $table->integer('nacionalidad');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('paciente');
    }
};
