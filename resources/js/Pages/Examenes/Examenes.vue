<script>
import ExAlcohol from "./ExamenAlcohol.vue";
import ExAldehido from "./ExamenAldehido.vue";
import ExAsma from "./ExamenAsma.vue";
import ExEpo from "./ExamenEPO.vue";
import ExEquilibrio from "./ExamenEquilibrio.vue";
import ExHumoNegro from "./ExamenHumoNegro.vue";
import ExMetales from "./ExamenMetales.vue";
import ExPsico from "./ExamenPsico.vue";
import ExPvtmert from "./ExamenPVTMERT.vue";
import ExRespirador from "./ExamenRespirador.vue";
import ExRuido from "./ExamenRuido.vue";
import ExSalud from "./ExamenSalud.vue";
import ExSilice from "./ExamenSilice.vue";
import ExSolvente from "./ExamenSolvente.vue";
import ExSomnolencia from "./ExamenSomnolencia.vue";

export default {
    components: {
        ExAlcohol,
        ExAldehido,
        ExAsma,
        ExEpo,
        ExEquilibrio,
        ExHumoNegro,
        ExMetales,
        ExPsico,
        ExPvtmert,
        ExRespirador,
        ExRuido,
        ExSalud,
        ExSilice,
        ExSolvente,
        ExSomnolencia
    },
    data() {
        return {
            tab: "option-1"
        };
    }
};
</script>

<template>
    <v-row class="mt-2">
        <v-col>
            <ex-asma />
            <v-divider
                :thickness="3"
                class="border-opacity-100"
                color="info"
            ></v-divider>
            <ex-alcohol />
            <v-divider
                :thickness="3"
                class="border-opacity-100"
                color="info"
            ></v-divider>
            <ex-aldehido />
            <v-divider
                :thickness="3"
                class="border-opacity-100"
                color="info"
            ></v-divider>
            <ex-epo />
            <v-divider
                :thickness="3"
                class="border-opacity-100"
                color="info"
            ></v-divider>
            <ex-equilibrio />
            
            <v-divider
                :thickness="3"
                class="border-opacity-100"
                color="info"
            ></v-divider>
            <ex-humo-negro />
            <v-divider
                :thickness="3"
                class="border-opacity-100"
                color="info"
            ></v-divider>
            <ex-metales />
            <v-divider
                :thickness="3"
                class="border-opacity-100"
                color="info"
            ></v-divider>
            <ex-psico />
            <v-divider
                :thickness="3"
                class="border-opacity-100"
                color="info"
            ></v-divider>
            <ex-pvtmert />
            <v-divider
                :thickness="3"
                class="border-opacity-100"
                color="info"
            ></v-divider>
            <ex-respirador />
            <v-divider
                :thickness="3"
                class="border-opacity-100"
                color="info"
            ></v-divider>
            <ex-ruido />
            <v-divider
                :thickness="3"
                class="border-opacity-100"
                color="info"
            ></v-divider>
            <ex-salud />
            <v-divider
                :thickness="3"
                class="border-opacity-100"
                color="info"
            ></v-divider>
            <ex-silice />
            <v-divider
                :thickness="3"
                class="border-opacity-100"
                color="info"
            ></v-divider>
            <ex-solvente />
            <v-divider
                :thickness="3"
                class="border-opacity-100"
                color="info"
            ></v-divider>
            <ex-somnolencia />
        </v-col>
    </v-row>
</template>
