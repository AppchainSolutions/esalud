<?php

namespace App\Repository;

use App\Models\NivelInstruccion;

class NivelInstruccionRepository extends Repository
{
    public function __construct(NivelInstruccion $model)
    {
        $this->model = $model;
    }
    // Add any necessary methods to the repository here
}