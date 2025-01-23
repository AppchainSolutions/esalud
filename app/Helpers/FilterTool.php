<?php

namespace App\Helpers;

class FilterTool
{
    /**
     * Filtra los datos según los filtros proporcionados
     *
     * @param array $filters Array de filtros a aplicar
     * @param mixed $data Datos a filtrar
     * @return mixed
     */
    public static function filterData($filters, $data)
    {
        if (empty($filters) || empty($data)) {
            return $data;
        }

        if ($data instanceof \Illuminate\Database\Eloquent\Collection) {
            return $data->filter(function ($item) use ($filters) {
                foreach ($filters as $key => $value) {
                    if (!property_exists($item, $key) || $item->{$key} != $value) {
                        return false;
                    }
                }
                return true;
            });
        }

        // Si es un array
        if (is_array($data)) {
            return array_filter($data, function ($item) use ($filters) {
                foreach ($filters as $key => $value) {
                    if (!isset($item[$key]) || $item[$key] != $value) {
                        return false;
                    }
                }
                return true;
            });
        }

        return $data;
    }
}
