<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class FormBuilder extends Model
{
    use HasFactory;

    protected $table = 'form_builder';

    protected $fillable = 
        [
            'frm_id',
            'name',
            'label',
            'order',
            'type',
            'required',
            'clearable',
            'variant',
            'endpoint',
            'rules',
            'readonly',
            'disabled',
            'expanded',
            'multiple',
            'dense',
            'items',
            'autofocus',
            'hide_details',
            'cols',
            'row',
            'lg',
            'md',
            'sm',
        ];
}
