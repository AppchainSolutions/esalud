<?php

namespace App\Repository;

use App\Models\EstadoCivil;


class EstadoCivilRepository extends Repository
{
    public function __construct(EstadoCivil $model)
    {
        $this->model = $model;
    }
}
