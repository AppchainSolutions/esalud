<template>
  <v-container fluid fill-height class="login-container">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card elevation="12" class="pa-6">
          <v-card-title class="text-center">
            <h2 class="text-h4 font-weight-bold primary--text">Activación de Cuenta</h2>
          </v-card-title>
          
          <v-card-subtitle class="text-center mb-4">
            Configura tu contraseña para acceder a tu cuenta
          </v-card-subtitle>

          <v-form @submit.prevent="submitActivacion" ref="activacionForm">
            <v-text-field
              v-model="form.password"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              @click:append="showPassword = !showPassword"
              :rules="passwordRules"
              label="Contraseña"
              required
              @input="validatePassword"
            ></v-text-field>

            <v-text-field
              v-model="form.password_confirmation"
              :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showConfirmPassword ? 'text' : 'password'"
              @click:append="showConfirmPassword = !showConfirmPassword"
              :rules="confirmPasswordRules"
              label="Confirmar Contraseña"
              required
              @input="validatePassword"
            ></v-text-field>

            <v-progress-linear
              :value="passwordStrength * 33.33"
              :color="passwordStrengthColor"
              height="7"
              class="my-3"
            ></v-progress-linear>

            <v-alert 
              v-if="passwordStrength < 2" 
              type="warning" 
              dense 
              outlined
            >
              {{ passwordStrengthMessage }}
            </v-alert>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn 
                type="submit" 
                color="primary" 
                :disabled="!isFormValid"
                block
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
import { ref, computed } from 'vue'
import { useForm } from '@inertiajs/vue3'

const props = defineProps({
  token: {
    type: String,
    required: true
  },
  paciente: {
    type: Object,
    default: () => ({})
  }
})

const form = useForm({
  token: props.token,
  password: '',
  password_confirmation: ''
})

const showPassword = ref(false)
const showConfirmPassword = ref(false)

const passwordStrength = ref(0)
const passwordStrengthMessage = computed(() => {
  switch(passwordStrength.value) {
    case 0: return 'Contraseña muy débil'
    case 1: return 'Contraseña débil'
    case 2: return 'Contraseña moderada'
    case 3: return 'Contraseña fuerte'
    default: return ''
  }
})

const passwordStrengthColor = computed(() => {
  switch(passwordStrength.value) {
    case 0: return 'error'
    case 1: return 'warning'
    case 2: return 'warning'
    case 3: return 'success'
    default: return 'error'
  }
})

const validatePassword = () => {
  const password = form.password
  let strength = 0

  // Longitud
  if (password.length >= 12) strength++
  
  // Complejidad
  const hasUppercase = /[A-Z]/.test(password)
  const hasLowercase = /[a-z]/.test(password)
  const hasNumbers = /[0-9]/.test(password)
  const hasSpecialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)

  if (hasUppercase && hasLowercase) strength++
  if (hasNumbers && hasSpecialChars) strength++

  passwordStrength.value = strength
}

const passwordRules = [
  v => !!v || 'La contraseña es requerida',
  v => v.length >= 12 || 'La contraseña debe tener al menos 12 caracteres',
]

const confirmPasswordRules = [
  v => !!v || 'Confirmar contraseña es requerido',
  v => v === form.password || 'Las contraseñas no coinciden',
]

const isFormValid = computed(() => {
  return form.password === form.password_confirmation && 
         form.password.length >= 12 && 
         passwordStrength.value >= 2
})

const submitActivacion = () => {
  form.post(route('paciente.completar-activacion'), {
    onSuccess: () => {
      // Redirigir o mostrar mensaje de éxito
    },
    onError: (errors) => {
      // Manejar errores de activación
    }
  })
}
</script>

<style scoped>
.login-container {
  background-color: #f5f5f5;
  height: 100vh;
}
</style>
