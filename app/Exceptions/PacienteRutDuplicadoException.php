<?php

namespace App\Exceptions;

use Exception;

class PacienteRutDuplicadoException extends Exception
{
    public function __construct(string $rut)
    {
        parent::__construct("Ya existe un paciente registrado con el RUT: {$rut}");
    }

    public function render($request)
    {
        return response()->json([
            'error' => 'RUT Duplicado',
            'message' => $this->getMessage()
        ], 409); // 409 Conflict - código HTTP apropiado para conflictos de recursos
    }
}
