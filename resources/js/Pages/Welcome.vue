<script setup>
import { Link, Head } from "@inertiajs/vue3";
import "../../css/app.css";
// import img from "../../img/vitamhc.png"

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});
</script>

<template>
    <title>="BIENVENIDOS/AS"</title>

    <div
        class="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-  bg-center bg-gray-100 light:bg-dots-lighter light:bg-gray-900 selection:bg-red-500 selection:text-white"
        id="img-bg"
        >
        <div
            v-if="canLogin"
            class="sm:fixed sm:top-0 sm:end-0 p-6 text-end z-10"
        >
            <Link
                v-if="$page.props.auth.user"
                :href="route('dashboard')"
                class="font-semibold text-gray-600 hover:text-gray-900 light:text-gray-400 light:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >Dashboard</Link
            >

            <template v-else>
                <Link
                    :href="route('login')"
                    class="font-semibold text-gray-600 hover:text-gray-900 light:text-gray-400 light:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >Ingresar</Link
                >

                <Link
                    v-if="canRegister"
                    :href="route('register')"
                    class="ms-4 font-semibold text-gray-600 hover:text-gray-900 light:text-gray-400 light:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >Registrarse</Link
                >
            </template>
        </div>
    </div>
</template>


<style>
#img-bg {
  background: url('../../img/vitamhc.png');
  background-size: cover;
  height: 50%;
  width: 60%;
  display: block;
  margin-left: auto;
  margin-right: auto; 
}
</style>

