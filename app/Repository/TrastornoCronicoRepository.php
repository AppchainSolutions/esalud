<?php

namespace App\Repository;

use App\Models\TrastornoCronico;

class TrastornoCronicoRepository extends Repository
{
    public function __construct(TrastornoCronico $model)
    {
        $this->model = $model;
    }
    // Add any necessary methods to the repository here
}
