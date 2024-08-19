<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Log;
use QueryException;
class Tools
{
    public static function filterData(array $filters, object $query)
    {
        if (isset($filters)){
            try {
                foreach ($filters as $key => $value) {
                    //** Filter by date */
                    if (str_contains($key, 'fecha')) {
                        self::applyDateFilter($query, $key, $value);
                    } else {
                        $query->where($key, $value);
                    }
                }
                return $query->get();
            } catch (QueryException $error) {
                Log::error($error);
                return 'Error al filtrar por fechas';
            }
        } else {
            return $query->all()->get();
        }

    }
    private static function applyDateFilter($query, $field, $dates)
    {
        try {
            
            if (isset($dates['desde']) && isset($dates['hasta'])) {
                return $query->whereBetween($field, [$dates['desde'], $dates['hasta']]);
            } else {
                return "Falta una fecha";
            }

        } catch (QueryException $e) {
            return 'Formato de fecha incorrecto ';
        }
    }
}


