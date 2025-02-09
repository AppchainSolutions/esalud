/**
 * Valida un RUT chileno
 * @param {string} rut - RUT a validar
 * @returns {boolean} - true si el RUT es válido, false si no lo es
 */
export const validateRut = (rut) => {
    if (!rut || typeof rut !== 'string') return false;

    // Eliminar puntos y guión
    const rutLimpio = rut.replace(/[.-]/g, '');

    // Obtener dígito verificador
    const dv = rutLimpio.slice(-1).toUpperCase();
    const rutNumerico = parseInt(rutLimpio.slice(0, -1), 10);

    if (isNaN(rutNumerico)) return false;

    // Calcular dígito verificador
    const calcularDV = (rutNum) => {
        let suma = 0;
        let multiplicador = 2;
        
        // Convertir número a string y recorrer de derecha a izquierda
        const rutString = String(rutNum);
        for (let i = rutString.length - 1; i >= 0; i--) {
            suma += parseInt(rutString[i]) * multiplicador;
            multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
        }

        const resto = suma % 11;
        const dvCalculado = 11 - resto;

        if (dvCalculado === 11) return '0';
        if (dvCalculado === 10) return 'K';
        return String(dvCalculado);
    };

    return dv === calcularDV(rutNumerico);
};

/**
 * Formatea un RUT chileno
 * @param {string} rut - RUT a formatear
 * @returns {string} - RUT formateado
 */
export const formatRut = (rut) => {
    if (!rut) return '';
    
    // Eliminar puntos y guión
    const rutLimpio = rut.replace(/[.-]/g, '');
    
    // Separar número y dígito verificador
    const numero = rutLimpio.slice(0, -1);
    const dv = rutLimpio.slice(-1);
    
    // Formatear número con puntos
    const numeroFormateado = numero.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    
    return `${numeroFormateado}-${dv}`;
};

/**
 * Regla de validación para vee-validate
 */
export const rutRule = {
    validate: validateRut,
    message: 'El RUT ingresado no es válido'
};
