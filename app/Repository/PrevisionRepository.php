<?php

namespace App\Repository;

use App\Models\Previsiones;

class PrevisionRepository extends Repository
{
    public function __construct(Previsiones $model)
    {
        $this->model = $model;
    }
    // Add any necessary methods to the repository here
}
