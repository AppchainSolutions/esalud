<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('estado_diat', function (Blueprint $table) {
            $table->id();
            $table->string('descripcion')->unique();
            $table->timestamps();
        });

        // Insertar estados predefinidos
        DB::table('estado_diat')->insert([
            ['id' => 1, 'descripcion' => 'Ingresado', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 2, 'descripcion' => 'En Revisión', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 3, 'descripcion' => 'Validado', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 4, 'descripcion' => 'Rechazado', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 5, 'descripcion' => 'Pendiente', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 6, 'descripcion' => 'Cerrado', 'created_at' => now(), 'updated_at' => now()]
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('estado_diat');
    }
};
