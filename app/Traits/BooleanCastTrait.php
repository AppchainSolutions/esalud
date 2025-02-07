<?php

namespace App\Traits;

trait BooleanCastTrait
{
    /**
     * Convierte valores de diferentes bases de datos a booleano
     * 
     * @param mixed $value
     * @return bool
     */
    public function castToBoolean($value): bool
    {
        if (is_bool($value)) {
            return $value;
        }

        if (is_numeric($value)) {
            return (bool) intval($value);
        }

        if (is_string($value)) {
            return in_array(strtolower($value), ['true', '1', 'yes', 'si', 'on']);
        }

        return false;
    }

    /**
     * Convierte un booleano a un valor compatible con la base de datos
     * 
     * @param bool $value
     * @return int
     */
    public function booleanToDatabaseValue(bool $value): int
    {
        return $value ? 1 : 0;
    }
}
