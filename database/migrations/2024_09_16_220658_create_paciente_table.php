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
            $table->id();
            $table->boolean('activo')->default('true');
            $table->boolean('donante')->default('false');
            $table->boolean('comunidad_lgbtq')->default('false');
            $table->boolean('credencial_discapacidad')->default('false');
            $table->boolean('pertenece_pie')->default('false');
            $table->date('fecha_nacimiento')->nullable();
            $table->integer('afp')->nullable();
            $table->integer('calle')->nullable();
            $table->integer('edad')->nullable();
            $table->integer('empresa')->nullable();
            $table->integer('estado_civil')->nullable();
            $table->integer('establecimiento_educacional')->nullable();
            $table->integer('genero')->nullable();
            $table->integer('grupo_sanguineo')->nullable();
            $table->integer('nivel_instruccion')->nullable();
            $table->integer('ley_social')->nullable();
            $table->integer('nacionalidad')->nullable();
            $table->integer('dg_nne_transitoria')->nullable();
            $table->integer('dg_nne_permanente')->nullable();
            $table->integer('previsión')->nullable();
            $table->integer('pueblo')->nullable();
            $table->integer('religion')->nullable();
            $table->integer('seguro')->nullable();
            $table->string('actividad_economica')->nullable();
            $table->string('apellidos')->nullable();
            $table->string('ciudad')->nullable();
            $table->string('direccion')->nullable();
            $table->string('email')->nullable();
            $table->string('modalidad')->nullable();
            $table->string('nombre');
            $table->string('ocupacion')->nullable();
            $table->string('password')->nullable();
            $table->string('profesion')->nullable();
            $table->string('remember_token');
            $table->string('rut');
            $table->string('telefono1')->nullable();
            $table->string('telefono2')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->timestamps();
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
