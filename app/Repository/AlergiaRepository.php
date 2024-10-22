<?php

namespace App\Repository;

use App\Models\Alergias;

class AlergiaRepository extends Repository
{
    public function __construct(Alergias $model)
    {
        $this->model = $model;
    }

    // Add any necessary methods to the repository here
}
