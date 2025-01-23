<?php

namespace App\Exceptions;

use Exception;

class ValidationException extends Exception
{
    public function render($request)
    {
        return response()->json([
            'error' => 'Error de validación',
            'message' => $this->getMessage()
        ], 422);
    }
}
