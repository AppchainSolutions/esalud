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
            $table->boolean('active')->default(true);
            $table->boolean('autofocus')->nullable();
            $table->boolean('chips')->nullable();
            $table->boolean('clearable')->default(true);
            $table->boolean('disabled')->nullable();
            $table->boolean('expanded')->nullable();
            $table->boolean('hide_details')->nullable();
            $table->boolean('inset')->nullable();           
            $table->boolean('multiple')->nullable();
            $table->boolean('query_search')->nullable();   
            $table->boolean('readonly')->nullable();
            $table->boolean('required')->nullable();
            $table->boolean('single')->nullable();
            $table->integer('order')->nullable();
            $table->integer('cols')->nullable();
            $table->integer('lg')->nullable();
            $table->integer('md')->nullable();
            $table->integer('sm')->nullable();
            $table->integer('row')->nullable();
            $table->string('items')->nullable();
            $table->string('item-title')->nullable();
            $table->string('items-value')->nullable();
            $table->string('endpoint')->nullable();
            $table->boolean('false-value')->default(false);
            $table->boolean('true-value')->default(true);
            $table->string('color')->default('primary');
            $table->string('density')->default('compact');
            $table->string('label');
            $table->string('name');
            $table->string('placeholder')->nullable();
            $table->string('rules')->nullable();
            $table->string('type');
            $table->string('url')->nullable();
            $table->string('variant')->default('underlined');
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
