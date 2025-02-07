<?php

namespace App\Models;

use App\Traits\BooleanCastTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Laravel\Jetstream\HasProfilePhoto;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use BooleanCastTrait;
    use HasApiTokens;
    use HasFactory;
    use HasProfilePhoto;
    use Notifiable;
    use TwoFactorAuthenticatable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'lastname',
        'email',
        'password',
        'rol',
        'activo',
        'rut'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_recovery_codes',
        'two_factor_secret',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'activo' => 'boolean',
    ];

    /**
     * Verifica si el usuario es un paciente
     *
     * @return bool
     */
    public function esPaciente()
    {
        return $this->rol === 'paciente';
    }

    /**
     * The accessors to append to the model's array form.
     *
     * @var array<int, string>
     */
    protected $appends = [
        'profile_photo_url',
    ];

    public function paciente()
    {
        return $this->hasOne(Paciente::class);
    }

    // Sobrescribir método de casting para manejar compatibilidad
    public function getAttribute($key)
    {
        $value = parent::getAttribute($key);

        if (in_array($key, ['activo']) && $value !== null) {
            return $this->castToBoolean($value);
        }

        return $value;
    }

    // Método para establecer valores booleanos
    public function setAttribute($key, $value)
    {
        if (in_array($key, ['activo'])) {
            $value = $this->booleanToDatabaseValue($this->castToBoolean($value));
        }

        return parent::setAttribute($key, $value);
    }
}
