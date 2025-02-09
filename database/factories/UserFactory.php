<?php

namespace Database\Factories;

use App\Helpers\RutGenerator;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    protected $model = User::class;

    protected static ?string $password;

    public function definition(): array
    {
        
        return [
            'name' => $this->faker->firstName(),
            'lastname' => $this->faker->lastName(),
            'rut' => RutGenerator::generate(),
            'email' => $this->faker->unique()->safeEmail(),
            'rol' => 'paciente', // Por defecto creamos usuarios pacientes
            'activo' => true,
            'email_verified_at' => now(),
            'password' => Hash::make('password'), // contraseña por defecto
            'two_factor_secret' => null,
            'two_factor_recovery_codes' => null,
            'remember_token' => Str::random(10),
            'profile_photo_path' => null,
            'current_team_id' => null,
        ];
    }

    public function unverified()
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }

    public function createAuthUser(array $attributes = [])
    {
        return $this->state(function (array $attributes) {
            return [
                'email' => 'test@example.com',
                'password' => Hash::make('password123'),
            ];
        })->create($attributes);
    }
}
