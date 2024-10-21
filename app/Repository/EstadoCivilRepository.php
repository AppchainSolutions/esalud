<?php

namespace App\Repository;

use App\Models\EstadosCiviles;


class EstadoCivilRepository extends Repository
{
    public function __construct(EstadosCiviles $model)
    {
        $this->model = $model;
    }
}
