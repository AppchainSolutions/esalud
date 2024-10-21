<?php

namespace App\Repository;

use App\Models\GruposSanguineos;

class GrupoSanguineoRepository extends Repository
{
    public function __construct(GruposSanguineos $model)
    {
        $this->model = $model;
    }

    // Add any necessary methods to the repository here
}
