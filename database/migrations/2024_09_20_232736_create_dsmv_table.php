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
        Schema::create('dsmv', function (Blueprint $table) {
            $table->id();
            $table->integer('categoria_dsmv');
            $table->string('trastorno_dsmv');
            $table->string('codigo_dsmv');
            $table->string('codigo_cie11');
            $table->string('criterios_claves_dsmv');
            $table->string('niveles_gravedad_dsmv');
            $table->string('notas_concordancia_cie11');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dsmv');
    }
};
