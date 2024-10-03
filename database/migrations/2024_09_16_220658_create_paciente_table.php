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
            $table->boolean('activo')->unsigned()->default(true);
            $table->boolean('comunidad_lgbtq')->unsigned()->default(false);
            $table->boolean('credencial_discapacidad')->unsigned()->default(false);
            $table->boolean('donante')->unsigned()->default(false);
            $table->boolean('pertenece_pie')->unsigned()->default(false);
            $table->date('fecha_nacimiento')->nullable();
            $table->foreignId('afp_id')->nullable()->constrained('afp');
            $table->foreignId('calle_id')->nullable()->constrained('calle');
            $table->foreignId('establecimiento_educacional_id')->nullable()->constrained('establecimiento_educacional');
            $table->foreignId('estado_civil_id')->nullable()->constrained('estado_civil');
            $table->foreignId('genero_id')->nullable()->constrained('genero');
            $table->foreignId('grupo_sanguineo_id')->nullable()->constrained('grupo_Sanguineo');
            $table->foreignId('ley_social_id')->nullable()->constrained('ley_social');
            $table->foreignId('modalidad_id')->nullable()->constrained('modalidad');
            $table->foreignId('nacionalidad_id')->nullable()->constrained('nacionalidad');
            $table->foreignId('nivel_instruccion_id')->nullable()->constrained('nivel_instruccion');
            $table->foreignId('prevision_id')->nullable()->constrained('prevision');
            $table->foreignId('pueblo_originario_id')->nullable()->constrained('pueblo_originario');
            $table->foreignId('religion_id')->nullable()->constrained('religion');
            $table->foreignId('seguro_salud_id')->nullable()->constrained('seguro_salud');
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
