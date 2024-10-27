<script setup>
import { ref } from "vue";
import { useLogger } from "vue-logger-plugin";

const props = defineProps({
    state: Object,
});
const logger = useLogger();
let dialog = ref(false);
const formTitle ="HOLA";
const formCreate = () => {
    logger.info("Form Create");
    dialog.value = true;
};
function fichaPersonal(item) {
    openToEdit(state, item);
    handleInputChange();
}
function editarfichaMedica(item) {
    store.selected = item;
    try {
        router.get("ficha-medica");
    } catch (error) {
        console.error(
            '"An error occurred while fetching daily attention data."',
        );
    }
}
function editarFichaPersonal(item) {
    openToEdit(state, item);
    handleInputChange();
}
function close() {
    dialog.value = false;
}
/*

const editedItemTitle = computed(() =>
    state.config.editedIndex === -1 ? state.formCrear : state.formEdit,
);

const calcEdad = (fecNac) => {
    let now = new Date();
    let birthDate = new Date(fecNac);
    let age = now.getFullYear() - birthDate.getFullYear();
    return age;
};

const handleInputChange = () => {
    let fecNac = state.editedItem.fecha_nacimiento;
    let age = calcEdad(fecNac);
    state.editedItem.edad = ref(age);
};

const update = async () => {
    await handleEditItem(state);
    closeForm(state);
};

const remove = async (item) => {
    handleRemoveItem(state, item);
}

function submit() {
  // Access the form data from the state
  const formData = this.state.editedItem;
  console.logger('Form Data:', formData);

}

methods: {
  storeItems() {
    return this.state.editedIndex > -1 ? this.update() : this.create();
  },
  create() {
    console.logger('create', this.state);
    // Handle create operation
  },
  update() {
    console.logger('update', this.state);
    // Handle update operation
  },
  close() {
    this.dialogger = false;
  }, 
},

function storeItems() {
    return state.editedIndex > -1 ? update() : create();
}

const create = async () => {
    console.logger("create", state);
    await handleStoreItem(state);
    closeForm(state);
};

*/
</script>

<template>
    <v-data-table :headers="state.headers" :items="state.config.tableItems">
        <template v-slot:top>
            <v-toolbar flat>
                <v-btn
                    icon="mdi-account-multiple-plus"
                    variant="tonal"
                    class="ma-2"
                    color="#009AA4"
                    @click="formCreate"
                >
                </v-btn>
            </v-toolbar>
        </template>

        <template v-slot:item.actions="{ item }">
            <v-tooltip text="Ficha Médica" location="top">
                <template v-slot:activator="{ props }">
                    <v-btn
                        v-bind="props"
                        density="compact"
                        color="#009AA4"
                        class="mr-2 ml-2"
                        variant="tonal"
                        :icon="'mdi-stethoscope'"
                        @click="emitEvent('ficha-medica', item)"
                    ></v-btn>
                </template>
            </v-tooltip>
            <v-tooltip text="Datos Personales" location="top">
                <template v-slot:activator="{ props }">
                    <v-btn
                        v-bind="props"
                        density="compact"
                        class="mr-2 ml-2"
                        color="#009AA4"
                        variant="tonal"
                        :icon="'mdi-account-edit-outline'"
                        @click="emitEvent('ficha-personal', item)"
                    ></v-btn>
                </template>
            </v-tooltip>
            <v-tooltip text="Eliminar" location="top">
                <template v-slot:activator="{ props }">
                    <v-btn
                        v-bind="props"
                        density="compact"
                        class="mr-2 ml-2"
                        color="#009AA4"
                        variant="tonal"
                        :icon="'mdi-delete-outline'"
                        @click="emitEvent('eliminar', item)"
                    ></v-btn>
                </template>
            </v-tooltip>
        </template>
    </v-data-table>
    <v-dialog v-model="dialog" persistent>
        <v-card>
            <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                </v-container>
            </v-card-text> 
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="tonal" @click="close">
                    Cancelar
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
    </template>
