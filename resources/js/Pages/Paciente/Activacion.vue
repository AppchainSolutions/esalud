<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Activación de Cuenta
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Completa tu registro para {{ paciente.nombre }} {{ paciente.apellidos }}
        </p>
      </div>
      <form @submit.prevent="submit" class="mt-8 space-y-6">
        <input type="hidden" name="token" :value="token" />
        
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email" class="sr-only">Correo Electrónico</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              v-model="form.email"
              required 
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
              placeholder="Correo Electrónico"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Contraseña</label>
            <input 
              id="password" 
              name="password" 
              type="password" 
              v-model="form.password"
              required 
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
              placeholder="Contraseña"
            />
          </div>
          <div>
            <label for="password_confirmation" class="sr-only">Confirmar Contraseña</label>
            <input 
              id="password_confirmation" 
              name="password_confirmation" 
              type="password" 
              v-model="form.password_confirmation"
              required 
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
              placeholder="Confirmar Contraseña"
            />
          </div>
        </div>

        <div>
          <button 
            type="submit" 
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Activar Cuenta
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { useForm } from '@inertiajs/vue3'

export default {
  props: {
    token: String,
    paciente: Object
  },

  setup(props) {
    const form = useForm({
      token: props.token,
      email: '',
      password: '',
      password_confirmation: ''
    })

    return { form }
  },

  methods: {
    submit() {
      this.form.post(route('paciente.activar'), {
        onError: () => {
          // Manejar errores de validación
        },
        onSuccess: () => {
          // Redirigir o mostrar mensaje de éxito
        }
      })
    }
  }
}
</script>
