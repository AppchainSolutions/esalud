<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import PrimaryButton from '@/Components/PrimaryButton.vue'

defineProps<{
  mensaje: string
}>()
</script>

<template>
  <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
    <Head title="Error de Activación" />
    
    <div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg text-center">
      <div class="mb-4">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          class="h-16 w-16 mx-auto text-red-500" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
          />
        </svg>
      </div>
      
      <h2 class="text-2xl font-bold mb-4 text-red-600">
        Error de Activación
      </h2>
      
      <p class="mb-4 text-gray-700">
        {{ mensaje }}
      </p>
      
      <div class="flex justify-center mt-6">
        <Link 
          :href="route('login')" 
          as="button"
          class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
        >
          Volver al Inicio de Sesión
        </Link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-gray-100 {
  background-color: #f3f4f6;
}
</style>
