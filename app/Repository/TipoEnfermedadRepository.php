<?php

namespace App\Repository;

use App\Models\TipoEnfermedad;


class TipoEnfermedadRepository extends Repository
{
    public function __construct(TipoEnfermedad $model)
    {
        $this->model = $model;
    }



    // Add any necessary methods to the repository here
}
