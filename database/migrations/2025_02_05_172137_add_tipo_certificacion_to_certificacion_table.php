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
        Schema::table('certificacion', function (Blueprint $table) {
            $table->unsignedBigInteger('tipo_certificacion')->nullable();
            $table->foreign('tipo_certificacion')->references('id')->on('tipo_certificacion');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('certificacion', function (Blueprint $table) {
            $table->dropForeign(['tipo_certificacion']);
            $table->dropColumn('tipo_certificacion');
        });
    }
};
