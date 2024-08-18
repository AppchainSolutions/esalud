<?php

namespace App\Repository;

use App\Models\Semaforo;


class SemaforoRepository extends Repository
{
    public function __construct(Semaforo $model)
    {
        $this->model = $model;
    }



    // Add any necessary methods to the repository here
}
