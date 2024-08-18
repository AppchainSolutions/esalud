<?php

namespace App\Repository;

use App\Models\TipoAccidente;


class TipoAccidenteRepository extends Repository
{
    public function __construct(TipoAccidente $model)
    {
        $this->model = $model;
    }



    // Add any necessary methods to the repository here
}
