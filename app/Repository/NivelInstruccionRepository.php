<?php

namespace App\Repository;

use App\Models\NivelesInstruccion;

class NivelInstruccionRepository extends Repository
{
    public function __construct(NivelesInstruccion $model)
    {
        $this->model = $model;
    }
    // Add any necessary methods to the repository here
}
