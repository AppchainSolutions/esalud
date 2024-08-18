<?php

namespace App\Repository;

use App\Models\MedioDerivacion;


class MedioDerivacionRepository extends Repository
{
    public function __construct(MedioDerivacion $model)
    {
        $this->model = $model;
    }



    // Add any necessary methods to the repository here
}
