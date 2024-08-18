<?php

namespace App\Repository;

use App\Models\FuenteIncidente;


class FuenteIncidenteRepository extends Repository
{
    public function __construct(FuenteIncidente $model)
    {
        $this->model = $model;
    }



    // Add any necessary methods to the repository here
}
