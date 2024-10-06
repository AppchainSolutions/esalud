<?php

namespace App\Repository;

use App\Models\TipoLicencia;


class TipoLicenciaRepository extends Repository
{
    public function __construct(TipoLicencia $model)
    {
        $this->model = $model;
    }



    // Add any necessary methods to the repository here
}
