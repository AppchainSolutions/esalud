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
        Schema::create('data_table', function (Blueprint $table) {
            $table->id();
            $table->string('v-datable_name');
            $table->string('title');
            $table->string('align');
            $table->string('sortable');
            $table->string('sort-by');
            $table->string('width');
            $table->string('value');
            
            $table->string('key');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('data_table');
    }
};
