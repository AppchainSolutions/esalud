<?php

namespace Tests\Feature;

$endpoints = [
    "afp",
    "calle",
    "estado_civil",
    "establecimiento_educacional",
    "especialidad",
    "genero",
    "grupo_sanguineo",
    "ley_social",
    "nacionalidad",
    "nivel_instruccion",
    "prevision",
    "pueblo_originario",
    "religion",
    "seguro_salud",
];

foreach ($endpoints as $endpoint) {
    it("tests the /api/{$endpoint}/all endpoint", function () use ($endpoint) {
        $response = $this->getJson("/api/{$endpoint}/all");
        $response->assertStatus(200);
    });
}
