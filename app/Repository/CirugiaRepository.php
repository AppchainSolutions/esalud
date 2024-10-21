<?php

namespace App\Repository;

use App\Models\Cirugias;


class CirugiaRepository extends Repository
{
    public function __construct(Cirugias $model)
    {
        $this->model = $model;
    }



    // Add any necessary methods to the repository here
}
