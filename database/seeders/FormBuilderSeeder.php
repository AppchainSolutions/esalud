<?php

namespace Database\Seeders;

use App\Models\FormBuilder;
use Illuminate\Database\Seeder;

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
            'id' => 1,
            'form_id' => 'frmPacientes',
            'name' => 'rut',
            'rules' => 'rut',
            'label' => 'RUT',
            'order' => 1,
            'row' => 1,
            'type' => 'text',
            'clearable' => true,
            'required' => true,
            'variant' => 'underlined',


        ]);

        FormBuilder::create([
            'id' => 2,
            'form_id' => 'frmPacientes',
            'name' => 'nombre',
            'rules' => 'name',
            'label' => 'Nombre',
            'density' => 'compact',
            'order' => 2,
            'row' => 1,
            'type' => 'text',
            'clearable' => true,
            'required' => true,
            'variant' => 'underlined',

        ]);

        FormBuilder::create([
            'id' => 3,
            'form_id' => 'frmPacientes',
            'name' => 'apellidos',
            'rules' => 'name',
            'label' => 'Apellidos',
            'density' => 'compact',
            'order' => 3,
            'row' => 1,
            'type' => 'text',
            'clearable' => true,
            'required' => true,
            'variant' => 'underlined',

        ]);

        FormBuilder::create([
            'id' => 4,
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
            'id' => 5,
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
            'id' => 6,
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
            'id' => 7,
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
            'id' => 8,
            'form_id' => 'frmPacientes',
            'name' => 'comunidad_lgbtq',
            'label' => 'Comunidad LGBTQ+',
            'density' => 'compact',
            'order' => 8,
            'row' => 1,
            'type' => 'switch',
            'inset' => true,
            'clearable' => true,
            'variant' => 'underlined',
            'color' => 'primary',
            'hide_details' => true,

        ]);

        FormBuilder::create([
            'id' => 9,
            'form_id' => 'frmPacientes',
            'name' => 'credencial_discapacidad',
            'label' => 'Credencial Discapacidad',
            'density' => 'compact',
            'order' => 9,
            'row' => 1,
            'type' => 'switch',
            'inset' => true,
            'clearable' => true,
            'variant' => 'underlined',
            'color' => 'primary',
            'hide_details' => true,

        ]);

        FormBuilder::create([
            'id' => 10,
            'form_id' => 'frmPacientes',
            'name' => 'pertenece_pie',
            'label' => 'Pertenece a PIE',
            'density' => 'compact',
            'order' => 10,
            'row' => 1,
            'type' => 'switch',
            'inset' => true,
            'clearable' => true,
            'variant' => 'underlined',
            'color' => 'primary',
            'hide_details' => true,

        ]);



        FormBuilder::create([
            'id' => 11,
            'form_id' => 'frmPacientes',
            'name' => 'calle_id',
            'label' => 'Calles',
            'items' => json_encode([]),
            'item-title' => 'descripcion',
            'item-value' => 'id',
            'density' => 'compact',
            'order' => 11,
            'row' => 1,
            'type' => 'select',
            'clearable' => true,
            'variant' => 'underlined',

        ]);

        FormBuilder::create([
            'id' => 12,
            'form_id' => 'frmPacientes',
            'name' => 'ciudad',
            'label' => 'Ciudad',
            'density' => 'compact',
            'order' => 12,
            'row' => 1,
            'type' => 'text',
            'clearable' => true,
            'required' => true,
            'variant' => 'underlined',

        ]);

        FormBuilder::create([
            'id' => 13,
            'form_id' => 'frmPacientes',
            'name' => 'dirección',
            'label' => 'Dirección',
            'density' => 'compact',
            'order' => 13,
            'row' => 1,
            'type' => 'text',
            'clearable' => true,
            'required' => true,
            'variant' => 'underlined',

        ]);

        FormBuilder::create([
            'id' => 14,
            'form_id' => 'frmPacientes',
            'name' => 'estado_civil_id',
            'label' => 'Estado civil',
            'items' => json_encode([]),
            'item-title' => 'descripcion',
            'item-value' => 'id',
            'density' => 'compact',
            'order' => 14,
            'row' => 1,
            'type' => 'select',
            'clearable' => true,
            'variant' => 'underlined',

        ]);

        FormBuilder::create([
            'id' => 15,
            'form_id' => 'frmPacientes',
            'name' => 'estado_civil_id',
            'label' => 'Estado civil',
            'items' => json_encode([]),
            'item-title' => 'descripcion',
            'item-value' => 'id',
            'density' => 'compact',
            'order' => 15,
            'row' => 1,
            'type' => 'select',
            'clearable' => true,
            'variant' => 'underlined',

        ]);

        FormBuilder::create([
            'id' => 16,
            'form_id' => 'frmPacientes',
            'name' => 'genero_id',
            'label' => 'Género',
            'items' => json_encode([]),
            'item-title' => 'descripcion',
            'item-value' => 'id',
            'density' => 'compact',
            'order' => 16,
            'row' => 1,
            'type' => 'select',
            'clearable' => true,
            'variant' => 'underlined',

        ]);

        FormBuilder::create([
            'id' => 17,
            'form_id' => 'frmPacientes',
            'name' => 'grupo_sanguineo_id',
            'label' => 'Grupo sanguíneo',
            'items' => json_encode([]),
            'item-title' => 'descripcion',
            'item-value' => 'id',
            'density' => 'compact',
            'order' => 17,
            'row' => 1,
            'type' => 'select',
            'clearable' => true,
            'variant' => 'underlined',

        ]);

        FormBuilder::create([
            'id' => 18,
            'form_id' => 'frmPacientes',
            'name' => 'nacionalidad_id',
            'label' => 'Nacionalidad',
            'items' => json_encode([]),
            'item-title' => 'descripcion',
            'item-value' => 'id',
            'density' => 'compact',
            'order' => 18,
            'row' => 1,
            'type' => 'select',
            'clearable' => true,
            'variant' => 'underlined',

        ]);

        FormBuilder::create([
            'id' => 19,
            'form_id' => 'frmPacientes',
            'name' => 'nivel_instruccion_id',
            'label' => 'Nivel de Instrucción',
            'items' => json_encode([]),
            'item-title' => 'descripcion',
            'item-value' => 'id',
            'density' => 'compact',
            'order' => 19,
            'row' => 1,
            'type' => 'select',
            'clearable' => true,
            'variant' => 'underlined',

        ]);

        FormBuilder::create([
            'id' => 20,
            'form_id' => 'frmPacientes',
            'name' => 'ocupacion_id',
            'label' => 'Ocupación',
            'items' => json_encode([]),
            'item-title' => 'descripcion',
            'item-value' => 'id',
            'density' => 'compact',
            'order' => 20,
            'row' => 1,
            'type' => 'select',
            'clearable' => true,
            'variant' => 'underlined',

        ]);

        FormBuilder::create([
            'id' => 21,
            'form_id' => 'frmPacientes',
            'name' => 'prevision_id',
            'label' => 'Previsión de Salud',
            'items' => json_encode([]),
            'item-title' => 'descripcion',
            'item-value' => 'id',
            'density' => 'compact',
            'order' => 21,
            'row' => 1,
            'type' => 'select',
            'clearable' => true,
            'variant' => 'underlined',

        ]);



        FormBuilder::create([
            'id' => 22,
            'form_id' => 'frmPacientes',
            'name' => 'pueblo_originario_id',
            'label' => 'Prueblo originario',
            'items' => json_encode([]),
            'item-title' => 'descripcion',
            'item-value' => 'id',
            'density' => 'compact',
            'order' => 22,
            'row' => 1,
            'type' => 'select',
            'clearable' => true,
            'variant' => 'underlined',

        ]);

        FormBuilder::create([
            'id' => 23,
            'form_id' => 'frmPacientes',
            'name' => 'religion_id',
            'label' => 'Religión',
            'items' => json_encode([]),
            'item-title' => 'descripcion',
            'item-value' => 'id',
            'density' => 'compact',
            'order' => 23,
            'row' => 1,
            'type' => 'select',
            'clearable' => true,
            'variant' => 'underlined',

        ]);

        FormBuilder::create([
            'id' => 24,
            'form_id' => 'frmPacientes',
            'name' => 'telefono1',
            'label' => 'Teléfono 1',
            'density' => 'compact',
            'order' => 24,
            'row' => 1,
            'type' => 'text',
            'clearable' => true,
            'variant' => 'underlined',

        ]);

        FormBuilder::create([
            'id' => 25,
            'form_id' => 'frmPacientes',
            'name' => 'telefono2',
            'label' => 'Teléfono 2',
            'density' => 'compact',
            'order' => 26,
            'row' => 1,
            'type' => 'text',
            'clearable' => true,
            'variant' => 'underlined',

        ]);

        FormBuilder::create([
            'id' => 26,
            'form_id' => 'frmPacientes',
            'name' => 'subsection',
            'label' => 'Subsección Datos Educacionales',
            'density' => 'compact',
            'order' => 1,
            'row' => 2,
            'type' => 'subsection',
            'clearable' => true,
            'variant' => 'underlined',
        ]);

        FormBuilder::create([
            'id' => 27,
            'form_id' => 'frmPacientes',
            'name' => 'establecimiento_educacional_id',
            'label' => 'Establecimiento educacional',
            'items' => json_encode([]),
            'item-title' => 'descripcion',
            'item-value' => 'id',
            'density' => 'compact',
            'order' => 2,
            'row' => 2,
            'type' => 'select',
            'clearable' => true,
            'variant' => 'underlined',

        ]);

        FormBuilder::create([
            'id' => 28,
            'form_id' => 'frmPacientes',
            'name' => 'profesor',
            'label' => 'Profesor',
            'density' => 'compact',
            'order' => 3,
            'row' => 2,
            'type' => 'text',
            'clearable' => true,
            'variant' => 'underlined',

        ]);

        // Puedes agregar más usuarios según sea necesario
    }
}
