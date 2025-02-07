<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    modelValue: {
        type: Boolean,
        required: true
    },
    title: {
        type: String,
        default: 'Confirmar Eliminación'
    },
    question: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: 'Esta acción no se puede deshacer.'
    },
    confirmText: {
        type: String,
        default: 'Eliminar'
    },
    cancelText: {
        type: String,
        default: 'Cancelar'
    },
    confirmIcon: {
        type: String,
        default: 'mdi-delete'
    },
    confirmColor: {
        type: String,
        default: 'red-darken-1'
    },
    width: {
        type: String,
        default: '450px'
    }
});

const emit = defineEmits(['update:modelValue', 'confirm', 'cancel']);

const close = () => {
    emit('update:modelValue', false);
    emit('cancel');
};

const confirm = () => {
    emit('confirm');
    emit('update:modelValue', false);
};
</script>

<template>
    <v-dialog 
        :model-value="modelValue" 
        @update:model-value="$emit('update:modelValue', $event)"
        :max-width="width" 
        transition="dialog-bottom-transition"
    >
        <v-card class="rounded-lg" elevation="5">
            <v-card-item :class="`bg-${confirmColor}-lighten-5`">
                <template v-slot:prepend>
                    <v-icon
                        class="mr-3"
                        size="32"
                        icon="mdi-alert-circle"
                        :color="confirmColor"
                    ></v-icon>
                </template>
                <v-card-title class="text-h5 font-weight-bold" :class="`text-${confirmColor}`">
                    {{ title }}
                </v-card-title>
            </v-card-item>

            <v-card-text class="pt-5 text-body-1">
                <p>{{ question }}</p>
                <p class="mt-2 text-grey-darken-1">
                    <v-icon icon="mdi-information" size="18" class="mr-1"></v-icon>
                    {{ description }}
                </p>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions class="pa-4">
                <v-spacer></v-spacer>
                <v-btn
                    prepend-icon="mdi-close"
                    variant="tonal"
                    color="grey-darken-1"
                    @click="close"
                    class="mr-3"
                >
                    {{ cancelText }}
                </v-btn>
                <v-btn
                    :prepend-icon="confirmIcon"
                    :color="confirmColor"
                    @click="confirm"
                    variant="elevated"
                >
                    {{ confirmText }}
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>]]>
