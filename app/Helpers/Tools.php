<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Log;
use Illuminate\Database\QueryException;

class Tools
{
    public static function filterData(array $filters, $query)
    {
        if (empty($filters)) {
            return $query->get();
        }

        /*   try {
              foreach ($filters as $key => $value) {
                  if (str_contains($key, 'fecha')) {
                      self::applyDateFilter($query, $key, $value);
                  } else {
                      $query->where($key, $value);
                  }
              }
              return $query->get();
          } catch (QueryException $error) {
              return 'Error al filtrar por fechas';
          } */


    }
    /*  private static function applyDateFilter($query, $field, $dates)
     {
         try {
             if (isset($dates['desde'], $dates['hasta'])) {
                 return $query->whereBetween($field, [$dates['desde'], $dates['hasta']])->get();
             } else {
                 return "Falta una fecha";
             }
         } catch (QueryException $e) {
             return 'Formato de fecha incorrecto';
         }
     } */
}
