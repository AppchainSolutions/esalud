<?php

namespace App\Repository;

use App\Models\TipoAtencion;


class TipoAtencionRepository extends Repository
{
    public function __construct(TipoAtencion $model)
    {
        $this->model = $model;
    }



    // Add any necessary methods to the repository here
}
