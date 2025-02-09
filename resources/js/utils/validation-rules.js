import { defineRule } from 'vee-validate';
import { rutRule } from './rut-validator';

// Registrar regla de validación de RUT
defineRule('rut', rutRule);

// Mensajes de error personalizados en español
export const messages = {
    rut: 'El RUT ingresado no es válido',
    required: 'Este campo es obligatorio',
    email: 'Debe ser un correo electrónico válido',
    min: 'Este campo debe tener al menos {length} caracteres',
    max: 'Este campo no puede tener más de {length} caracteres',
};
