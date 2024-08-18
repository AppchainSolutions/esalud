<?php

namespace App\Repository;

use App\Models\EstadoEpo;


class EstadoEpoRepository extends Repository
{
    public function __construct(EstadoEpo $model)
    {
        $this->model = $model;
    }
}
