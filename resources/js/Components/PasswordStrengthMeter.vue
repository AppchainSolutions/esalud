<script setup lang="ts">
import { ref, computed, watch } from 'vue'

const props = defineProps<{
  password: string
}>()

const strength = ref(0)

const calculateStrength = (password: string): number => {
  let score = 0

  // Longitud
  if (password.length >= 12) score += 1
  if (password.length >= 16) score += 1

  // Complejidad
  const hasLowercase = /[a-z]/.test(password)
  const hasUppercase = /[A-Z]/.test(password)
  const hasNumbers = /[0-9]/.test(password)
  const hasSpecialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)

  if (hasLowercase) score += 1
  if (hasUppercase) score += 1
  if (hasNumbers) score += 1
  if (hasSpecialChars) score += 1

  return Math.min(score, 5)
}

watch(() => props.password, (newPassword) => {
  strength.value = calculateStrength(newPassword)
})

const strengthLabel = computed(() => {
  const labels = [
    'Muy débil',
    'Débil',
    'Moderada',
    'Fuerte',
    'Muy fuerte',
    'Excelente'
  ]
  return labels[strength.value]
})

const strengthColor = computed(() => {
  const colors = [
    'bg-red-500',
    'bg-orange-500',
    'bg-yellow-500',
    'bg-green-500',
    'bg-green-700',
    'bg-green-900'
  ]
  return colors[strength.value]
})
</script>

<template>
  <div class="password-strength-meter">
    <div 
      class="h-2 rounded-full transition-all duration-300" 
      :class="strengthColor"
      :style="{ width: `${(strength / 5) * 100}%` }"
    ></div>
    <p 
      class="text-sm mt-1 font-semibold" 
      :class="{
        'text-red-500': strength <= 2,
        'text-yellow-500': strength === 3,
        'text-green-500': strength >= 4
      }"
    >
      Fortaleza de contraseña: {{ strengthLabel }}
    </p>
  </div>
</template>

<style scoped>
.password-strength-meter {
  @apply w-full mt-2;
}
</style>
