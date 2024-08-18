<?php

namespace App\Repository;

use App\Models\Nacionalidad;


class NacionalidadRepository extends Repository
{
    public function __construct(Nacionalidad $model)
    {
        $this->model = $model;
    }



    // Add any necessary methods to the repository here
}
