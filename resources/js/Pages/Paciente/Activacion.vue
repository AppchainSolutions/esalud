<template>
    <v-container fluid fill-height class="login-container">
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
                <v-card elevation="12" class="pa-6">
                    <v-card-title class="text-center">
                        <h2 class="text-h4 font-weight-bold primary--text">
                            Activación de Cuenta
                        </h2>
                    </v-card-title>

                    <v-card-subtitle class="text-center mb-4">
                        Configura tu contraseña para acceder a tu cuenta
                    </v-card-subtitle>

                    <v-form @submit.prevent="submit" ref="activacionForm">
                        <v-text-field
                            v-model="form.password"
                            :append-icon="
                                showPassword ? 'mdi-eye' : 'mdi-eye-off'
                            "
                            :type="showPassword ? 'text' : 'password'"
                            @click:append="showPassword = !showPassword"
                            :rules="passwordRules"
                            label="Contraseña"
                            required
                            @input="validatePassword"
                        >
                            <template v-slot:append>
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-icon v-bind="attrs" v-on="on">
                                            mdi-help-circle
                                        </v-icon>
                                    </template>
                                    <div>
                                        <strong
                                            >Requisitos de Contraseña:</strong
                                        >
                                        <ul class="pl-4">
                                            <li>Mínimo 12 caracteres</li>
                                            <li>
                                                Incluir mayúsculas y minúsculas
                                            </li>
                                            <li>Contener números</li>
                                            <li>Usar caracteres especiales</li>
                                        </ul>
                                        <p class="mt-2 text-caption">
                                            Una contraseña fuerte protege tu
                                            información personal
                                        </p>
                                    </div>
                                </v-tooltip>
                            </template>
                        </v-text-field>

                        <v-text-field
                            v-model="form.password_confirmation"
                            :append-icon="
                                showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'
                            "
                            :type="showConfirmPassword ? 'text' : 'password'"
                            @click:append="
                                showConfirmPassword = !showConfirmPassword
                            "
                            :rules="confirmPasswordRules"
                            label="Confirmar Contraseña"
                            required
                            clearable
                            @input="validatePassword"
                        ></v-text-field>

                        <v-progress-linear
                            :value="passwordStrength.strength * 20"
                            :color="passwordStrengthColor"
                            height="7"
                            class="my-3"
                        ></v-progress-linear>

                        <v-expand-transition>
                            <v-alert
                                v-if="passwordStrength.strength < 3"
                                type="warning"
                                dense
                                outlined
                                class="mb-4"
                            >
                                {{ passwordStrength.message }}
                            </v-alert>
                        </v-expand-transition>

                        <v-list
                            v-if="passwordStrength.strength < 5"
                            dense
                            class="py-0"
                        >
                            <v-list-item
                                v-for="(
                                    requirement, index
                                ) in passwordRequirements"
                                :key="index"
                                :color="requirement.met ? 'success' : 'error'"
                                class="px-0"
                            >
                                <v-list-item-content>
                                    <v-list-item-title
                                        class="d-flex justify-space-between align-center"
                                    >
                                        {{ requirement.text }}
                                        <v-icon
                                            :color="
                                                requirement.met
                                                    ? 'success'
                                                    : 'error'
                                            "
                                            class="ml-2"
                                        >
                                            {{
                                                requirement.met
                                                    ? "mdi-check-circle"
                                                    : "mdi-close-circle"
                                            }}
                                        </v-icon>
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                type="submit"
                                color="primary"
                                :disabled="!isFormValid"
                                block
                                variant="tonal"
                            >
                                Activar Cuenta
                            </v-btn>
                        </v-card-actions>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref, computed, reactive } from "vue";
import { router } from "@inertiajs/vue3";

const props = defineProps({
    token: {
        type: String,
        required: true,
    },
    paciente: {
        type: Object,
        default: () => ({}),
    },
});

const form = reactive({
    token: route().params.token || '80uIgxnqREQS4PGkg82gP8PGcR4uWGz8bZtCq1EXWtOJK3Cm7YSzowcM8t7Uvahi',
    email: 'omar.ahumadag@gmail.com',
    password: 'P@ssw0rd2025!Esalud',
    password_confirmation: 'P@ssw0rd2025!Esalud'
});

const showPassword = ref(false);
const showConfirmPassword = ref(false);

const passwordStrength = computed(() => {
    const password = form.password;
    let strength = 0;

    // Criterios de complejidad
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[@$!%*?&]/.test(password);
    const minLength = password.length >= 12;

    // Calcular fuerza de contraseña
    if (hasLowercase) strength++;
    if (hasUppercase) strength++;
    if (hasNumber) strength++;
    if (hasSpecialChar) strength++;
    if (minLength) strength++;

    return {
        strength: strength,
        message:
            strength < 3
                ? "Contraseña débil"
                : strength < 5
                ? "Contraseña moderada"
                : "Contraseña fuerte",
    };
});

const passwordRequirements = reactive([
    {
        text: "Mínimo 12 caracteres",
        met: computed(() => form.password.length >= 12),
    },
    {
        text: "Incluir mayúsculas y minúsculas",
        met: computed(
            () => /[A-Z]/.test(form.password) && /[a-z]/.test(form.password)
        ),
    },
    {
        text: "Contener números",
        met: computed(() => /[0-9]/.test(form.password)),
    },
    {
        text: "Usar caracteres especiales",
        met: computed(() =>
            /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(form.password)
        ),
    },
]);

const passwordStrengthColor = computed(() => {
    switch (passwordStrength.value.strength) {
        case 0:
            return "error";
        case 1:
            return "warning";
        case 2:
            return "warning";
        case 3:
            return "success";
        case 4:
            return "success";
        case 5:
            return "success";
        default:
            return "error";
    }
});

const validatePassword = () => {
    const password = form.password;
    let strength = 0;

    // Longitud
    if (password.length >= 12) strength++;

    // Complejidad
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSpecialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(
        password
    );

    if (hasUppercase && hasLowercase) strength++;
    if (hasNumbers && hasSpecialChars) strength++;

    passwordStrength.value = strength;
};

const passwordRules = [
    (v) => !!v || "La contraseña es requerida",
    (v) => v.length >= 12 || "La contraseña debe tener al menos 12 caracteres",
];

const confirmPasswordRules = [
    (v) => !!v || "Confirmar contraseña es requerido",
    (v) => v === form.password || "Las contraseñas no coinciden",
];

const isFormValid = computed(() => {
    return (
        form.password === form.password_confirmation &&
        form.password.length >= 12 &&
        passwordStrength.value.strength >= 3
    );
});

const submit = () => {
    console.log(form);
    router.post(route('paciente.activacion.completar'), form, {
    onSuccess: () => {
      // Notificación de éxito
      console.log('Cuenta activada exitosamente');
      // Redirigir al dashboard o mostrar mensaje
    },
    onError: (errors) => {
      console.error('Errores de activación:', errors);
      // Manejar errores específicos
      if (errors.password) {
        // Mostrar mensaje de error de contraseña
        console.error(errors.password);
      }
      if (errors.token) {
        // Mostrar mensaje de error de token
        console.error(errors.token);
      }
    }
  });
};
</script>

<style scoped>
.login-container {
    background-color: #f5f5f5;
    height: 100vh;
}
</style>
