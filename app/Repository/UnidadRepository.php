<?php

namespace App\Repository;

use App\Models\Unidad;

class UnidadRepository extends Repository
{
    public function __construct(Unidad $model)
    {
        $this->model = $model;
    }

    // Add any necessary methods to the repository here
}
