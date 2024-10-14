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
            $table->boolean('comunidad_lgbtq')->unsigned()->default(false);
            $table->boolean('credencial_discapacidad')->unsigned()->default(false);
            $table->boolean('donante')->unsigned()->default(false);
            $table->boolean('pertenece_pie')->unsigned()->default(false);
            $table->date('fecha_nacimiento')->nullable();
            $table->foreignId('calle_id')->nullable()->constrained();
            $table->foreignId('establecimiento_educacional_id')->nullable()->constrained();
            $table->foreignId('estado_civil_id')->nullable()->constrained();
            $table->foreignId('genero_id')->nullable()->constrained();
            $table->foreignId('grupo_sanguineo_id')->nullable()->constrained();
            $table->foreignId('nacionalidad_id')->nullable()->constrained();
            $table->foreignId('nivel_instruccion_id')->nullable()->constrained();
            $table->foreignId('prevision_id')->nullable()->constrained();
            $table->foreignId('pueblo_originario_id')->nullable()->constrained();
            $table->foreignId('religion_id')->nullable()->constrained();
            $table->id();
            $table->integer('edad')->nullable();
            $table->string('apellidos')->nullable();
            $table->string('ciudad')->nullable();
            $table->string('direccion')->nullable();
            $table->string('email')->unique();
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
            $table->string('nombre_responsable')->nullable();
            $table->string('apellido_responsable')->nullable();
            $table->string('telefono_responsable')->nullable();
            $table->string('rut_responsable')->nullable();
            $table->string('direccion_responsable')->nullable();
            $table->string('email_responsable')->nullable();
            $table->string('parentesco_responsable')->nullable();
            $table->string('ocupacion_responsable')->nullable();
            $table->foreignId('pueblo_originario_responsable_id')->nullable()->constrained('pueblo_originario');
            $table->foreignId('nivel_instruccion_responsable_id')->nullable()->constrained('nivel_instruccion');
            $table->foreignId('religion_responsable_id')->nullable()->constrained('religion');
            $table->date('fecha_nacimiento_responsable')->nullable();
            $table->integer('edad')->nullable();
            $table->foreignId('genero_responsable_id')->nullable()->constrained('genero');
            $table->foreignId('nacionalidad_responsable_id')->nullable()->constrained('nacionalidad');
            $table->boolean('comunidad_lgtbq_responsable_id')->default(false);
            $table->boolean('credencial_discapacidad_responsable_id')->default(false);
            $table->foreignId('estado_civil_responsable_id')->nullable()->constrained('estado_civil');
            $table->foreignId('prevision_responsable_id')->nullable()->constrained('prevision');
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
