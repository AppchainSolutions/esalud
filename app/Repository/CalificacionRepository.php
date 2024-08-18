<?php

namespace App\Repository;

use App\Models\Calificacion;


class CalificacionRepository extends Repository
{
    public function __construct(Calificacion $model)
    {
        $this->model = $model;
    }



    // Add any necessary methods to the repository here
}
