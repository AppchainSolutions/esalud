<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { reactive, onMounted } from "vue";
import { fetchData, handleSearchItem } from "@/helper.js";

defineOptions({ layout: AppLayout });

const state = reactive({
  endpoints: ["area", "ceco", "empresa", "planta", "unidad", "nivel_riesgo"],

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
      title: "Nivel de riesgo",
      align: "start",
      sortable: true,
      key: "nivel_riesgo.descripcion",
    },
    {
      title: "Resultado",
      align: "start",
      sortable: true,
      key: "resultado",
    },
    {
      title: "Fecha exámen",
      align: "start",
      sortable: true,
      key: "fecha_examen",
    },

    { title: "Acciones", align: "center", key: "actions" },
  ],

  searchQuery: {
    activo: true,
    area: null,
    ceco: null,
    empresa: null,
    planta: null,
    rut: null,
    unidad: null,

    resultado: "No apto",
    nivel_riesgo: null,
    fecha_examen: { desde: null, hasta: null },
    fecha_primer: { desde: null, hasta: null },
    fecha_segundo: { desde: null, hasta: null },
  },

  rutRules: [
    (value) => {
      const regex = /^[0-9]+[-|‐]{1}[0-9kK]{1}$/;
      if (!regex.test(value)) {
        return false;
      }

      // Separar el número y el dígito verificador
      let splitrut = value.split("-");
      let num = splitrut[0];
      let dv = splitrut[1].toLowerCase();

      // Calcular el dígito verificador esperado
      let m = 0,
        s = 1;
      for (; num; num = Math.floor(num / 10)) {
        s = (s + (num % 10) * (9 - (m++ % 6))) % 11;
      }
      let dvEsperado = s ? s - 1 : "k";
      let validate = dv === dvEsperado;

      if (validate) return true;
      return "El rut es incorrecto";
    },
  ],

  itemsView: {
    paciente_id: null,
    fecha_examen: null,
    fecha_primer: null,
    fecha_segundo: null,
    nivel_riesgo: null,
    resultado: "No Apto",
    comentario: null,
  },

  dialog: false,
  tableItems: [],
  formItems: [],
  editedIndex: -1,
  list: [],
  valid: null,
  formTitle: "Exámenes de Somnolencia",
  urlSearch: "/consulta/exsomnolencia/search",
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
                  ></v-select>
                  <v-select
                    label="Area"
                    v-model="state.searchQuery.area"
                    variant="underlined"
                    :items="state.list.area"
                    item-title="descripcion"
                    item-value="id"
                  ></v-select>
                  <v-select
                    label="Area (cecos)"
                    v-model="state.searchQuery.ceco"
                    variant="underlined"
                    :items="state.list.ceco"
                    item-title="descripcion"
                    item-value="id"
                  ></v-select>
                  <v-switch
                    v-model="state.searchQuery.activo"
                    hide-details
                    true-value="true"
                    false-value="false"
                    class="ml-4 mb-4"
                    variant="underlined"
                    color="green-darken-3"
                    value="true"
                    :inset="true"
                    :label="`Paciente: ${state.searchQuery.activo.toString()}`"
                  ></v-switch>
                  <v-switch
                    v-model="state.searchQuery.resultado"
                    hide-details
                    true-value="Apto"
                    false-value="No apto"
                    class="ml-4 mb-4"
                    variant="underlined"
                    color="green-darken-3"
                    value="No apto"
                    :inset="true"
                    :label="`Resultado: ${state.searchQuery.resultado.toString()}`"
                  ></v-switch>
                </v-col>

                <v-col>
                  <v-select
                    label="Nivel de Riesgo"
                    v-model="state.searchQuery.nivel_riesgo"
                    variant="underlined"
                    :items="state.list.nivel_riesgo"
                    item-title="descripcion"
                    item-value="id"
                  ></v-select>
                  <v-text-field
                    label="Fecha exámen (desde)"
                    variant="underlined"
                    v-model="state.searchQuery.fecha_examen.desde"
                    type="date"
                  ></v-text-field>
                  <v-text-field
                    label="Fecha exámen (hasta)"
                    variant="underlined"
                    type="date"
                    v-model="state.searchQuery.fecha_examen.hasta"
                  ></v-text-field>
                  <v-text-field
                    label="Fecha primer exámen (desde)"
                    variant="underlined"
                    v-model="state.searchQuery.fecha_primer.desde"
                    type="date"
                  ></v-text-field>
                  <v-text-field
                    label="Fecha primer exámen (hasta)"
                    variant="underlined"
                    type="date"
                    v-model="state.searchQuery.fecha_primer.hasta"
                  ></v-text-field>
                  <v-text-field
                    label="Fecha segundo exámen (desde)"
                    variant="underlined"
                    v-model="state.searchQuery.fecha_segundo.desde"
                    type="date"
                  ></v-text-field>
                  <v-text-field
                    label="Fecha segundo exámen (hasta)"
                    variant="underlined"
                    type="date"
                    v-model="state.searchQuery.fecha_segundo.hasta"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-btn
                prepend-icon="mdi-file-search"
                variant="underlined"
                color="#662D91"
                :loading="state.loading"
                @click="handleSearch"
              >
                Buscar
              </v-btn>

              <v-btn
                prepend-icon="mdi-microsoft-excel"
                variant="underlined"
                color="#662D91"
              >
                <download-excel :data="state.tableItems" name="consulta_somnolencia.xls">
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
                  <span class="text-h5"> Consulta exámenes SOMNOLENCIA </span>
                </v-card-title>
              </v-sheet>

              <v-card-text>
                <!-- ********** -->

                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="state.itemsView.nivel_riesgo"
                      label="Nivel de Riesgo"
                      type="text"
                      variant="underlined"
                    ></v-text-field>

                    <v-text-field
                      v-model="state.itemsView.resultado"
                      label="Resultado"
                      type="text"
                      variant="underlined"
                    ></v-text-field>

                    <v-text-field
                      v-model="state.itemsView.comentario"
                      label="Comentario"
                      type="text"
                      variant="underlined"
                    ></v-text-field>
                  </v-col>

                  <v-col>
                    <v-text-field
                      v-model="state.itemsView.fecha_examen"
                      label="Fecha Examen"
                      type="date"
                      variant="underlined"
                    ></v-text-field>

                    <v-text-field
                      v-model="state.itemsView.fecha_primer"
                      label="Fecha primer"
                      type="date"
                      variant="underlined"
                    ></v-text-field>
                    <v-text-field
                      v-model="state.itemsView.fecha_segundo"
                      label="Fecha segundo"
                      type="date"
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
                    color="#662D91"
                    text="Cerrar"
                    variant="underlined"
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
