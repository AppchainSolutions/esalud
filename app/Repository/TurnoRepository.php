<?php

namespace App\Repository;

use App\Models\Turno;

class TurnoRepository extends Repository
{
    public function __construct(Turno $model)
    {
        $this->model = $model;
    }

    // Add any necessary methods to the repository here
}
