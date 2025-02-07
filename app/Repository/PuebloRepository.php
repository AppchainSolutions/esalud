<?php

namespace App\Repository;

use App\Models\PuebloOriginario;

class PuebloRepository extends Repository
{
    public function __construct(PuebloOriginario $model)
    {
        $this->model = $model;
    }
    // Add any necessary methods to the repository here
}
