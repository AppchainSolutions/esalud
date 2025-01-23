<?php

namespace App\Exceptions;

use Exception;

class PacienteNotFoundException extends Exception
{
    public function render($request)
    {
        return response()->json([
            'error' => 'Paciente no encontrado',
            'message' => $this->getMessage()
        ], 404);
    }
}
