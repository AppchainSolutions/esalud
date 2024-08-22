<script setup>
  import AppLayout from "@/Layouts/AppLayout.vue";
  import { router } from "@inertiajs/vue3";
  import { reactive, ref, onMounted, computed, inject } from "vue";
  import { useDataStore } from "@/store.js";
  import moment from "moment";
  import { useDate } from "vuetify";
  import {
    fetchData,
    handleRemoveItem,
    handleShowItem,
    handleStoreItem,
    handleEditItem,
    closeForm,
    openToCreate,
    openToEdit,
  } from "@/helper.js";

  //**********\\\\  INI STATE VARIABLES AND CONST ////*************/

  defineOptions({ layout: AppLayout });

  const store = useDataStore();
  const state = reactive({
    endpoints: [
      "afp",
      "area",
      "ceco",
      "estado_civil",
      "empresa",
      "exposicion",
      "genero",
      "grupo_sanguineo",
      "instruccion",
      "ley_social",
      "nacionalidad",
      "planta",
      "prevision",
      "pueblo",
      "religion",
      "seguro",
      "unidad",
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
      { title: "Acciones", sortable: false, align: "center", key: "actions" },
    ],
    validationSchema: {
      rutRules: [
        (value) => {
          const regex = /^[0-9]+[-|‐]{1}[0-9kK]{1}$/;
          if (!regex.test(value)) {
            return false;
          }

          // Separar el número y el dígito verificador
          let splitidRut = value.split("-");
          let num = splitidRut[0];
          let dv = splitidRut[1].toLowerCase();
          // Calcular el dígito verificador esperado
          let m = 0,
            s = 1;
          for (; num; num = Math.floor(num / 10)) {
            s = (s + (num % 10) * (9 - (m++ % 6))) % 11;
          }
          let dvEsperado = s ? s - 1 : "k";
          const validate = dv === dvEsperado;
          return validate
            ? true
            : "El rut no es válido. Por favor, verifique el formato y los dígitos.";
        },
      ],
      emailRules: [
        (value) => {
          if (value) return true;
          return "Se necesita un email.";
        },
        (value) => {
          if (/.+@.+\..+/.test(value)) return true;
          return "El email debe ser válido.";
        },
      ],
    },
    searchQuery: {
      id: null,
      rut: null,
      empresa: null,
      area: null,
      unidad: null,
      planta: null,
      ceco: null,
      activo: true,
      exposicion: [],
    },
    editedItem: {
      rut: null,
      nombre: null,
      actividad_economica: null,
      activo: true,
      afp: null,
      apellidos: null,
      area: null,
      cargo: null,
      ceco: null,
      ciudad: null,
      direccion: null,
      donante: false,
      edad: null,
      email: null,
      empresa: null,
      estado_civil: null,
      exposicion: [],
      fecha_nacimiento: null,
      genero: null,
      grupo_sanguineo: null,
      instruccion: null,
      ley_social: null,
      modalidad: null,
      nacionalidad: null,
      ocupacion: null,
      planta: null,
      prevision: null,
      profesion: null,
      pueblo: null,
      religion: null,
      seguro: null,
      telefono1: null,
      telefono2: null,
      unidad: null,
    },
    defaultItem: {
      rut: null,
      nombre: null,
      apellidos: null,
      actividad_economica: null,
      activo: true,
      seguro: null,
      afp: null,
      ceco: null,
      area: null,
      cargo: null,
      ciudad: null,
      direccion: null,
      donante: false,
      edad: null,
      email: null,
      empresa: null,
      estado_civil: null,
      exposicion: [],
      fecha_nacimiento: null,
      genero: null,
      grupo_sanguineo: null,
      instruccion: null,
      ley_social: null,
      modalidad: null,
      nacionalidad: null,
      ocupacion: null,
      planta: null,
      prevision: null,
      profesion: null,
      pueblo: null,
      religion: null,
      telefono1: null,
      telefono2: null,
      unidad: null,
    },
    dialog: false,
    editedIndex: -1,
    formCrear: "Nuevo Paciente",
    formEdit: "Editar datos del Paciente",
    formItems: [],
    formTitle: "Gestión de Pacientes",
    list: [],
    loadingSearch: false,
    tableItems: [],
    urlDelete: "/paciente/delete",
    urlShow: "/paciente/show",
    urlStore: "/paciente",
    urlUpdate: "/paciente/update",
  });
  const date = useDate();

  //**********\\\\  LIFE CYCLE HOOKS ////*************/
  onMounted(async () => {
    state.list = await fetchData(state.endpoints);
  });

  //**********\\\\  COMPUTE PROPERTIES ////*************/
  const editedItemTitle = computed(() =>
    state.editedIndex === -1 ? state.formCrear : state.formEdit
  );

  //**********\\\\ METHODS ////*************/
  const formatDate = computed(() => {
    let formatted = moment(state.editedItem.fecha_nacimiento).format("DD/MM/YYYY");
    return formatted;
  });
  function fichaMedica(item) {
    store.selected = item;
    try {
      router.get("/ficha");
    } catch (error) {
      console.error('"An error occurred while fetching daily attention data."');
    }
  }

  function fichaCronicos(item) {
    store.selected = item;
    try {
      router.get("/ficha_cronicos");
    } catch (error) {
      console.error("An error occurred while fetching daily attention data.");
    }
  }

  function close() {
    closeForm(state);
  }

  function calcEdad(fecNac) {
    let now = new Date();
    let birthDate = new Date(fecNac);
    let age = now.getFullYear() - birthDate.getFullYear();
    return age;
  }

  const handleInputChange = () => {
    let fecNac = state.editedItem.fecha_nacimiento;
    let age = calcEdad(fecNac);
    state.editedItem.edad = ref(age);
  };

  //**********\\\\  CRUD ////*************/
  const show = async () => {
    await handleShowItem(state);
  };

  function openFormCreate() {
    openToCreate(state);
  }

  function storeItems() {
    return state.editedIndex > -1 ? update() : create();
  }

  const create = async () => {
    await handleStoreItem(state);
    closeForm(state);
  };

  function openFormEdit(item) {
    openToEdit(state, item);
    handleInputChange();
  }

  const update = async () => {
    await handleEditItem(state);
    closeForm(state);
  };

  const remove = async (item) => {
    handleRemoveItem(state, item);
  };
</script>

<template>
  <v-container fluid>
    <v-sheet color="white" :elevation="6" :class="'rounded-lg ma-2 pa-2'">
      <div class="text-h6 ma-2">{{ state.formTitle }}</div>
      <v-divider thickness="4px" color="#009AA4"></v-divider>
      <v-form fast-fail @submit.prevent>
        <v-row>

          <v-col>
            <v-text-field
              v-model="state.searchQuery.rut"
              :rules="state.validationSchema.rutRules"
              label="Rut* (12345678-9)"
              class="ma-2"
              type="text"
              variant="underlined"
              clearable
            ></v-text-field>

                        <v-select
                          :items="state.list.nacionalidad"
                          item-title="descripcion"
                          item-value="id"
                          v-model="state.editedItem.nacionalidad"
                          label="Nacionalidad"
                          clearable
                          variant="underlined"
                        ></v-select>
          </v-col>

          <v-col>
            <v-switch
              v-model="state.searchQuery.activo"
              hide-details
              class="ml-4"
              variant="underlined"
              color="green-darken-3"
              inset
              label="Activo"
            ></v-switch>
            <v-select
              :items="state.list.prevision"
              item-title="descripcion"
              item-value="id"
              v-model="state.searchQuery.prevision"
              label="Prevision"
              clearable
              class="ma-4 mt-8"
              variant="underlined"
              single
            ></v-select>
          </v-col>

          <v-col>
            <v-select
              :items="state.list.genero"
              item-title="descripcion"
              item-value="id"
              v-model="state.searchQuery.genero"
              label="Género"
              clearable
              class="mt-2"
              variant="underlined"
              single
              :key="'genero'"
            ></v-select>
            <v-select
              :items="state.list.ley_social"
              item-title="descripcion"
              item-value="descripcion"
              v-model="state.searchQuery.ley_social"
              label="Leyes Sociales"
              clearable
              class="mt-2"
              variant="underlined"
            ></v-select>
          </v-col>
            
        </v-row>

        <v-row>
          <v-btn
            prepend-icon="mdi-file-search"
            variant="tonal"
            class="ma-4"
            color="#009AA4"
            :loading="state.loadingSearch"
            type="submit"
            @click="show"
          >
            Buscar
          </v-btn>

          <v-btn
            prepend-icon="mdi-cloud-download"
            variant="tonal"
            class="ma-4"
            color="#009AA4"
          >
            <download-excel :data="state.tableItems" name="consulta_paciente.xls">
              Bajar archivo
            </download-excel>
          </v-btn>
        </v-row>
      </v-form>
    </v-sheet>

    <v-sheet color="white" :elevation="6" :class="'rounded-lg ma-2 pa-2'">
      <v-data-table
        :headers="state.headers"
        :items="state.tableItems"
        :sort-by="[{ key: 'apellidos', order: 'asc' }]"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-btn
              icon="mdi-account-multiple-plus"
              variant="tonal"
              class="ma-2"
              color="#009AA4"
              @click="openFormCreate"
            >
            </v-btn>
            <v-dialog v-model="state.dialog" persistent>
              <v-form fast-fail @submit.prevent>
                <v-card>
                  <v-card-title>
                    <div class="text-h6 ma-2">
                      {{ editedItemTitle }}
                    </div>
                    <v-divider thickness="4px" color="#662d91"></v-divider>
                  </v-card-title>
                  <v-card-text>
                    <div class="text-h6">Datos Personales</div>
                    <v-spacer></v-spacer>
                    <v-row>
                      <v-col cols="6" sm="4" md="2">
                        <v-text-field
                          v-model="state.editedItem.rut"
                          label="Rut* (12345678-9)"
                          type="text"
                          required
                          clearable
                          variant="underlined"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6" sm="4" md="2">
                        <v-text-field
                          v-model="state.editedItem.nombre"
                          label="Nombre*"
                          type="text"
                          required
                          clearable
                          variant="underlined"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="6" sm="4" md="2">
                        <v-text-field
                          v-model="state.editedItem.apellidos"
                          label="Apellidos*"
                          required
                          type="text"
                          clearable
                          variant="underlined"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="6" sm="4" md="2">
                        <v-switch
                          v-model="state.editedItem.activo"
                          hide-details
                          class="ml-2"
                          color="green-darken-3"
                          inset
                          label="Activo"
                        ></v-switch>
                      </v-col>

                      <v-col cols="6" sm="4" md="2">
                        <v-switch
                          v-model="state.editedItem.donante"
                          class="ml-2"
                          label="Donante"
                          color="success"
                          hide-details
                          inset
                          clearable
                          variant="underlined"
                        ></v-switch>
                      </v-col>

                      <v-col cols="6" sm="4" md="2">
                        <v-text-field
                          v-model="state.editedItem.email"
                          :rules="state.validationSchema.emailRules"
                          label="Email"
                          type="email"
                          required
                          clearable
                          variant="underlined"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="6" sm="4" md="2">
                        <v-text-field
                          v-model="state.editedItem.fecha_nacimiento"
                          label="Fecha de nacimiento"
                          clearable
                          variant="underlined"
                          type="date"
                          :format="formatDate"
                          @input="handleInputChange"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="6" sm="4" md="2">
                        <v-text-field
                          v-model="state.editedItem.edad"
                          label="Edad*"
                          type="text"
                          variant="underlined"
                          readonly
                        ></v-text-field>
                      </v-col>

                      <v-col cols="6" sm="4" md="2">
                        <v-text-field
                          v-model="state.editedItem.direccion"
                          label="Dirección"
                          clearable
                          variant="underlined"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="6" sm="4" md="2">
                        <v-text-field
                          label="teléfono 1"
                          v-model="state.editedItem.telefono1"
                          clearable
                          variant="underlined"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="6" sm="4" md="2">
                        <v-text-field
                          v-model="state.editedItem.telefono2"
                          label="teléfono 2"
                          clearable
                          variant="underlined"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="6" sm="4" md="2">
                        <v-select
                          :items="state.list.grupo_sanguineo"
                          item-title="descripcion"
                          item-value="id"
                          v-model="state.editedItem.grupo_sanguineo"
                          label="Grupo sanguíneo"
                          clearable
                          variant="underlined"
                        ></v-select>
                      </v-col>

                      <v-col cols="6" sm="4" md="2">
                        <v-select
                          :items="state.list.estado_civil"
                          item-title="descripcion"
                          item-value="id"
                          v-model="state.editedItem.estado_civil"
                          label="Estado civil"
                          clearable
                          variant="underlined"
                        ></v-select>
                      </v-col>

                      <v-col cols="6" sm="4" md="2">
                        <v-select
                          :items="state.list.nacionalidad"
                          item-title="descripcion"
                          item-value="id"
                          v-model="state.editedItem.nacionalidad"
                          label="Nacionalidad"
                          clearable
                          variant="underlined"
                        ></v-select>
                      </v-col>

                      <v-col cols="6" sm="4" md="2">
                        <v-select
                          :items="state.list.religion"
                          item-title="descripcion"
                          item-value="id"
                          label="Religion / Culto"
                          v-model="state.editedItem.religion"
                          clearable
                          variant="underlined"
                        ></v-select>
                      </v-col>

                      <v-col cols="6" sm="4" md="2">
                        <v-select
                          :items="state.list.genero"
                          item-title="descripcion"
                          item-value="id"
                          label="Género"
                          v-model="state.editedItem.genero"
                          clearable
                          variant="underlined"
                        ></v-select>
                      </v-col>

                      <v-col cols="6" sm="4" md="2">
                        <v-select
                          :items="['Institucional (MAI)', 'Libre elección (MLE)']"
                          item-title="descripcion"
                          item-value="descripcion"
                          v-model="state.editedItem.modalidad"
                          label="Modalidad de atención"
                          clearable
                          variant="underlined"
                        >
                        </v-select>
                      </v-col>
                      <v-col cols="6" sm="4" md="2">
                        <v-text-field
                          label="Ciudad"
                          v-model="state.editedItem.ciudad"
                          clearable
                          variant="underlined"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="6" sm="4" md="2">
                        <v-select
                          :items="state.list.prevision"
                          item-title="descripcion"
                          item-value="id"
                          v-model="state.editedItem.prevision"
                          label="Previsión de Salud"
                          clearable
                          variant="underlined"
                        ></v-select>
                      </v-col>

                      <v-col cols="6" sm="4" md="2">
                        <v-select
                          :items="state.list.afp"
                          item-title="descripcion"
                          item-value="id"
                          v-model="state.editedItem.afp"
                          label="AFP"
                          clearable
                          variant="underlined"
                        ></v-select>
                      </v-col>

                      <v-col cols="6" sm="4" md="2">
                        <v-select
                          :items="state.list.ley_social"
                          item-title="descripcion"
                          item-value="id"
                          v-model="state.editedItem.ley_social"
                          label="Leyes Sociales"
                          clearable
                          variant="underlined"
                        ></v-select>
                      </v-col>

                      <v-col cols="6" sm="4" md="2">
                        <v-select
                          :items="state.list.seguro"
                          item-title="descripcion"
                          item-value="id"
                          v-model="state.editedItem.seguro"
                          label="Administradores del Seguro Ley 16.744"
                          clearable
                          variant="underlined"
                        ></v-select>
                      </v-col>
                      <v-col cols="6" sm="4" md="2">
                        <v-select
                          :items="state.list.pueblo"
                          item-title="descripcion"
                          item-value="id"
                          v-model="state.editedItem.pueblo"
                          label="Pueblo originario"
                          clearable
                          variant="underlined"
                        ></v-select>
                      </v-col>
                      <v-col cols="6" sm="4" md="2">
                        <v-select
                          :items="state.list.instruccion"
                          item-title="descripcion"
                          item-value="id"
                          v-model="state.editedItem.instruccion"
                          label="Nivel de Instruccion"
                          clearable
                          variant="underlined"
                        ></v-select>
                      </v-col>
                    </v-row>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="#009AA4" variant="tonal" @click="close">
                      Cancelar
                    </v-btn>
                    <v-btn color="#009AA4" variant="tonal" @click="storeItems">
                      Guardar
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-form>
            </v-dialog>
          </v-toolbar>
        </template>

        <template v-slot:item.actions="{ item }">
          <v-tooltip text="Ficha Paciente Crónico" location="top">
            <template v-slot:activator="{ props }">
              <v-btn
                v-bind="props"
                density="compact"
                color="#009AA4"
                class="mr-2 ml-2"
                :icon="'mdi-medical-bag'"
                variant="tonal"
                @click="fichaCronicos(item)"
              ></v-btn>
            </template> 
          </v-tooltip>
          <v-tooltip text="Ficha Médica" location="top">
            <template v-slot:activator="{ props }">
              <v-btn
                v-bind="props"
                density="compact"
                color="#009AA4"
                class="mr-2 ml-2"
                variant="tonal"
                :icon="'mdi-stethoscope'"
                @click="fichaMedica(item)"
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
                @click="openFormEdit(item)"
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
                @click="remove(item)"
              ></v-btn>
            </template>
          </v-tooltip>
        </template>
      </v-data-table>
    </v-sheet>
  </v-container>
</template>
