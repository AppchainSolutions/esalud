<?php

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;
use App\Models\User;
use PHPUnit\Framework\Attributes\Test;

/* test('example', function () {
    $this->browse(function (Browser $browser) {
        $browser->visit('/login')
                ->assertSee('Municipalidad');
    });
});
 */
class LoginTest extends DuskTestCase
{
    #[Test]
    public function it_can_login_with_valid_credentials()
    {
        $user = User::factory()->create([
            'email' => 'example@example.com',
            'password' => bcrypt('password1234'),
        ]);

        $this->browse(function (Browser $browser) use ($user) {
            $browser->visit('/login')
                    ->type('email', $user->email)
                    ->type('password', 'password1234')
                    ->press('Login')
                    ->assertPathIs('/dashboard')
                    ->assertSee('Dashboard'); // Adjust this based on what you expect to see after login
        });
    }

    #[Test]
    public function it_cannot_login_with_invalid_credentials()
    {
        $user = User::factory()->create([
            'email' => 'example@example.com',
            'password' => Hash::make('password123'),
        ]);

        $this->browse(function (Browser $browser) use ($user) {
            $browser->visit('/login')
                    ->type('email', $user->email)
                    ->type('password', 'wrongpassword')
                    ->press('Ingresar')
                    ->assertPathIs('/login')
                    ->assertSee('These credentials do not match our records.');
        });
    }
}