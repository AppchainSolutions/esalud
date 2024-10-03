<script>
import { useDataStore } from "@/store.js";
import { router, usePage } from "@inertiajs/vue3";
import { computed } from "vue";

const page = usePage();

const store = useDataStore();
const listaResponse = computed(() => page.props.responseData);

export default {
    data: () => ({
        dialog: false,
        dialogDelete: false,
        headers: [
            {
                title: "Certificación",
                align: "start",
                sortable: true,
                key: "certificacion",
            },
            { title: "Comentario", key: "comentario", sortable: false },
            { title: "", key: "actions", sortable: false },
        ],

        lista: [{}],
        editedIndex: -1,
        editedItem: {
            idpersonal: store.userSelected,
            AlergiaModel: "",
            comentario: 0,
        },
        defaultItem: {
            idpersonal: store.userSelected,
            AlergiaModel: "",
            comentario: "",
        },
    }),

    /**
     * Computed property that determines the title of a form based on the value of the 'editedIndex' variable.
     *
     * @computed formTitle
     * @returns {string} The title of the form, either "Agregar registro" or "Editar registro".
     */
    computed: {
        formTitle() {
            return this.editedIndex === -1
                ? "Agregar registro"
                : "Editar registro";
        },
    },

    /**
     * Watch properties for monitoring changes in the 'dialog' and 'dialogDelete' variables.
     *
     * @watch
     * @property {boolean} dialog - Represents the state of a dialog box.
     * @property {boolean} dialogDelete - Represents the state of a delete dialog box.
     * @fires close - Called when the 'dialog' variable becomes false.
     * @fires closeDelete - Called when the 'dialogDelete' variable becomes false.
     */
    watch: {
        dialog(val) {
            val || this.close();
        },
        dialogDelete(val) {
            val || this.closeDelete();
        },
    },

    methods: {
        /**
         * Initializes the component by making an HTTP GET request to retrieve data related to a specific user's illnesses.
         *
         * @example
         * initialize()
         *
         * @returns {void} None
         */
        initialize() {
            let user = store.userSelected;

            router.get("/AlergiaModel", {
                rut: user,
            });
            this.lista = listaResponse.value;
        },

        /**
         * Edit an item in the component's list.
         *
         * @param {Object} item - The selected item to be edited.
         * @returns {void}
         */
        editItem(item) {
            this.editedIndex = this.lista.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
        },

        /**
         * Deletes an item from the list.
         *
         * @param {Object} item - The selected item to be deleted.
         * @returns {void}
         */
        deleteItem(item) {
            this.editedIndex = this.lista.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialogDelete = true;
        },

        deleteItemConfirm() {
            this.lista.splice(this.editedIndex, 1);
            this.closeDelete();
        },

        close() {
            this.dialog = false;
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
            });
        },

        closeDelete() {
            this.dialogDelete = false;
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
            });
        },

        save() {
            if (this.editedIndex > -1) {
                let edited = [];
                Object.assign(this.lista[this.editedIndex], this.editedItem);
                edited = JSON.parse(JSON.stringify(this.editedItem));
                console.log(
                    "🚀 ~ file: alergiaes.vue:137 ~ save ~ edited:",
                    edited
                );
                this.saveEdit(edited);
            } else {
                this.lista.push(this.editedItem);
                this.saveSave(this.lista);
            }
            this.close();
        },

        saveEdit(edited) {
            router.put("/AlergiaModel/edit", {
                AlergiaModel: edited,
            });
        },
        saveSave(added) {
            router.put("/AlergiaModel/store", {
                AlergiaModel: added,
            });
        },
    },
};
</script>

<template>
    <v-container>
        <v-data-table
            :headers="headers"
            :items="lista"
            :sort-by="[{ key: 'AlergiaModel', order: 'asc' }]"
        >
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>Certificaciones</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog">
                        <template v-slot:activator="{ props }">
                            <v-btn
                                icon="mdi-update"
                                variant="underlined"
                                ligth
                                class="ma-2"
                                color="#662D91"
                                @click="initialize"
                            >
                            </v-btn>
                            <v-btn
                                icon="mdi-account-multiple-plus"
                                variant="underlined"
                                ligth
                                class="ma-2"
                                color="#662D91"
                                v-bind="props"
                            >
                            </v-btn>
                        </template>

                        <v-card>
                            <v-card-title>
                                <span class="text-h5">{{ formTitle }} </span>
                            </v-card-title>

                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field
                                                v-model="
                                                    editedItem.certificacion
                                                "
                                                label="Certificación"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="6" sm="6" md="4">
                                            <v-text-field
                                                v-model="editedItem.comentario"
                                                label="Comentario"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="blue-darken-1"
                                    variant="text"
                                    @click="close"
                                >
                                    Cancelar
                                </v-btn>
                                <v-btn
                                    color="blue-darken-1"
                                    variant="text"
                                    @click="save"
                                >
                                    Guardar
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>

                    <v-dialog v-model="dialogDelete" max-width="500px">
                        <v-card>
                            <v-card-title class="text-h5"
                                >Seguro que quiere borrar el
                                registro?</v-card-title
                            >
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="blue-darken-1"
                                    variant="text"
                                    @click="closeDelete"
                                    >Cancel</v-btn
                                >
                                <v-btn
                                    color="blue-darken-1"
                                    variant="text"
                                    @click="deleteItemConfirm"
                                    >OK</v-btn
                                >
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>

            <template v-slot:item.actions="{ item }">
                <v-tooltip text="Editar" location="top">
                    <template v-slot:activator="{ props }">
                        <v-btn
                            v-bind="props"
                            density="compact"
                            class="mr-2 ml-2"
                            color="#662D91"
                            :icon="'mdi-account-edit'"
                            @click="editItem(item)"
                        ></v-btn>
                    </template>
                </v-tooltip>

                <v-tooltip text="Eliminar" location="top">
                    <template v-slot:activator="{ props }">
                        <v-btn
                            v-bind="props"
                            density="compact"
                            class="mr-2 ml-2"
                            color="#662D91"
                            :icon="'mdi-delete'"
                            @click="deleteItem(item)"
                        ></v-btn>
                    </template>
                </v-tooltip>
            </template>
            <template v-slot:no-data>
                <v-btn type="valiant" @click="initialize"> Iniciar </v-btn>
            </template>
        </v-data-table>
    </v-container>
</template>
