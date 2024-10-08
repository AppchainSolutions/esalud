<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class LoginTest extends DuskTestCase
{
    /**#email
     * A Dusk test example.
     */
    public function testExample(): void
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/login')
                    ->type('#email', 'admin@example.com')
                    ->type('#password', 'password123')
                    ->press('INGRESAR')
                    ->assertPathIs('/dashboard');
        });
    }
}
