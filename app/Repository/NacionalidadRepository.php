<?php

namespace App\Repository;

use App\Models\Nacionalidades;

class NacionalidadRepository extends Repository
{
    public function __construct(Nacionalidades $model)
    {
        $this->model = $model;
    }

    // Add any necessary methods to the repository here
}
