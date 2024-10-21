<?php

namespace App\Repository;

use App\Models\LugarAtencion;

class LugarAtencionRepository extends Repository
{
    public function __construct(LugarAtencion $model)
    {
        $this->model = $model;
    }

    // Add any necessary methods to the repository here
}
