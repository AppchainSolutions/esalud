<?php

namespace App\Repository;

use App\Models\Pueblo;

class PuebloRepository extends Repository
{
    public function __construct(Pueblo $model)
    {
        $this->model = $model;
    }
    // Add any necessary methods to the repository here
}
