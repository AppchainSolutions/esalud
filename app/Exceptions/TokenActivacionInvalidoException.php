<?php

namespace App\Exceptions;

use Exception;

class TokenActivacionInvalidoException extends Exception
{
    /**
     * Crear una nueva instancia de excepción de token de activación inválido
     *
     * @param string $message
     * @param int $code
     * @param \Throwable|null $previous
     */
    public function __construct(
        string $message = 'Token de activación inválido o expirado',
        int $code = 400,
        \Throwable $previous = null
    ) {
        parent::__construct($message, $code, $previous);
    }
}
