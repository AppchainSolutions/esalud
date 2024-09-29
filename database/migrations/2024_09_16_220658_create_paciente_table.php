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
            $table->boolean('comunidad_lgbtq')->default('false');
            $table->boolean('credencial_discapacidad')->default('false');
            $table->boolean('donante')->default('false');
            $table->boolean('pertenece_pie')->default('false');
            $table->date('fecha_nacimiento')->nullable();
            $table->integer('afp_id')->nullable();
            $table->integer('calle_id')->nullable();
           // $table->integer('dg_nne_permanente_id')->nullable();
           // $table->integer('dg_nne_transitoria_id')->nullable();
            $table->integer('edad')->nullable();
            $table->integer('establecimiento_educacional_id')->nullable();
            $table->integer('ley_social_id')->nullable();
            $table->integer('nacionalidad_id')->nullable();
            $table->integer('nivel_instruccion_id')->nullable();
            $table->integer('prevision_id')->nullable();
            $table->integer('pueblo_indigena_id')->nullable();
            $table->integer('religion_id')->nullable();
            $table->integer('seguro_salud_id')->nullable();
            $table->string('actividad_economica')->nullable();
            $table->string('apellidos')->nullable();
            $table->string('ciudad')->nullable();
            $table->string('direccion')->nullable();
            $table->string('email')->unique();
            $table->string('estado_civil')->nullable();
            $table->string('genero')->nullable();
            $table->string('grupo_sanguineo')->nullable();
            $table->string('modalidad')->nullable();
            $table->string('nombre');
            $table->string('ocupacion')->nullable();
            $table->string('password')->nullable();
            $table->string('profesion')->nullable();
            $table->string('remember_token')->nullable();
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
