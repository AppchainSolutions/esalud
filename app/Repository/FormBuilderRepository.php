<?php

namespace App\Repository;

use App\Models\FormBuilder;

class FormBuilderRepository extends Repository
{
    public function __construct(FormBuilder $model)
    {
        $this->model = $model;
    }

    // Add any necessary methods to the repository here
}
