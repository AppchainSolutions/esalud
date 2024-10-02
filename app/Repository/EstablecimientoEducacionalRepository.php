<?php

namespace App\Repository;

use App\Models\EstablecimientoEducacional;


class EstablecimientoEducacionalRepository extends Repository
{
    public function __construct(EstablecimientoEducacional $model)
    {
        $this->model = $model;
    }
}
