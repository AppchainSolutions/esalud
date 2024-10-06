<?php

namespace App\Repository;

use App\Models\Instruccion;

class InstruccionRepository extends Repository
{
    public function __construct(Instruccion $model)
    {
        $this->model = $model;
    }


    // Add any necessary methods to the repository here
}
