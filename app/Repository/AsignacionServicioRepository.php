<?php

namespace App\Repository;

use App\Models\AsignacionServicio;


class AsignacionServicioRepository extends Repository
{
    public function __construct(AsignacionServicio $model)
    {
        $this->model = $model;
    }


}
