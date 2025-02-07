<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ActivacionPacienteRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        // Aquí podrías agregar lógica adicional de autorización si es necesario
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'token' => ['required', 'string', 'min:64', 'max:64'],
            'password' => [
                'required', 
                'string', 
                'min:12', 
                'confirmed',
                'regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/'
            ],
            'password_confirmation' => ['required', 'same:password']
        ];
    }

    /**
     * Get custom messages for validator errors.
     *
     * @return array
     */
    public function messages(): array
    {
        return [
            'token.required' => 'El token de activación es obligatorio.',
            'token.min' => 'El token de activación no es válido.',
            'token.max' => 'El token de activación no es válido.',
            'password.required' => 'La contraseña es obligatoria.',
            'password.min' => 'La contraseña debe tener al menos 12 caracteres.',
            'password.regex' => 'La contraseña debe incluir mayúsculas, minúsculas, números y caracteres especiales.',
            'password.confirmed' => 'La confirmación de contraseña no coincide.',
            'password_confirmation.required' => 'Debe confirmar la contraseña.',
            'password_confirmation.same' => 'La confirmación de contraseña no coincide.'
        ];
    }
}
