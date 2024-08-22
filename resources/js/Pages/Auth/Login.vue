<script setup>
import { Head, Link, useForm } from "@inertiajs/vue3";
import AuthenticationCard from "@/Components/AuthenticationCard.vue";
import Checkbox from "@/Components/Checkbox.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import "../../../css/app.css";

defineProps({
    canResetPassword: Boolean,
    status: String,
});

const form = useForm({
    email: "",
    password: "",
    remember: false,
});

const submit = () => {
    form.transform((data) => ({
        ...data,
        remember: form.remember ? "on" : "",
    })).post(route("login"), {
        onFinish: () => form.reset("password"),
    });
};
</script>

<template>
    <Head title="Ingreso" />

    <AuthenticationCard>
        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

        <form @submit.prevent="submit">
            <div>
                <InputLabel for="email" value="Email" />
                <TextInput
                    id="email"
                    v-model="form.email"
                    type="email"
                    class="mt-1 block w-full"
                    required
                    autofocus
                    autocomplete="username"
                />
                <InputError class="mt-2" :message="form.errors.email" />
            </div>

            <div class="mt-4">
                <InputLabel for="password" value="Clave" />
                <TextInput
                    id="password"
                    v-model="form.password"
                    type="password"
                    class="mt-1 block w-full"
                    required
                    autocomplete="current-password"
                />
                <InputError class="mt-2" :message="form.errors.password" />
            </div>

            <div class="block mt-4">
                <label class="flex items-center">
                    <Checkbox v-model:checked="form.remember" name="remember" />
                    <span class="ms-2 text-sm text-gray-600">Recordar</span>
                </label>
            </div>

            <div class="flex items-center justify-end mt-4">
                <Link
                    v-if="canResetPassword"
                    :href="route('password.request')"
                    class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    ¿Olvidó su clave?
                </Link>

                <PrimaryButton
                    class="ms-4"
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                >
                    Ingresar
                </PrimaryButton>
            </div>
        </form>
    </AuthenticationCard>
</template>

<!-- <script setup>
 import { Head, Link, useForm } from '@inertiajs/vue3';
  
  defineProps({
    canResetPassword: Boolean,
    status: String,
    message: String,
 });
 
 const form = useForm({
    username: '',
    password: '',
    remember: false,
 });
 
 const submit = () => {
     form.transform(data => ({
         ...data,
         remember: form.remember ? 'on' : '',
    })).post(route('login'), {
        onFinish: () => form.reset('password'),
    });
 };
    
 
  </script>
  <template>
     <div class="login-container">
         <Head title="Ingreso" />
       <div class="login-card">
         <h1 class="login-title">VitamHC</h1>
         <div v-if="status" >
             {{ status }}
         </div>
         <form @submit.prevent="submit">
           <div class="form-group">
             <label for="username">Usuario:</label>
             <input type="email" id="email" v-model="form.email" required autofocus/>
             <div v-show="message">
         <p class="text-sm text-red-600">
             {{ message }}
         </p>
     </div>
           </div>
           <div class="form-group">
             <label for="password">Password:</label>
             <input type="password" id="password" v-model="form.password" required autocomplete="current-password">
             <div v-show="message">
         <p class="text-sm text-red-600">
             {{ message }}
         </p>
     </div>
           </div>
           <v-checkbox v-model:checked="form.remember" name="remember" label="Recordar"/>
           <button type="submit" class="login-btn" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">Ingresar</button>
           <Link v-if="canResetPassword" :href="route('password.request')">
                     ¿Olvidó su clave?
                 </Link>
         </form>
       </div>
     </div>
   </template>
   
   <style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.login-card {
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 10px;
}

input[type="text"], input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login-btn {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.login-btn:hover {
  background-color: #3e8e41;
}
</style> -->
