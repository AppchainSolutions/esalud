<?php

namespace App\Repository;

use App\Models\Accidente;


class AccidenteRepository extends Repository
{
    public function __construct(Accidente $model)
    {
        $this->model = $model;
    }



    // Add any necessary methods to the repository here
}
