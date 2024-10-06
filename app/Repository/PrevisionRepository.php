<?php

namespace App\Repository;

use App\Models\Prevision;

class PrevisionRepository extends Repository
{
    public function __construct(Prevision $model)
    {
        $this->model = $model;
    }
    // Add any necessary methods to the repository here
}
