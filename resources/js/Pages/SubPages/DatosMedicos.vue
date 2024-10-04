<script>
import Enfermedad from "./Enfermedad.vue";
import Alergia from "./Alergia.vue";
import Cirugia from "./Cirugia.vue";
import FactorRiesgo from "./FactorRiesgo.vue";
import Medicamento from "./Medicamento.vue";
import Vacuna from "./Vacuna.vue";


export default {
    components: {
        Enfermedad,
        Alergia,
        Cirugia,
        FactorRiesgo,
        Medicamento,
        Vacuna,
    },
    data() {
        return {
            tab: "option-1",
          
        };
    },
};
</script>

<template>
    <v-sheet
        :class="'rounded-lg  mt-2 mb-2 pa-2'"
    >
        <div class="text-h6 ml-2">Datos Médicos: </div>
        <v-divider thickness="4px" color="#662d91"></v-divider>
    </v-sheet>
    <v-row class="mt-2">
        <Alergia />
        <v-divider
            :thickness="3"
            class="border-opacity-100"
            color="info"
        ></v-divider>
        <cirugia />
        <v-divider
            :thickness="3"
            class="border-opacity-100"
            color="info"
        ></v-divider>
        <enfermedad />
        <v-divider
            :thickness="3"
            class="border-opacity-100"
            color="info"
        ></v-divider>
        <factor-riesgo />
        <v-divider
            :thickness="3"
            class="border-opacity-100"
            color="info"
        ></v-divider>
        <medicamento />
        <v-divider
            :thickness="3"
            class="border-opacity-100"
            color="info"
        ></v-divider>
        <vacuna />
    </v-row>
</template>
