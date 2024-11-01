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
        Schema::create('form_builder', function (Blueprint $table) {
            $table->id();
            $table->string('form_id');
            $table->integer('order')->nullable();
            $table->integer('row')->nullable();
            $table->string('endpoint')->nullable();
            $table->string('url')->nullable();
            $table->string('name');
            $table->string('label');
            $table->string('type');
            $table->boolean('disabled')->nullable();
            $table->boolean('readonly')->nullable();
            $table->boolean('multiple')->nullable();
            $table->boolean('expanded')->nullable();
            $table->boolean('dense')->nullable();
            $table->boolean('autofocus')->nullable();
            $table->boolean('chips')->nullable();
            $table->boolean('query_search')->nullable();   
            $table->boolean('required')->nullable();
            $table->boolean('clearable')->nullable();
            $table->boolean('hide_details')->nullable();
            $table->boolean('inset')->nullable();           
            $table->json('items')->nullable();
            $table->string('variant')->nullable();
            $table->integer('cols')->nullable();
            $table->integer('md')->nullable();
            $table->integer('sm')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('form_builder');
    }
};
