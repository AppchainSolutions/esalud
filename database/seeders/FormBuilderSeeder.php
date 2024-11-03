<?php

namespace Database\Seeders;

use App\Models\FormBuilder;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class FormBuilderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Truncar la tabla users
        FormBuilder::truncate();

        FormBuilder::create([
            'id' => '1',
            'form_id' => 'frmPacientes',
            'name' => 'rut',
            'rules' => 'rut',
            'label' => 'RUT',
            'order' => 1,
            'row' => 1,
            'type' => 'string',
            'clearable' => true,
            'required' => true,
            'variant' => 'underlined',
           

        ]);

        FormBuilder::create([
            'id' => '2',
            'form_id' => 'frmPacientes',
            'name' => 'nombre',
            'rules' => 'name',
            'label' => 'Nombre',
            'density' => 'compact',
            'order' => 2,
            'row' => 1,
            'type' => 'string',
            'clearable' => true,
            'required' => true,
            'variant' => 'underlined',
           
        ]);

        FormBuilder::create([
            'id' => '3',
            'form_id' => 'frmPacientes',
            'name' => 'apellidos',
            'rules' => 'name',
            'label' => 'Apellidos',
            'density' => 'compact',
            'order' => 3,
            'row' => 1,
            'type' => 'string',
            'clearable' => true,
            'required' => true,
            'variant' => 'underlined',
           
        ]);

        FormBuilder::create([
            'id' => '4',
            'form_id' => 'frmPacientes',
            'name' => 'fecha_nacimiento',
            'rules' => null,
            'label' => 'Fecha de nacimiento',
            'density' => 'compact',
            'order' => 4,
            'row' => 1,
            'type' => 'date',
            'clearable' => true,
            'required' => true,
            'variant' => 'underlined',
           
        ]);

        FormBuilder::create([
            'id' => '5',
            'form_id' => 'frmPacientes',
            'name' => 'edad',
            'rules' => null,
            'label' => 'Edad',
            'density' => 'compact',
            'order' => 5,
            'row' => 1,
            'type' => 'number',
            'readonly' => true,
            'variant' => 'underlined',
           
        ]);

        FormBuilder::create([
            'id' => '6',
            'form_id' => 'frmPacientes',
            'name' => 'email',
            'rules' => 'email',
            'label' => 'Email',
            'density' => 'compact',
            'order' => 6,
            'row' => 1,
            'type' => 'email',
            'clearable' => true,
            'variant' => 'underlined',
           
        ]);

        FormBuilder::create([
            'id' => '7',
            'form_id' => 'frmPacientes',
            'name' => 'donante',
            'label' => 'Donante',
            'density' => 'compact',
            'order' => 7,
            'row' => 1,
            'type' => 'switch',
            'inset' => true,
            'clearable' => true,
            'variant' => 'underlined',
            'color' => 'primary',
            'hide_details' => true,
           
        ]);

        FormBuilder::create([
            'id' => '8',
            'form_id' => 'frmPacientes',
            'name' => 'establecimiento_educacional',
            'label' => 'Establecimiento educacional',
            'density' => 'compact',
            'order' => 8,
            'row' => 1,
            'type' => 'select',
            'clearable' => true,
            'variant' => 'underlined',
           
        ]);

        // Puedes agregar más usuarios según sea necesario
    }
}
