<?php

namespace App\Repository;

use App\Models\EstadoCertificacion;

class EstadoCertificacionRepository extends Repository
{
    public function __construct(EstadoCertificacion $model)
    {
        $this->model = $model;
    }

}
