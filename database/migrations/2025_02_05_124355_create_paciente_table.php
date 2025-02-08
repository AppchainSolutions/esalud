<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('paciente', function (Blueprint $table) {
            $table->id();
            $table->boolean('activo')->nullable()->default(true);
            $table->boolean('cuenta_activada')->default(false);
            $table->boolean('donante')->nullable()->default(false);
            $table->boolean('protocolo_minsal')->nullable()->default(false);
            $table->date('fecha_nacimiento')->nullable();
            $table->foreignId('afp')->nullable();
            $table->foreignId('area')->nullable();
            $table->foreignId('ceco')->nullable();
            $table->foreignId('edad')->nullable();
            $table->foreignId('empresa')->nullable();
            $table->foreignId('estado_civil')->nullable();
            $table->foreignId('genero')->nullable();
            $table->foreignId('grupo_sanguineo')->nullable();
            $table->foreignId('ley_social')->nullable();
            $table->foreignId('nacionalidad')->nullable();
            $table->foreignId('nivel_instruccion')->nullable();
            $table->foreignId('planta')->nullable();
            $table->foreignId('prevision')->nullable();
            $table->foreignId('pueblo_originario')->nullable();
            $table->foreignId('religion')->nullable();
            $table->foreignId('seguro_salud')->nullable();
            $table->foreignId('unidad')->nullable();
            $table->foreignId('user_id')->nullable()->constrained()->onDelete('set null');
            $table->string('actividad_economica')->nullable();
            $table->string('apellidos');
            $table->string('areatxt')->nullable();
            $table->string('cargo')->nullable();
            $table->string('ciudad')->nullable();
            $table->string('direccion')->nullable();
            $table->string('email_verified_at')->nullable();
            $table->string('email')->unique();
            $table->string('exposicion')->nullable();
            $table->string('modalidad_atencion')->nullable();
            $table->string('nombre');
            $table->string('ocupacion')->nullable();
            $table->string('password')->nullable();
            $table->string('profesion')->nullable();
            $table->string('remember_token')->nullable();
            $table->string('rut')->unique();
            $table->string('telefono1')->nullable();
            $table->string('telefono2')->nullable();
            $table->string('token_activacion')->nullable();
            $table->timestamp('token_activacion_expira')->nullable();
            $table->softDeletes();
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
