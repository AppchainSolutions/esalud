<?php

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

uses(RefreshDatabase::class, TestCase::class);

test('login screen can be rendered', function () {
    $response = $this->get('/login');

    $response->assertStatus(200);
});

test('users can authenticate using the login screen', function () {
    $user = User::factory()->create([
        'email' => 'test@example.com',
        'password' => Hash::make('password123'),
    ]);

    $response = $this->post('/login', [
        'email' => 'test@example.com',
        'password' => 'password123',
    ]);

    $this->assertAuthenticated();
    $response->assertRedirect(route('dashboard')); // Adjust the route as needed
});

test('users cannot authenticate with invalid password', function () {
    $user = User::factory()->create([
        'email' => 'usuario2@prueba.com',
        'password' => Hash::make('clave1234'),
    ]);

    $this->post('/login', [
        'email' => $user->email,
        'password' => 'wrong-password',
    ]);

    $this->assertGuest();
});
