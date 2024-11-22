<?php

namespace App\Repository;

use App\Models\EstadoExamen;


class EstadoExamenRepository extends Repository
{
    public function __construct(EstadoExamen $model)
    {
        $this->model = $model;
    }
}
