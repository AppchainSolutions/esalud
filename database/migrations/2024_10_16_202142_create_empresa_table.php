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
        Schema::create('empresa', function (Blueprint $table) {
            $table->id();
            $table->string('direccion')->nullable();
            $table->string('email')->nullable();
            $table->string('descripcion');
            $table->string('razon_social')->nullable();
            $table->string('representante')->nullable();
            $table->string('responsable')->nullable();
            $table->string('telefono')->nullable();
            $table->timestamp('created_at');
            $table->timestamp('updated_at');
            $table->string('rut', 20)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('empresa');
    }
};
