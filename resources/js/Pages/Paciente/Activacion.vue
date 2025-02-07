<template>
  <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
    <div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
      <h2 class="text-2xl font-bold mb-4 text-center">
        Activación de Cuenta
      </h2>
      
      <p class="mb-4 text-center">
        Hola {{ paciente.nombres }} {{ paciente.apellidos }}, 
        estás a punto de activar tu cuenta en eSalud.
      </p>

      <form @submit.prevent="submit">
        <div class="mt-4">
          <InputLabel for="email" value="Correo Electrónico" />
          <TextInput
            id="email"
            type="email"
            class="mt-1 block w-full"
            :value="paciente.email"
            disabled
          />
        </div>

        <div class="mt-4">
          <InputLabel for="password" value="Contraseña" />
          <TextInput
            id="password"
            type="password"
            class="mt-1 block w-full"
            v-model="form.password"
            required
            autocomplete="new-password"
          />
          <InputError :message="form.errors.password" class="mt-2" />
          
          <PasswordStrengthMeter 
            :password="form.password" 
            class="mt-2" 
          />
        </div>

        <div class="mt-4">
          <InputLabel for="password_confirmation" value="Confirmar Contraseña" />
          <TextInput
            id="password_confirmation"
            type="password"
            class="mt-1 block w-full"
            v-model="form.password_confirmation"
            required
            autocomplete="new-password"
          />
          <InputError 
            :message="form.errors.password_confirmation" 
            class="mt-2" 
          />
          
          <p 
            v-if="form.password && form.password_confirmation && !passwordsMatch" 
            class="text-sm text-red-500 mt-2"
          >
            Las contraseñas no coinciden
          </p>
        </div>

        <div class="flex items-center justify-end mt-4">
          <PrimaryButton 
            class="ml-4" 
            :class="{ 'opacity-25': form.processing }" 
            :disabled="form.processing || !passwordsMatch"
          >
            Activar Cuenta
          </PrimaryButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useForm } from '@inertiajs/vue3'
import PasswordStrengthMeter from '@/Components/PasswordStrengthMeter.vue'
import InputError from '@/Components/InputError.vue'
import InputLabel from '@/Components/InputLabel.vue'
import TextInput from '@/Components/TextInput.vue'
import PrimaryButton from '@/Components/PrimaryButton.vue'

const props = defineProps<{
  token: string
  paciente: {
    nombres: string
    apellidos: string
    email: string
  }
}>()

const form = useForm({
  token: props.token,
  password: '',
  password_confirmation: ''
})

const submit = () => {
  form.post(route('paciente.activar'), {
    onFinish: () => {
      form.reset('password', 'password_confirmation')
    }
  })
}

const passwordsMatch = computed(() => {
  return form.password === form.password_confirmation
})
</script>

<style scoped>
.bg-gray-100 {
  background-color: #f3f4f6;
}
</style>
