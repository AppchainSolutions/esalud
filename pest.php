<?php

require_once __DIR__ . '/tests/bootstrap.php';

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;

/*
|--------------------------------------------------------------------------
| Test Case
|--------------------------------------------------------------------------
|
| The closure you provide to `uses()` will be
| automatically applied to all tests.
|
*/

uses(
    RefreshDatabase::class, 
    WithFaker::class
)->in('tests');

/*
|--------------------------------------------------------------------------
| Expectations
|--------------------------------------------------------------------------
|
| When you're writing tests, you often want to check that the values of
| your variables are exactly what you expect them to be. The `expect()`
| function gives you a fluent and expressive way to make assertions.
|
*/

/*
|--------------------------------------------------------------------------
| Functions
|--------------------------------------------------------------------------
|
| While Pest is very powerful out of the box, you may have some
| crazy ideas that are hard to compone with other tools.
|
*/

function something()
{
    // helper function for tests
}
