<?php

namespace App\Repository;

use App\Models\TestDroga;


class TestDrogaRepository extends Repository
{
    public function __construct(TestDroga $model)
    {
        $this->model = $model;
    }



    // Add any necessary methods to the repository here
}
