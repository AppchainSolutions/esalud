import { describe, it, expect } from 'vitest';
import { validateRut, formatRut, rutRule } from '../../../resources/js/utils/rut-validator';

describe('Validación de RUT', () => {
    // Pruebas para validateRut
    describe('validateRut', () => {
        it('debería validar RUTs correctos', () => {
            const rutsValidos = [
                '12345678-9',
                '11111111-1',
                '22222222-2',
                '33333333-3',
                '44444444-4',
                '55555555-5',
                '66666666-6',
                '77777777-7',
                '88888888-8',
                '99999999-9',
                '14328145-0',
                '20786344-2',
                '11937898-K'
            ];

            rutsValidos.forEach(rut => {
                expect(validateRut(rut)).toBe(true);
            });
        });

        it('debería rechazar RUTs inválidos', () => {
            const rutsInvalidos = [
                '12345678-0', // dígito verificador incorrecto
                '11111111-2',
                '22222222-3',
                '33333333-4',
                '1234567-8',  // muy corto
                '123456789-9', // muy largo
                'abcdefgh-9',  // letras en vez de números
                '12345678-',   // sin dígito verificador
                '-9',          // sin números
                '',           // vacío
                null,         // null
                undefined,    // undefined
                '12345678'    // sin guión
            ];

            rutsInvalidos.forEach(rut => {
                expect(validateRut(rut)).toBe(false);
            });
        });

        it('debería manejar RUTs con diferentes formatos', () => {
            // El mismo RUT en diferentes formatos
            const formatosValidos = [
                '12.345.678-9',
                '12345678-9',
                '123456789'
            ];

            formatosValidos.forEach(rut => {
                expect(validateRut(rut)).toBe(true);
            });
        });
    });

    // Pruebas para formatRut
    describe('formatRut', () => {
        it('debería formatear RUTs correctamente', () => {
            const casos = [
                { entrada: '123456789', esperado: '12.345.678-9' },
                { entrada: '12345678-9', esperado: '12.345.678-9' },
                { entrada: '12.345.678-9', esperado: '12.345.678-9' },
                { entrada: '11111111-1', esperado: '11.111.111-1' },
                { entrada: '11937898K', esperado: '11.937.898-K' }
            ];

            casos.forEach(({ entrada, esperado }) => {
                expect(formatRut(entrada)).toBe(esperado);
            });
        });

        it('debería manejar casos especiales', () => {
            expect(formatRut('')).toBe('');
            expect(formatRut(null)).toBe('');
            expect(formatRut(undefined)).toBe('');
        });
    });

    // Pruebas para la regla de validación de vee-validate
    describe('rutRule', () => {
        it('debería tener la estructura correcta', () => {
            expect(rutRule).toHaveProperty('validate');
            expect(rutRule).toHaveProperty('message');
            expect(typeof rutRule.validate).toBe('function');
            expect(typeof rutRule.message).toBe('string');
        });

        it('debería validar usando la función validateRut', () => {
            const rutValido = '12345678-9';
            const rutInvalido = '12345678-0';

            expect(rutRule.validate(rutValido)).toBe(true);
            expect(rutRule.validate(rutInvalido)).toBe(false);
        });

        it('debería tener un mensaje de error en español', () => {
            expect(rutRule.message).toBe('El RUT ingresado no es válido');
        });
    });
});
