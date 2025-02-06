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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('current_team_id')->nullable();
            $table->boolean('activo')->default(true);
            $table->boolean('isAdmin')->nullable()->default(false);
            $table->boolean('notification_exepo')->nullable()->default(false);
            $table->rememberToken();
            $table->string('email')->unique();
            $table->string('lastname');
            $table->string('name');
            $table->string('password');
            $table->string('profile_photo_path', 2048)->nullable();
            $table->string('rol')->default('paciente');
            $table->string('rut')->unique();
            $table->text('two_factor_recovery_codes')->nullable();
            $table->text('two_factor_secret')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->timestamp('two_factor_confirmed_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
