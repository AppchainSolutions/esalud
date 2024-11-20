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
        Schema::create('users', function (Blueprint $table) {
            $table->boolean('isAdmin')->default(false);
            $table->foreignId('current_team_id')->nullable();
            $table->id();
            $table->rememberToken();
            $table->string('email')->unique();
            $table->string('lastname');
            $table->string('name');
            $table->string('password');
            $table->string('profile_photo_path', 2048)->nullable();
            $table->string('rut');
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
