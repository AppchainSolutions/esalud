<?php

namespace App\Repository;

use App\Models\EstablecimientosEducacionales;

class EstablecimientoEducacionalRepository extends Repository
{
    public function __construct(EstablecimientosEducacionales $model)
    {
        $this->model = $model;
    }
}
