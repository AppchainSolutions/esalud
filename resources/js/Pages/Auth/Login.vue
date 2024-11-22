<script setup>
import { Head, Link, useForm } from "@inertiajs/vue3";
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
    <div class="login-container">
        <Head title="Ingreso" />
        <div class="login-card">
            <h1 class="login-title">VULCO</h1>
            <div v-if="status">
                {{ status }}
            </div>
            <form @submit.prevent="submit">
                    <v-text-field
                        type="email"
                        id="email"
                        v-model="form.email"
                        autofocus
                        label="Usuario"
                        autocomplete
                        hide-details
                        required
                        class="mb-1"
                    />

                    <v-text-field
                        type="password"
                        id="password"
                        v-model="form.password"
                        required
                        autocomplete="current-password"
                        label="Clave"
                        class="mt-1"
                    />
                    <v-checkbox
                        v-model:checked="form.remember"
                        name="remember"
                        label="Recordar"
                    />
                    <v-btn
                        class="mb-2"
                        type="submit"
                        color="green"
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                    >
                        Ingresar
                    </v-btn>
                    <p class="text-sm text-gray-600">
                        <Link v-if="canResetPassword" :href="route('password.request')">
                            ¿Olvidó su clave?
                        </Link>
                    </p>
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
    background-color: #f7f4ee;
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

</style>
