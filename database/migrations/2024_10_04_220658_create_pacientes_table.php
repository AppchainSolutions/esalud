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
        Schema::create('pacientes', function (Blueprint $table) {
            $table->boolean('comunidad_lgbtq')->default(false);
            $table->boolean('comunidad_lgbtq_responsable')->default(false);
            $table->boolean('credencial_discapacidad_responsable')->default(false);
            $table->boolean('credencial_discapacidad')->default(false);
            $table->boolean('donante')->default(false);
            $table->boolean('donante_responsable')->default(false);
            $table->boolean('pertenece_pie')->default(false);
            $table->date('fecha_nacimiento_responsable')->nullable();
            $table->date('fecha_nacimiento')->nullable();
            $table->foreignId('calle_id')->nullable()->constrained('calles')->onDelete('cascade');
            $table->foreignId('calle_responsable_id')->nullable()->constrained('calles')->onDelete('cascade');
            $table->foreignId('establecimiento_educacional_id')->nullable()->constrained('establecimientos_educacionales')->onDelete('cascade');
            $table->foreignId('estado_civil_id')->nullable()->constrained('estados_civiles')->onDelete('cascade');
            $table->foreignId('estado_civil_responsable_id')->nullable()->constrained('estados_civiles')->onDelete('cascade');
            $table->foreignId('genero_id')->nullable()->constrained('generos')->onDelete('cascade');
            $table->foreignId('genero_responsable_id')->nullable()->constrained('generos')->onDelete('cascade');
            $table->foreignId('grupo_sanguineo_id')->nullable()->constrained('grupos_sanguineos')->onDelete('cascade');
            $table->foreignId('grupo_sanguineo_responsable_id')->nullable('grupos_sanguineos')->constrained('grupos_sanguineos')->onDelete('cascade');
            $table->foreignId('nacionalidad_id')->nullable()->constrained('nacionalidades')->onDelete('cascade');
            $table->foreignId('nacionalidad_responsable_id')->nullable()->constrained('nacionalidades')->onDelete('cascade');
            $table->foreignId('nivel_instruccion_id')->nullable()->constrained('niveles_instruccion')->onDelete('cascade');
            $table->foreignId('nivel_instruccion_responsable_id')->nullable()->constrained('niveles_instruccion')->onDelete('cascade');
            $table->foreignId('prevision_id')->nullable()->constrained('previsiones')->onDelete('cascade');
            $table->foreignId('prevision_responsable_id')->nullable()->constrained('previsiones')->onDelete('cascade');
            $table->foreignId('pueblo_originario_id')->nullable()->constrained('pueblos_originarios')->onDelete('cascade');
            $table->foreignId('pueblo_originario_responsable_id')->nullable()->constrained('pueblos_originarios')->onDelete('cascade');
            $table->foreignId('religion_id')->nullable()->constrained('religiones')->onDelete('cascade');
            $table->foreignId('religion_responsable_id')->nullable()->constrained('religiones')->onDelete('cascade');
            $table->id();
            $table->integer('edad')->nullable();
            $table->integer('edad_responsable')->nullable();
            $table->string('apellidos_responsable')->nullable();
            $table->string('apellidos');
            $table->string('ciudad')->nullable();
            $table->string('ciudad_responsable')->nullable();
            $table->string('direccion_responsable')->nullable();
            $table->string('direccion')->nullable();
            $table->string('email_responsable')->nullable();
            $table->string('email')->unique();
            $table->string('nombre_responsable')->nullable();
            $table->string('nombre');
            $table->string('ocupacion_responsable')->nullable();
            $table->string('ocupacion')->nullable();
            $table->string('parentesco_responsable')->nullable();
            $table->string('password')->nullable();
            $table->string('profesor')->nullable();
            $table->string('remember_token')->nullable();
            $table->string('rut_responsable')->nullable();
            $table->string('rut')->unique();
            $table->string('telefono_responsable')->nullable();
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
        Schema::dropIfExists('pacientes');
    }
};
