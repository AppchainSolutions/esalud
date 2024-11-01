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
            'name',
            'label',
            'type',
            'required',
            'clearable',
            'variant',
            'endpoint',
            'cols',
            'row',
            'md',
            'sm',
            'order',
        ];
}
