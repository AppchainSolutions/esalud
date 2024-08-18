<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { reactive, onMounted } from "vue";
import { fetchData, handleSearchItem } from "@/helper.js";

defineOptions({ layout: AppLayout });

const state = reactive({
  endpoints: ["area", "ceco", "empresa", "planta", "unidad"],

  headers: [
    {
      title: "Rut",
      align: "start",
      sortable: true,
      key: "rut",
    },
    {
      title: "Nombre",
      align: "start",
      sortable: true,
      key: "nombre",
    },
    {
      title: "Apellidos",
      align: "start",
      sortable: true,
      key: "apellidos",
    },
    {
      title: "Empresa",
      align: "start",
      sortable: true,
      key: "empresa.descripcion",
    },
    {
      title: "IDPGP",
      align: "start",
      sortable: true,
      key: "idpgp",
    },
    {
      title: "Estatus",
      align: "start",
      sortable: true,
      key: "estatus",
    },
    {
      title: "Fecha de Control",
      align: "start",
      sortable: true,
      key: "fecha_control",
    },
    {
      title: "Fecha de Ingreso",
      align: "start",
      sortable: true,
      key: "fecha_ingreso",
    },

    { title: "Acciones", align: "center", key: "actions" },
  ],

  searchQuery: {
    activo: "true",
    area: null,
    ceco: null,
    empresa: null,
    planta: null,
    rut: null,
    unidad: null,

    fecha_control: {
      hasta: null,
      desde: null,
    },
    fecha_ingreso: {
      hasta: null,
      desde: null,
    },
    fecha_prox_control: {
      hasta: null,
      desde: null,
    },
    fecha_ult_control: {
      hasta: null,
      desde: null,
    },
  },

  rutRules: [
    (value) => {
      const regex = /^[0-9]+[-|‐]{1}[0-9kK]{1}$/;
      if (!regex.test(value)) {
        return false;
      }

      // Separar el número y el dígito verificador
      var splitrut = value.split("-");
      var num = splitrut[0];
      var dv = splitrut[1].toLowerCase();

      // Calcular el dígito verificador esperado
      var m = 0,
        s = 1;
      for (; num; num = Math.floor(num / 10)) {
        s = (s + (num % 10) * (9 - (m++ % 6))) % 11;
      }
      var dvEsperado = s ? s - 1 : "k";
      let validate = dv == dvEsperado;

      //return dv == dvEsperado;
      if (validate) return true;
      return "El rut es incorrecto";
    },
  ],

  itemsView: {
    paciente_id: null,
    idpgp: null,
    estatus: null,
    fecha_control: null,
    fecha_ingreso: null,
    fecha_prox_control: null,
    fecha_ult_control: null,
    comentario: null,
  },

  dialog: false,
  tableItems: [],
  formItems: [],
  editedIndex: -1,
  list: [],
  valid: null,
  formTitle: "Examen Metales",
  urlSearch: "/consulta/exmetales/search",
});

//**********\\\\  LIFE CYCLE HOOKS ////*************/
/**
 * Initializes the component by calling the 'initialize' function.
 *
 * @function onMounted
 * @returns {void}
 */
onMounted(async () => {
  state.list = await fetchData(state.endpoints);
});

//**********\\\\ METHODS ////*************/

function VerDetalles(item) {
  state.dialog = true;
  state.itemsView = { ...item };
}
function close() {
  state.dialog = false;
}

//**********\\\\  CRUD ////*************/

const handleSearch = async () => {
  await handleSearchItem(state);
};
</script>

<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        <v-toolbar flat>
          <v-toolbar-title>
            {{ state.formTitle }}
          </v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
      </v-card-title>

      <v-card-text>
        <v-sheet color="white" :elevation="4" :class="'rounded-lg ma-2 pa-2'">
          <!-- SEARCH -->
          <v-container fluid>
            <v-card-text>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Rut"
                    variant="underlined"
                    :rules="state.rutRules"
                    v-model="state.searchQuery.rut"
                    clearable
                  ></v-text-field>
                  <v-select
                    :items="state.list.empresa"
                    item-title="descripcion"
                    item-value="id"
                    label="Empresa"
                    v-model="state.searchQuery.empresa"
                    variant="underlined"
                    clearable
                  ></v-select>
                  <v-select
                    label="Unidad"
                    variant="underlined"
                    v-model="state.searchQuery.unidad"
                    :items="state.list.unidad"
                    item-title="descripcion"
                    item-value="id"
                    clearable
                  ></v-select>
                  <v-select
                    label="Area"
                    v-model="state.searchQuery.area"
                    variant="underlined"
                    :items="state.list.area"
                    item-title="descripcion"
                    item-value="id"
                    clearable
                  ></v-select>
                  <v-select
                    label="Area (cecos)"
                    v-model="state.searchQuery.ceco"
                    variant="underlined"
                    :items="state.list.ceco"
                    item-title="descripcion"
                    item-value="id"
                    clearable
                  ></v-select>
                  <v-switch
                    v-model="state.searchQuery.activo"
                    hide-details
                    true-value="true"
                    false-value="false"
                    class="ml-4 mt-4"
                    variant="underlined"
                    color="green-darken-3"
                    value="true"
                    :inset="true"
                    label="Activo"
                    clearable
                  ></v-switch>
                </v-col>

                <v-col>
                  <v-text-field
                    label="Fecha control (desde)"
                    variant="underlined"
                    v-model="state.searchQuery.fecha_control.desde"
                    type="date"
                    clearable
                  ></v-text-field>
                  <v-text-field
                    label="Fecha control (hasta)"
                    variant="underlined"
                    type="date"
                    clearable
                    v-model="state.searchQuery.fecha_control.hasta"
                  ></v-text-field>
                  <v-text-field
                    label="Fecha ingreso (desde)"
                    variant="underlined"
                    v-model="state.searchQuery.fecha_ingreso.desde"
                    type="date"
                    clearable
                  ></v-text-field>
                  <v-text-field
                    label="Fecha ingreso (hasta)"
                    variant="underlined"
                    type="date"
                    clearable
                    v-model="state.searchQuery.fecha_ingreso.hasta"
                  ></v-text-field>
                  <v-text-field
                    label="Fecha prox. control (desde)"
                    variant="underlined"
                    v-model="state.searchQuery.fecha_prox_control.desde"
                    type="date"
                    clearable
                  ></v-text-field>
                  <v-text-field
                    label="Fecha prox. control (hasta)"
                    variant="underlined"
                    type="date"
                    clearable
                    v-model="state.searchQuery.fecha_prox_control.hasta"
                  ></v-text-field>
                  <v-text-field
                    label="Fecha ult. control (desde)"
                    variant="underlined"
                    v-model="state.searchQuery.fecha_ult_control.desde"
                    type="date"
                    clearable
                  ></v-text-field>
                  <v-text-field
                    label="Fecha ult. control (hasta)"
                    variant="underlined"
                    type="date"
                    clearable
                    v-model="state.searchQuery.fecha_ult_control.hasta"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-btn
                prepend-icon="mdi-file-search"
                variant="tonal"
                color="#009AA4"
                @click="handleSearch"
              >
                Buscar
              </v-btn>

              <v-btn prepend-icon="mdi-microsoft-excel" variant="tonal" color="#009AA4">
                <download-excel :data="state.tableItems" name="consulta_metales.xls">
                  Bajar archivo
                </download-excel>
              </v-btn>
            </v-card-actions>
          </v-container>

          <!-- TABLA -->
          <v-container fluid>
            <v-data-table
              :headers="state.headers"
              :items="state.tableItems"
              :sort-by="[{ key: 'apellidos', order: 'asc' }]"
            >
              <template v-slot:item.actions="{ item }">
                <v-tooltip text="Ver detalles" location="top">
                  <template v-slot:activator="{ props }">
                    <v-btn
                      v-bind="props"
                      density="compact"
                      color="#662D91"
                      class="mr-2 ml-2"
                      :icon="'mdi-eye'"
                      @click="VerDetalles(item)"
                    ></v-btn>
                  </template>
                </v-tooltip>
              </template>
            </v-data-table>
          </v-container>
        </v-sheet>
      </v-card-text>
    </v-card>

    <!-- FORM -->
    <v-container>
      <v-dialog v-model="state.dialog">
        <v-sheet elevation="4" class="ma-4 pa-4">
          <v-card>
            <v-form readonly>
              <v-sheet elevation="2" class="ma-2 pa-2">
                <v-card-title>
                  <span class="text-h5">
                    {{ state.formTitle }}
                  </span>
                </v-card-title>
              </v-sheet>

              <v-card-text>
                <!-- ********** -->

                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="state.itemsView.idpgp"
                      label="IDPGP"
                      type="number"
                      variant="underlined"
                    ></v-text-field>
                    <v-text-field
                      v-model="state.itemsView.estatus"
                      label="Estatus"
                      type="text"
                      variant="underlined"
                    ></v-text-field>
                    <v-text-field
                      v-model="state.itemsView.fecha_control"
                      label="Fecha de control"
                      type="date"
                      variant="underlined"
                    ></v-text-field>
                    <v-text-field
                      v-model="state.itemsView.fecha_ingreso"
                      label="Fecha de ingreso"
                      type="date"
                      variant="underlined"
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    <v-text-field
                      v-model="state.itemsView.fecha_prox_control"
                      label="Fecha próx. control"
                      type="date"
                      variant="underlined"
                    ></v-text-field>
                    <v-text-field
                      v-model="state.itemsView.fecha_ult_control"
                      label="Fecha últ. control"
                      type="date"
                      variant="underlined"
                    ></v-text-field>
                    <v-text-field
                      v-model="state.itemsView.comentario"
                      label="Comentario"
                      type="text"
                      variant="underlined"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <!-- ********** -->
              </v-card-text>

              <v-sheet elevation="2" class="ma-2 pa-2">
                <v-card-actions>
                  <v-btn
                    class="mr-2 ml-2"
                    color="#009AA4"
                    text="Cerrar"
                    variant="tonal"
                    @click="close()"
                  ></v-btn>
                </v-card-actions>
              </v-sheet>
            </v-form>
          </v-card>
        </v-sheet>
      </v-dialog>
    </v-container>
  </v-container>
</template>
