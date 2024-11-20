<?php

// app/Helpers/RutGenerator.php

namespace App\Helpers;

class RutGenerator
{
    public static function generarRut()
    {
        $numero = rand(1000000, 25000000); // Genera un número aleatorio
        $dv = self::calcularDigitoVerificador($numero); // Calcula el dígito verificador

        return $numero.'-'.$dv; // Retorna el RUT en formato "12345678-9"
    }

    private static function calcularDigitoVerificador($numero)
    {
        $suma = 0;
        $multiplicador = 2;

        // Convierte el número a cadena para poder acceder a sus dígitos
        $numeroStr = (string) $numero;

        // Calcula la suma de los dígitos multiplicados
        for ($i = strlen($numeroStr) - 1; $i >= 0; $i--) {
            $suma += $numeroStr[$i] * $multiplicador;
            $multiplicador = $multiplicador < 7 ? $multiplicador + 1 : 2; // Ciclo de multiplicadores
        }

        $dv = 11 - ($suma % 11);

        if ($dv == 10) {
            return 'K';
        } elseif ($dv == 11) {
            return '0';
        } else {
            return $dv;
        }
    }
}
