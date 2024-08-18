<?php

namespace App\Repository;

use App\Models\AccidenteCondicion;


class AccidenteCondicionRepository extends Repository
{
    public function __construct(AccidenteCondicion $model)
    {
        $this->model = $model;
    }



    // Add any necessary methods to the repository here
}
