<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

$endpoints = [
    "afps",
    "calles",
    "estados_civiles",
    "establecimientos_educacionales",
    "especialidades",
    "generos",
    "grupos_sanguineos",
    "leyes_sociales",
    "nacionalidades",
    "niveles_instruccionales",
    "previsiones",
    "pueblos_originarios",
    "religiones",
    "seguros_salud",
];

uses(RefreshDatabase::class, TestCase::class);

foreach ($endpoints as $endpoint) {
    it("tests the /api/{$endpoint} endpoint", function () use ($endpoint) {
        $response = $this->getJson("/api/{$endpoint}");
        $response->assertStatus(200);
    });
}
