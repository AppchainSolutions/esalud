<?php

namespace App\Repository;

use App\Models\Ceco;


class CecoRepository extends Repository
{
    public function __construct(Ceco $model)
    {
        $this->model = $model;
    }



    // Add any necessary methods to the repository here
}
