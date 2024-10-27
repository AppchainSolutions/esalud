<script setup>
import { useLogger } from "vue-logger-plugin";

const logger = useLogger();
const props = defineProps({
    state: Object,
    title: String,
    items: Object,
    icon: String,
    actionType: String,
});


const handleAction = () => {
    switch(props.actionType) {
        case 'editarFichaPersonal':
            logger.info("Ficha Personal", props.items.id);
            break;
        case 'editarFichaMedica':
            logger.info("Ficha Medica", props.items.id);
            break;
        case 'eliminarRegistro':
            logger.info("Eliminar Registro:", props.items.id);
            break;
        default:
            logger.warn("Acción no reconocida");
    }
}
</script>
<template>
    <v-tooltip :text="props.title" location="top">
        <template v-slot:activator="{ items }">
            <v-btn
                density="compact"
                color="#009AA4"
                class="mr-2 ml-2"
                variant="tonal"
                :icon="icon"
                @click="handleAction"
            ></v-btn>
        </template>
    </v-tooltip>
</template>
