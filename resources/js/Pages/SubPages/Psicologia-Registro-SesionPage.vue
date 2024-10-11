<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { ref } from 'vue';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css'; // Import Quill CSS
import {
    closeForm,
    handleEditItem,
    handleRemoveItem,
} from "@/helper.js";

defineOptions({ layout: AppLayout });

const editorContent = ref('');
const editorOptions = {
    theme: 'snow',
    modules: {
        toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline'],
            ['image', 'code-block'],
        ],
    },
};


const update = async () => {
    await handleEditItem(state);
    closeForm(state);
};

const remove = async (item) => {
    await handleRemoveItem(state, item);
};

</script>

<template>
    <v-container>
        <v-card>
            <v-card-title>Registro de la Sesión</v-card-title>
            <v-card-text>
                <v-sheet
                    color="gray"
                    :elevation="1"
                    :class="'rounded-lg ma-4 pa-6'"
                >
                    <quill-editor
                        v-model="editorContent"
                        :options="editorOptions"
                        class="editor"
                    />
                </v-sheet>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<style>
.editor {
    min-height: 200px;
}
</style>