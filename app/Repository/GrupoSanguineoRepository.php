<?php

namespace App\Repository;

use App\Models\GrupoSanguineo;

class GrupoSanguineoRepository extends Repository
{
    public function __construct(GrupoSanguineo $model)
    {
        $this->model = $model;
    }


    // Add any necessary methods to the repository here
}
