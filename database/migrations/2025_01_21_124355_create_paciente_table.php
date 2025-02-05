<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
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
            $table->string('rut')->unique();
            $table->string('nombre');
            $table->string('apellidos');
            $table->string('actividad_economica')->nullable();
            $table->foreignId('seguro')->nullable();
            $table->foreignId('user_id')->nullable()->constrained()->onDelete('set null');
            $table->foreignId('afp')->nullable();
            $table->foreignId('ceco')->nullable();
            $table->foreignId('area')->nullable();
            $table->string('cargo')->nullable();
            $table->string('ciudad')->nullable();
            $table->string('direccion')->nullable();
            $table->boolean('donante')->nullable()->default(false);
            $table->foreignId('edad')->nullable();
            $table->string('email')->nullable();
            $table->foreignId('empresa')->nullable();
            $table->foreignId('estado_civil')->nullable();
            $table->string('exposicion')->nullable();
            $table->date('fecha_nacimiento')->nullable();
            $table->foreignId('grupo_sanguineo')->nullable();
            $table->foreignId('instruccion')->nullable();
            $table->foreignId('ley_social')->nullable();
            $table->string('ocupacion')->nullable();
            $table->foreignId('planta')->nullable();
            $table->foreignId('prevision')->nullable();
            $table->string('profesion')->nullable();
            $table->foreignId('pueblo')->nullable();
            $table->foreignId('religion')->nullable();
            $table->string('telefono1')->nullable();
            $table->string('telefono2')->nullable();
            $table->foreignId('unidad')->nullable();
            $table->timestamp('created_at')->nullable()->default(DB::raw("now()"));
            $table->timestamp('updated_at')->nullable()->default(DB::raw("now()"));
            $table->foreignId('genero')->nullable();
            $table->string('modalidad')->nullable();
            $table->string('areatxt')->nullable();
            $table->boolean('activo')->nullable()->default(true);
            $table->foreignId('nacionalidad')->nullable();
            $table->string('email_verified_at')->nullable();
            $table->string('remember_token')->nullable();
            $table->string('password')->nullable();
            $table->boolean('protocolo_minsal')->nullable()->default(false);
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
