<?php

namespace App\Repository;

use App\Models\Religiones;

class ReligionRepository extends Repository
{
    public function __construct(Religiones $model)
    {
        $this->model = $model;
    }
    // Add any necessary methods to the repository here
}
