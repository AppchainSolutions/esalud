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
    /*public function run()
{
    $this->truncateAndSeedFormBuilder();
    $this->seedPatientForm();
    $this->seedEducationalData();
}

private function truncateAndSeedFormBuilder()
{
    FormBuilder::truncate();
}

private function seedPatientForm()
{
    $patientFormFields = [
        $this->createFormField(1, 'frmPacientes', 'rut', 'rut', 'RUT', 1, 1, 'text', true, true, 'underlined'),
        $this->createFormField(2, 'frmPacientes', 'nombre', 'name', 'Nombre', 2, 1, 'text', true, true, 'underlined', 'compact'),
        // ... Add other patient form fields here
    ];

    foreach ($patientFormFields as $field) {
        FormBuilder::create($field);
    }
}

private function seedEducationalData()
{
    $educationalFields = [
        $this->createFormField(26, 'frmPacientes', 'subsection', null, 'Subsección Datos Educacionales', 1, 2, 'h2', false, false, null, null, 'text-h2'),
        $this->createFormField(27, 'frmPacientes', 'establecimiento_educacional_id', null, 'Establecimiento educacional', 2, 2, 'select', true, false, 'underlined', 'compact', null, json_encode([]), 'descripcion', 'id'),
        $this->createFormField(28, 'frmPacientes', 'profesor', null, 'Profesor', 3, 2, 'text', true, false, 'underlined', 'compact'),
    ];

    foreach ($educationalFields as $field) {
        FormBuilder::create($field);
    }
}

private function createFormField($id, $formId, $name, $rules, $label, $order, $row, $type, $clearable, $required, $variant, $density = null, $class = null, $items = null, $itemTitle = null, $itemValue = null)
{
    return [
        'id' => $id,
        'form_id' => $formId,
        'name' => $name,
        'rules' => $rules,
        'label' => $label,
        'order' => $order,
        'row' => $row,
        'type' => $type,
        'clearable' => $clearable,
        'required' => $required,
        'variant' => $variant,
        'density' => $density,
        'class' => $class,
        'items' => $items,
        'item-title' => $itemTitle,
        'item-value' => $itemValue,
    ];
}*/
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
            'items' => 'store.endpoints.calles',
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
            'order' => 25,
            'row' => 1,
            'type' => 'text',
            'clearable' => true,
            'variant' => 'underlined',

        ]);

        FormBuilder::create([
            'id' => 26,
            'form_id' => 'frmPacientes',
            'name' => 'establecimiento_educacional_id',
            'label' => 'Establecimiento educacional',
            'items' => json_encode([]),
            'item-title' => 'descripcion',
            'item-value' => 'id',
            'density' => 'compact',
            'order' => 26,
            'row' => 1,
            'type' => 'select',
            'clearable' => true,
            'variant' => 'underlined',

        ]);

        FormBuilder::create([
            'id' => 27,
            'form_id' => 'frmPacientes',
            'name' => 'profesor',
            'label' => 'Profesor',
            'density' => 'compact',
            'order' => 27,
            'row' => 1,
            'type' => 'text',
            'clearable' => true,
            'variant' => 'underlined',

        ]);

        FormBuilder::create([
            'id' => 28,
            'form_id' => 'frmPacientes',
            'name' => 'rut_responsable',
            'label' => 'Rut responsable',
            'density' => 'compact',
            'order' => 1,
            'row' => 2,
            'type' => 'text',
            'clearable' => true,
            'variant' => 'underlined',

        ]);

        FormBuilder::create([
            'id' => 29,
            'form_id' => 'frmPacientes',
            'name' => 'nombre_responsable',
            'label' => 'Nombre responsable',
            'density' => 'compact',
            'order' => 2,
            'row' => 2,
            'type' => 'text',
            'clearable' => true,
            'variant' => 'underlined',

        ]);
   
        FormBuilder::create([
            'id' => 30,
            'form_id' => 'frmPacientes',
            'name' => 'apellidos_responsable',
            'label' => 'Apellidos responsable',
            'density' => 'compact',
            'order' => 3,
            'row' => 2,
            'type' => 'text',
            'clearable' => true,
            'variant' => 'underlined',

        ]);

        FormBuilder::create([
            'id' => 31,
            'form_id' => 'frmPacientes',
            'name' => 'calle_responsable_id',
            'label' => 'Calle responsable',
            'items' => json_encode([]),
            'item-title' => 'descripcion',
            'item-value' => 'id',
            'density' => 'compact',
            'order' => 4,
            'row' => 2,
            'type' => 'select',
            'clearable' => true,
            'variant' => 'underlined',

        ]);

        FormBuilder::create([
            'id' => 32,
            'form_id' => 'frmPacientes',
            'name' => 'ciudad_responsable',
            'label' => 'Ciudad responsable',
            'density' => 'compact',
            'order' => 5,
            'row' => 2,
            'type' => 'text',
            'clearable' => true,
            'variant' => 'underlined',

        ]);

        FormBuilder::create([
            'id' => 33,
            'form_id' => 'frmPacientes',
            'name' => 'direccion_responsable',
            'label' => 'Direcciòn responsable',
            'density' => 'compact',
            'order' => 6,
            'row' => 2,
            'type' => 'switch',
            'inset' => true,
            'clearable' => true,
            'variant' => 'underlined',
            'color' => 'primary',
            'hide_details' => true,

        ]);


        FormBuilder::create([
            'id' => 34,
            'form_id' => 'frmPacientes',
            'name' => 'comunidad_lgbtq_responsable',
            'label' => 'Comunidada lgbtq responsable',
            'density' => 'compact',
            'order' => 7,
            'row' => 2,
            'type' => 'switch',
            'inset' => true,
            'clearable' => true,
            'variant' => 'underlined',
            'color' => 'primary',
            'hide_details' => true,

        ]);

        FormBuilder::create([
            'id' => 35,
            'form_id' => 'frmPacientes',
            'name' => 'credencial_discapacidad_responsable',
            'label' => 'Credencial discapacidad responsable',
            'density' => 'compact',
            'order' => 8,
            'row' => 2,
            'type' => 'switch',
            'inset' => true,
            'clearable' => true,
            'variant' => 'underlined',
            'color' => 'primary',
            'hide_details' => true,

        ]);

        FormBuilder::create([
            'id' => 36,
            'form_id' => 'frmPacientes',
            'name' => 'donante_responsable',
            'label' => 'Donante responsable',
            'density' => 'compact',
            'order' => 9,
            'row' => 2,
            'type' => 'switch',
            'inset' => true,
            'clearable' => true,
            'variant' => 'underlined',
            'color' => 'primary',
            'hide_details' => true,

        ]);

        FormBuilder::create([
            'id' => 37,
            'form_id' => 'frmPacientes',
            'name' => 'fecha_nacimiento_responsable',
            'label' => 'Fecha nacimiento responsable',
            'density' => 'compact',
            'order' => 10,
            'row' => 2,
            'type' => 'date',
            'inset' => true,
            'clearable' => true,
            'variant' => 'underlined',
            'color' => 'primary',
            'hide_details' => true,

        ]);

        FormBuilder::create([
            'id' => 38,
            'form_id' => 'frmPacientes',
            'name' => 'edad_responsable',
            'label' => 'Edad responsable',
            'density' => 'compact',
            'order' => 11,
            'row' => 2,
            'type' => 'number',
            'inset' => true,
            'clearable' => true,
            'variant' => 'underlined',
            'color' => 'primary',
            'hide_details' => true,

        ]);

        FormBuilder::create([
            'id' => 39,
            'form_id' => 'frmPacientes',
            'name' => 'email_responsable',
            'label' => 'Email responsable',
            'density' => 'compact',
            'order' => 12,
            'row' => 2,
            'type' => 'email',
            'inset' => true,
            'clearable' => true,
            'variant' => 'underlined',
            'color' => 'primary',
            'hide_details' => true,

        ]);

        FormBuilder::create([
            'id' => 40,
            'form_id' => 'frmPacientes',
            'name' => 'email_responsable',
            'label' => 'Email responsable',
            'density' => 'compact',
            'order' => 12,
            'row' => 2,
            'type' => 'email',
            'inset' => true,
            'clearable' => true,
            'variant' => 'underlined',
            'color' => 'primary',
            'hide_details' => true,

        ]);

        FormBuilder::create([
            'id' => 41,
            'form_id' => 'frmPacientes',
            'name' => 'estado_civil_responsable_id',
            'label' => 'Estado civil responsable',
            'items' => json_encode([]),
            'item-title' => 'descripcion',
            'item-value' => 'id',
            'density' => 'compact',
            'order' => 13,
            'row' => 2,
            'type' => 'select',
            'clearable' => true,
            'variant' => 'underlined',

        ]);

        FormBuilder::create([
            'id' => 42,
            'form_id' => 'frmPacientes',
            'name' => 'genero_responsable_id',
            'label' => 'Género responsable',
            'items' => json_encode([]),
            'item-title' => 'descripcion',
            'item-value' => 'id',
            'density' => 'compact',
            'order' => 14,
            'row' => 2,
            'type' => 'select',
            'clearable' => true,
            'variant' => 'underlined',

        ]);

        FormBuilder::create([
            'id' => 43,
            'form_id' => 'frmPacientes',
            'name' => 'grupo_sanguineo_responsable_id',
            'label' => 'Grupo sanguíneo responsable',
            'items' => json_encode([]),
            'item-title' => 'descripcion',
            'item-value' => 'id',
            'density' => 'compact',
            'order' => 15,
            'row' => 2,
            'type' => 'select',
            'clearable' => true,
            'variant' => 'underlined',

        ]);

        FormBuilder::create([
            'id' => 44,
            'form_id' => 'frmPacientes',
            'name' => 'nacionalidad_responsable_id',
            'label' => 'Nacionalidad responsable',
            'items' => json_encode([]),
            'item-title' => 'descripcion',
            'item-value' => 'id',
            'density' => 'compact',
            'order' => 16,
            'row' => 2,
            'type' => 'select',
            'clearable' => true,
            'variant' => 'underlined',

        ]);

        FormBuilder::create([
            'id' => 45,
            'form_id' => 'frmPacientes',
            'name' => 'nivel_instruccion_responsable_id',
            'label' => 'Nivel instrucción responsable',
            'items' => json_encode([]),
            'item-title' => 'descripcion',
            'item-value' => 'id',
            'density' => 'compact',
            'order' => 17,
            'row' => 2,
            'type' => 'select',
            'clearable' => true,
            'variant' => 'underlined',

        ]);

        FormBuilder::create([
            'id' => 46,
            'form_id' => 'frmPacientes',
            'name' => 'ocupacion_responsable_id',
            'label' => 'Ocupación responsable',
            'items' => json_encode([]),
            'item-title' => 'descripcion',
            'item-value' => 'id',
            'density' => 'compact',
            'order' => 18,
            'row' => 2,
            'type' => 'select',
            'clearable' => true,
            'variant' => 'underlined',

        ]);

        FormBuilder::create([
            'id' => 47,
            'form_id' => 'frmPacientes',
            'name' => 'parentesco_responsable',
            'label' => 'Parentesco responsable',
            'density' => 'compact',
            'order' => 19,
            'row' => 2,
            'type' => 'text',
            'clearable' => true,
            'variant' => 'underlined',

        ]);

        FormBuilder::create([
            'id' => 48,
            'form_id' => 'frmPacientes',
            'name' => 'prevision_responsable_id',
            'label' => 'Previsión responsable',
            'items' => json_encode([]),
            'item-title' => 'descripcion',
            'item-value' => 'id',
            'density' => 'compact',
            'order' => 20,
            'row' => 2,
            'type' => 'select',
            'clearable' => true,
            'variant' => 'underlined',

        ]);

        FormBuilder::create([
            'id' => 49,
            'form_id' => 'frmPacientes',
            'name' => 'pueblo_originario_responsable_id',
            'label' => 'Pueblo originario responsable',
            'items' => json_encode([]),
            'item-title' => 'descripcion',
            'item-value' => 'id',
            'density' => 'compact',
            'order' => 21,
            'row' => 2,
            'type' => 'select',
            'clearable' => true,
            'variant' => 'underlined',

        ]);

        FormBuilder::create([
            'id' => 50,
            'form_id' => 'frmPacientes',
            'name' => 'religion_responsable_id',
            'label' => 'Religión responsable',
            'items' => json_encode([]),
            'item-title' => 'descripcion',
            'item-value' => 'id',
            'density' => 'compact',
            'order' => 22,
            'row' => 2,
            'type' => 'select',
            'clearable' => true,
            'variant' => 'underlined',

        ]);

        FormBuilder::create([
            'id' => 51,
            'form_id' => 'frmPacientes',
            'name' => 'telefono_responsable',
            'label' => 'Teléfono responsable',
            'density' => 'compact',
            'order' => 23,
            'row' => 2,
            'type' => 'text',
            'clearable' => true,
            'variant' => 'underlined',

        ]);

        // Puedes agregar más usuarios según sea necesario
    }
}
