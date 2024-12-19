<?php

namespace App\Repository;

use App\Models\Profesional;

class ProfesionalRepository extends Repository
{
    public function __construct(Profesional $model)
    {
        $this->model = $model;
    }
}
