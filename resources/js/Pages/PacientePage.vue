<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { reactive, ref, onMounted, computed } from "vue";
import { useLogger } from "vue-logger-plugin";
import { useDataStore } from "@/store.js";
import DataTable from "./SubPages/Componentes/DataTable.vue";
import {
    fetchAllData,
    handleRemoveItem,
    handleSearchItem,
    handleStoreItem,
    handleEditItem,
    closeForm,
    openToCreate,
    openToEdit,
} from "@/helper.js";

defineOptions({ layout: AppLayout });

//const store = useDataStore();
const logger = useLogger();

const state = reactive({
    endpoints: [
        "calles",
        "estados_civiles",
        "establecimientos_educacionales",
        "generos",
        "grupos_sanguineos",
        "nacionalidades",
        "niveles_instruccion",
        "previsiones",
        "pueblos_originarios",
        "religiones",
    ],

    headers: [
        { title: "Rut", align: "center", sortable: true, key: "rut" },
        { title: "Nombre", align: "center", sortable: true, key: "nombre" },
        {
            title: "Apellidos",
            align: "center",
            sortable: true,
            key: "apellidos",
        },
        {
            title: "Edad",
            align: "center",
            sortable: true,
            key: "edad",
        },
        {
            title: "Telefono contacto",
            align: "center",
            sortable: true,
            key: "telefono1",
        },
        { title: "Acciones", sortable: false, align: "center", key: "actions" },
    ],

    //tableItems: [],
    tableItems: [
    {
        nombre: "Luis",
        rut: "1234567-8",
        fecha_nacimiento: "2022-01-01",
        edad: 10,
        apellidos: "Lira Cataldo"
    }
   ],

    formFields: [
        {
            name: "field1",
            label: "Field 1",
            rules: [(v) => !!v || "Field 1 is required"],
        },
        //  { name: 'field2', label: 'Field 2', rules: [(v) => !!v || 'Field 2 is required'] },
        //  { name: 'field3', label: 'Field 3', rules: [(v) => !!v || 'Field 3 is required'] },
        // Add all fields that should be checked
    ],

    /*   'apellidos',
      'apellidos_responsable',
      'calle_id',
      'calle_responsable_id',
      'ciudad_responsable',
      'ciudad',
      'comunidad_lgbtq',
      'comunidad_lgbtq_responsable',
      'credencial_discapacidad_responsable',
      'credencial_discapacidad',
      'direccion_responsable',
      'direccion',
      'donante_responsable',
      'donante',
      'edad_responsable',
      'edad',
      'email_responsable',
      'email',
      'establecimiento_educacional_id',
      'estado_civil_id',
      'estado_civil_responsable_id',
      'fecha_nacimiento_responsable',
      'fecha_nacimiento',
      'genero_id',
      'genero_responsable_id',
      'grupo_sanguineo_id',
      'grupo_sanguineo_responsable_id',
      'nacionalidad_id',
      'nacionalidad_responsable_id',
      'nivel_instruccion_id',
      'nivel_instruccion_responsable_id',
      'nombre_responsable',
      'nombre',
      'ocupacion_responsable',
      'ocupacion',
      'parentesco_responsable',
      'password',
      'pertenece_pie',
      'prevision_id',
      'prevision_responsable_id',
      'profesor',
      'pueblo_originario_id',
      'pueblo_originario_responsable_id',
      'religion_id',
      'religion_responsable_id',
      'rut_responsable',
      'rut',
      'telefono_responsable',
      'telefono1',
      'telefono2',*/

    editedItem: {
        apellidos: null,
        apellidos_responsable: null,
        calles_id: null,
        calles_responsable_id: null,
        ciudad_responsable: null,
        ciudad: null,
        comunidad_lgbtq: null,
        comunidad_lgbtq_responsable: null,
        credencial_discapacidad_responsable: null,
        credencial_discapacidad: null,
        direccion_responsable: null,
        direccion: null,
        donante_responsable: null,
        donante: null,
        edad_responsable: null,
        edad: null,
        email_responsable: null,
        email: null,
        establecimiento_educacional_id: null,
        estado_civil_id: null,
        estado_civil_responsable_id: null,
        fecha_nacimiento_responsable: null,
        fecha_nacimiento: null,
        genero_id: null,
        genero_responsable_id: null,
        grupo_sanguineo_id: null,
        grupo_sanguineo_responsable_id: null,
        nacionalidad_id: null,
        nacionalidad_responsable_id: null,
        nivel_instruccion_id: null,
        nivel_instruccion_responsable_id: null,
        nombre_responsable: null,
        nombre: null,
        ocupacion_responsable: null,
        ocupacion: null,
        parentesco_responsable: null,
        password: null,
        pertenece_pie: null,
        prevision_id: null,
        prevision_responsable_id: null,
        profesor: null,
        pueblo_originario_id: null,
        pueblo_originario_responsable_id: null,
        religion_id: null,
        religion_responsable_id: null,
        rut_responsable: null,
        rut: null,
        telefono_responsable: null,
        telefono1: null,
        telefono2: null,
    },

    searchQuery: {
        id: null,
        rut: null,
        rut_responsable: null,
        establecimiento_educacional_id: null,
    },

    config: {
        editedIndex: -1,
        dialog: false,
        loading: false,
        editedIndex: -1,
        formCrear: "Nuevo Paciente",
        formEdit: "Editar datos del Paciente",
        formItems: [],
        formTitle: "Gestión de Pacientes",
        list: [],
        route: "paciente",
    },
});

// const tableItems = reactive([]),

/**
 * Fetches all data from the specified endpoints and updates the list configuration.
 * Logs the retrieved endpoints using the logger.
 */
onMounted(async () => {
    const result = await fetchAllData(state.endpoints);
    state.config.list = result;
    //logger.info("Endpoints:", result.);
});

async function buscar() {
    state.config.loading = true;
    logger.info("Buscar", state.searchQuery);
    const result= await handleSearchItem(state.searchQuery, state.config.route);
    logger.info(result);
   //state.tableItems = result;
   
    state.config.loading = false;
};

const handleFormCreate = () => {
    console.info("Form Create:");
    //openToCreate(state);
};
function handleFichaPersonal(item) {
    logger.log("Ficha Personal event triggered", item);
}

function handleAtencionesDiarias(item) {
    logger.log("Atenciones Diarias event triggered", item);
}

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

/*
function fichaMedica(item) {
    store.selected = item;
    try {
        router.get("ficha-medica");
    } catch (error) {
        console.error(
            '"An error occurred while fetching daily attention data."',
        );
    }
}
function fichaPersonal(item) {
    openToEdit(state, item);
    handleInputChange();
}
function close() {
    closeForm(state);
}

function submit() {
  // Access the form data from the state
  const formData = this.state.editedItem;
  console.logger('Form Data:', formData);

  // Perform the create or update operation
  //this.storeItems();
}, 

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



function openFormCreate() {

}

function storeItems() {
    return state.editedIndex > -1 ? update() : create();
}

const create = async () => {
    console.logger("create", state);
    await handleStoreItem(state);
    closeForm(state);
};

function fichaPersonal(item) {
    openToEdit(state, item);
    handleInputChange();
}

const update = async () => {
    await handleEditItem(state);
    closeForm(state);
};

const remove = async (item) => {
    handleRemoveItem(state, item);*/
</script>

<template>
    <v-sheet :elevation="4" :class="'rounded-lg ma-2 pa-2'">
        <v-expansion-panels>
            <v-expansion-panel title="Ficha de Pacientes" color="#009AA4">
                <v-expansion-panel-text>
                    <v-form fast-fail @submit.prevent>
                        <v-row>
                            <v-col>
                                <v-text-field
                                    v-model="state.searchQuery.rut"
                                    label="Rut del paciente * (12345678-9)"
                                    class="ma-2"
                                    type="text"
                                    variant="underlined"
                                    clearable
                                ></v-text-field>

                                <v-text-field
                                    v-model="state.searchQuery.rut_responsable"
                                    label="Rut persona encargada"
                                    class="ma-2"
                                    type="text"
                                    variant="underlined"
                                    clearable
                                ></v-text-field>
                            </v-col>
                            <v-col>
                                <v-select
                                    :items="
                                        state.config.list
                                            .establecimientos_educacionales
                                    "
                                    item-title="descripcion"
                                    item-value="id"
                                    v-model="
                                        state.searchQuery
                                            .establecimiento_educacional_id
                                    "
                                    clearable
                                    label="Establecimiento Educacional"
                                    class="ma-2"
                                    variant="underlined"
                                    single
                                />
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-btn
                                prepend-icon="mdi-file-search"
                                variant="tonal"
                                class="ma-4"
                                color="#009AA4"
                                type="submit"
                                @click="buscar"
                                :loading="state.config.loading"
                            >
                                Buscar
                            </v-btn>

                            <v-btn
                                prepend-icon="mdi-cloud-download"
                                variant="tonal"
                                class="ma-4"
                                color="#009AA4"
                            >
                                <download-excel
                                    :data="state.tableItems"
                                    name="consulta_paciente.xls"
                                >
                                    Bajar archivo
                                </download-excel>
                            </v-btn>
                        </v-row>
                    </v-form>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>

        <v-sheet color="white" :elevation="4" :class="'rounded-lg mt-4'">
            <DataTable
                :headers="state.headers"
                :items="state.tableItems"
            />
        </v-sheet>
    </v-sheet>

    <!--  <v-dialog v-model="dialog" max-width="600px">
    <v-form ref="form" @submit.prevent="submit">
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4" v-for="field in formFields" :key="field.name">
                <v-text-field v-model="state.editedItem[field.name]" :label="field.label" :rules="field.rules"
                  required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
          <v-btn color="blue darken-1" text type="submit">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialogger> -->
</template>
