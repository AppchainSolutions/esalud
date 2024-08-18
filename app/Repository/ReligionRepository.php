<?php

namespace App\Repository;

use App\Models\Religion;


class ReligionRepository extends Repository
{
    public function __construct(Religion $model)
    {
        $this->model = $model;
    }
    // Add any necessary methods to the repository here
}
