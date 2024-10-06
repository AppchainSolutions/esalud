<?php

namespace App\Repository;

use App\Models\LeySocial;


class LeySocialRepository extends Repository
{
    public function __construct(LeySocial $model)
    {
        $this->model = $model;
    }

    // Add any necessary methods to the repository here
}
