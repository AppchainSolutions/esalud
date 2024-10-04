<?php

namespace App\Repository;

use App\Models\Especialidad;


class EspecialidadRepository extends Repository
{
    public function __construct(Especialidad $model)
    {
        $this->model = $model;
    }



    // Add any necessary methods to the repository here
}
