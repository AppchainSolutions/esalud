<?php

namespace App\Services\Contracts;

use Illuminate\Http\Request;

interface ServiceInterface
{
    /**
     * Búsqueda genérica con filtros
     * 
     * @param Request $request
     * @return mixed
     */
    public function search(Request $request);

    /**
     * Obtiene el nombre del recurso para los logs y eventos
     * @return string
     */
    public function getResourceName(): string;
}
