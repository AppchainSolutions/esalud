   # Validation

   ```js

    //Schema
   validationSchema: {
        rutRules: [
            (value) => {
                const regex = /^[0-9]+[-|‐]{1}[0-9kK]{1}$/;
                if (!regex.test(value)) {
                    return false;
                }

                // Separar el número y el dígito verificador
                let splitidRut = value.split("-");
                let num = splitidRut[0];
                let dv = splitidRut[1].toLowerCase();
                // Calcular el dígito verificador esperado
                let m = 0,
                    s = 1;
                for (; num; num = Math.floor(num / 10)) {
                    s = (s + (num % 10) * (9 - (m++ % 6))) % 11;
                }
                let dvEsperado = s ? s - 1 : "k";
                const validate = dv === dvEsperado;
                return validate
                    ? true
                    : "El rut no es válido. Por favor, verifique el formato y los dígitos.";
            },
        ],
        emailRules: [
            (value) => {
                if (value) return true;
                return "Se necesita un email.";
            },
            (value) => {
                if (/.+@.+\..+/.test(value)) return true;
                return "El email debe ser válido.";
            },
        ],
    },