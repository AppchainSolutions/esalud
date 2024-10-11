<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;
use App\Models\User;

test('basic example', function () {
    User::truncate();
    $user = User::factory()->createAuthUser();

        $this->browse(function (Browser $browser) use ($user) {
            $browser->visit('/login')
            ->type('email', $user->email)
            ->type('password', 'password123')
            ->press('INGRESAR')
            ->assertPathIs('/dashboard');
        });
});



