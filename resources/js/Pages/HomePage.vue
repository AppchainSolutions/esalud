<template>
    <AppLayout>
        <div class="container mx-auto px-4 py-8">
            <h1 class="text-3xl font-bold mb-6">Bienvenido a eSalud</h1>

            <div v-if="user" class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-white shadow-md rounded-lg p-6">
                    <nav>
                        <template v-if="user.rol === 'paciente'">
                            <div class="grid grid-cols-[1fr,2fr] gap-6">
                                <div>
                                  <h2 class="text-xl font-semibold mb-4">
                                      Información General de Salud:
                                  </h2>
                                  <v-row>
                                    <v-col cols="2"><img
                                        src="https://picsum.photos/id/11/200/300"
                                        alt=""
                                        class="w-full object-cover rounded-lg shadow-md"
                                        /></v-col>
                                    <v-col> <p>
                                          Lorem ipsum dolor sit amet consectetur
                                          adipisicing elit. Quisquam, quod. Lorem ipsum
                                          dolor, sit amet consectetur adipisicing elit.
                                          Quisquam, quod. Lorem ipsum dolor, sit amet
                                          consectetur adipisicing elit. Quisquam, quod.
                                          Explicabo voluptate dolorum, consectetur 
                                          repellendus nesciunt aut enim, accusamus 
                                        architecto mollitia maxime sapiente 
                                        perspiciatis, officiis nisi ratione 
                                        reprehenderit cumque. Dolorum, quaerat.
                                      </p>
                                      <p>
                                          Lorem ipsum dolor sit amet consectetur
                                          adipisicing elit. Quisquam, quod. Lorem ipsum
                                          dolor, sit amet consectetur adipisicing elit.
                                          Quisquam, quod. Lorem ipsum dolor, sit amet
                                          consectetur adipisicing elit. Quisquam, quod.
                                          Explicabo voluptate dolorum, consectetur 
                                          repellendus nesciunt aut enim, accusamus 
                                        architecto mollitia maxime sapiente 
                                        perspiciatis, officiis nisi ratione 
                                        reprehenderit cumque. Dolorum, quaerat.
                                      </p>
                                      <p>
                                          Lorem ipsum dolor sit amet consectetur
                                          adipisicing elit. Quisquam, quod. Lorem ipsum
                                          dolor, sit amet consectetur adipisicing elit.
                                          Quisquam, quod. Lorem ipsum dolor, sit amet
                                          consectetur adipisicing elit. Quisquam, quod.
                                          Explicabo voluptate dolorum, consectetur 
                                          repellendus nesciunt aut enim, accusamus 
                                        architecto mollitia maxime sapiente 
                                        perspiciatis, officiis nisi ratione 
                                        reprehenderit cumque. Dolorum, quaerat.
                                      </p>
                                    </v-col>
                                  </v-row>
                                    
                                       
                                </div>
                            </div>

                            <h2 class="text-xl font-semibold mb-4 mt-6">
                                Fechas importantes
                            </h2>
                            <ul>
                                <li>Próximo Control 1</li>
                                <li>Exámenes próximos a vencer</li>
                            </ul>
                            <br />
                            <div class="bg-white shadow-md rounded-lg p-6">
                                <h2 class="text-xl font-semibold mb-4">
                                    Notificaciones importantes
                                </h2>
                                <p class="text-gray-600">
                                    No hay notificaciones nuevas.
                                </p>
                            </div>

                        </template>

                        <template v-if="user.isAdmin === true">

                            <div class="grid grid-cols-[1fr,2fr] gap-6">
                                <div>
                                  <h2 class="text-xl font-semibold mb-4">
                                      Información General:
                                  </h2>
                                  <v-row>
                                    <v-col cols="2"><img
                                        src="https://picsum.photos/seed/picsum/200/300"
                                        alt=""
                                        class="w-full object-cover rounded-lg shadow-md"
                                        /></v-col>
                                    <v-col> <p>
                                          Lorem ipsum dolor sit amet consectetur
                                          adipisicing elit. Quisquam, quod. Lorem ipsum
                                          dolor, sit amet consectetur adipisicing elit.
                                          Quisquam, quod. Lorem ipsum dolor, sit amet
                                          consectetur adipisicing elit. Quisquam, quod.
                                          Explicabo voluptate dolorum, consectetur 
                                          repellendus nesciunt aut enim, accusamus 
                                        architecto mollitia maxime sapiente 
                                        perspiciatis, officiis nisi ratione 
                                        reprehenderit cumque. Dolorum, quaerat.
                                      </p>
                                      <p>
                                          Lorem ipsum dolor sit amet consectetur
                                          adipisicing elit. Quisquam, quod. Lorem ipsum
                                          dolor, sit amet consectetur adipisicing elit.
                                          Quisquam, quod. Lorem ipsum dolor, sit amet
                                          consectetur adipisicing elit. Quisquam, quod.
                                          Explicabo voluptate dolorum, consectetur 
                                          repellendus nesciunt aut enim, accusamus 
                                        architecto mollitia maxime sapiente 
                                        perspiciatis, officiis nisi ratione 
                                        reprehenderit cumque. Dolorum, quaerat.
                                      </p>
                                      <p>
                                          Lorem ipsum dolor sit amet consectetur
                                          adipisicing elit. Quisquam, quod. Lorem ipsum
                                          dolor, sit amet consectetur adipisicing elit.
                                          Quisquam, quod. Lorem ipsum dolor, sit amet
                                          consectetur adipisicing elit. Quisquam, quod.
                                          Explicabo voluptate dolorum, consectetur 
                                          repellendus nesciunt aut enim, accusamus 
                                        architecto mollitia maxime sapiente 
                                        perspiciatis, officiis nisi ratione 
                                        reprehenderit cumque. Dolorum, quaerat.
                                      </p>
                                    </v-col>
                                  </v-row>
                                    
                                       
                                </div>
                            </div>

                            <h2 class="text-xl font-semibold mb-4 mt-6">
                                Mis Tareas
                            </h2>
                            <ul>
                                <li>tarea 1</li>
                                <li>tarea 2</li>
                            </ul>
                            <br />
                            <div class="bg-white shadow-md rounded-lg p-6">
                                <h2 class="text-xl font-semibold mb-4">
                                    Notificaciones importantes
                                </h2>
                                <p class="text-gray-600">
                                    No hay notificaciones nuevas.
                                </p>
                            </div>

                        </template>

                        <template v-if="user.rol === 'staff'">
                            <Link
                                :href="route('staff.dashboard')"
                                class="block py-2 px-4 hover:bg-gray-100 rounded"
                            >
                                Panel de Staff
                            </Link>
                        </template>

                    </nav>
                </div>
            </div>

            <div v-else class="text-center">
                <p class="text-xl mb-4">
                    Bienvenido a la plataforma de gestión de salud
                </p>
                <Link
                    :href="route('login')"
                    class="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition"
                >
                    Iniciar Sesión
                </Link>
            </div>
        </div>
    </AppLayout>
</template>

<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { Link } from "@inertiajs/vue3";

defineProps({
    user: {
        type: Object,
        default: null,
    },
});
</script>
