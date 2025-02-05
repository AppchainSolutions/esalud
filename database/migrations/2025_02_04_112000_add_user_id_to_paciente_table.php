<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddUserIdToPacienteTable extends Migration
{
    public function up()
    {
        Schema::table('paciente', function (Blueprint $table) {
            // Agregar columna user_id que puede ser nula
            $table->unsignedBigInteger('user_id')->nullable();
            
            // Crear foreign key constraint
            $table->foreign('user_id')
                  ->references('id')
                  ->on('users')
                  ->onDelete('set null');
        });
    }

    public function down()
    {
        Schema::table('paciente', function (Blueprint $table) {
            // Eliminar la restricción de clave foránea
            $table->dropForeign(['user_id']);
            
            // Eliminar la columna
            $table->dropColumn('user_id');
        });
    }
}
