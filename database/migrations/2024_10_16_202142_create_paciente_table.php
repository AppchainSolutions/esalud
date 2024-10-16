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
            $table->bigInteger('id')->primary();
            $table->string('rut')->unique();
            $table->string('nombre');
            $table->string('apellidos');
            $table->string('actividad_economica')->nullable();
            $table->integer('seguro')->nullable();
            $table->integer('afp')->nullable();
            $table->integer('ceco')->nullable();
            $table->integer('area')->nullable();
            $table->string('cargo')->nullable();
            $table->string('ciudad')->nullable();
            $table->string('direccion')->nullable();
            $table->boolean('donante')->nullable()->default(false);
            $table->integer('edad')->nullable();
            $table->string('email')->nullable();
            $table->integer('empresa')->nullable();
            $table->integer('estado_civil')->nullable();
            $table->string('exposicion')->nullable();
            $table->date('fecha_nacimiento')->nullable();
            $table->integer('grupo_sanguineo')->nullable();
            $table->integer('instruccion')->nullable();
            $table->integer('ley_social')->nullable();
            $table->string('ocupacion')->nullable();
            $table->integer('planta')->nullable();
            $table->integer('prevision')->nullable();
            $table->string('profesion')->nullable();
            $table->integer('pueblo')->nullable();
            $table->integer('religion')->nullable();
            $table->string('telefono1')->nullable();
            $table->string('telefono2')->nullable();
            $table->integer('unidad')->nullable();
            $table->timestamp('created_at')->nullable()->default(DB::raw("now()"));
            $table->timestamp('updated_at')->nullable()->default(DB::raw("now()"));
            $table->integer('genero')->nullable();
            $table->string('modalidad')->nullable();
            $table->string('areatxt')->nullable();
            $table->boolean('activo')->nullable()->default(true);
            $table->integer('nacionalidad')->nullable();
            $table->string('email_verified_at')->nullable();
            $table->string('remember_token')->nullable();
            $table->string('password')->nullable();
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
