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
        Schema::create('objetivo_sesion', function (Blueprint $table) {
            $table->id();
            $table->integer('sesion_id');
            $table->string('objetivo_sesion');
            $table->boolean('objetivo_sesion_logrado')->default('false');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('objetivo_sesion');
    }
};
