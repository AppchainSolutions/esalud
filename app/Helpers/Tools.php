<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Log;
use \Illuminate\Database\QueryException;

class Tools
{
    public static function filterData(?array $filters, object $query)
    {
        if (is_null($filters) || empty($filters)) {
            return $query->all()->get();
        }

        foreach ($filters as $key => $value) {
            Log::info("Filtering by: {$key} => {$value}");
        }

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
    }

    private static function applyDateFilter($query, $field, $dates)
    {
        // Implementation of applyDateFilter
    }
}