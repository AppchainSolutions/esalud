<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Activación de Cuenta
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Configura tu contraseña para acceder a tu cuenta
        </p>
      </div>
      
      <form @submit.prevent="submitActivacion" class="mt-8 space-y-6">
        <input type="hidden" name="token" :value="token" />
        
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="password" class="sr-only">Contraseña</label>
            <input 
              id="password" 
              name="password" 
              type="password" 
              required 
              v-model="form.password"
              @input="validatePassword"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Contraseña"
            />
          </div>
          <div>
            <label for="password_confirmation" class="sr-only">Confirmar Contraseña</label>
            <input 
              id="password_confirmation" 
              name="password_confirmation" 
              type="password" 
              required 
              v-model="form.password_confirmation"
              @input="validatePassword"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Confirmar Contraseña"
            />
          </div>
        </div>

        <div v-if="passwordStrength" class="mt-2">
          <div class="h-2 w-full bg-gray-200 rounded-full">
            <div 
              :class="{
                'bg-red-500': passwordStrength < 2,
                'bg-yellow-500': passwordStrength === 2,
                'bg-green-500': passwordStrength === 3
              }"
              :style="`width: ${passwordStrength * 33.33}%`" 
              class="h-2 rounded-full transition-all duration-300"
            ></div>
          </div>
          <p 
            :class="{
              'text-red-500': passwordStrength < 2,
              'text-yellow-500': passwordStrength === 2,
              'text-green-500': passwordStrength === 3
            }"
            class="text-sm mt-1"
          >
            {{ passwordStrengthMessage }}
          </p>
        </div>

        <div>
          <button 
            type="submit" 
            :disabled="!isFormValid"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            Activar Cuenta
          </button>
        </div>
      </form>
    </div>
  </div>
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

const isFormValid = computed(() => {
  return form.password === form.password_confirmation && 
         form.password.length >= 12 && 
         passwordStrength.value >= 2
})

const submitActivacion = () => {
  form.post(route('paciente.activar'), {
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
/* Estilos adicionales si son necesarios */
</style>
