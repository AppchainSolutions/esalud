import { describe, it, expect, beforeEach, vi } from "vitest";
import { mount, createLocalVue } from "@vue/test-utils";
import PacientePage from "@/Pages/PacientePage.vue";
import Vuetify from "vuetify";

const localVue = createLocalVue();
localVue.use(Vuetify);

let vuetify;

beforeEach(() => {
    vuetify = new Vuetify();
});

describe("PacientePage.vue", () => {
    it("should have v-model bindings for each endpoint in v-dialog and v-form", () => {
        const wrapper = mount(PacientePage, {
            localVue,
            vuetify,
        });

        const endpoints = [
            "calles",
            "estados_civiles",
            "establecimientos_educacionales",
            "generos",
            "grupos_sanguineos",
            "leyes_sociales",
            "nacionalidades",
            "nivel_instruccion",
            "previsiones",
            "pueblos_originarios",
            "religiones",
            "seguros_salud",
        ];

        endpoints.forEach((endpoint) => {
            const input = wrapper.find(
                `input[v-model="state.list.${endpoint}"]`
            );
            expect(input.exists()).toBe(true);
        });
    });

    it("should have v-model bindings for each editedItem field in v-dialog and v-form", () => {
        const wrapper = mount(PacientePage, {
            localVue,
            vuetify,
        });

        const editedItemFields = [
            "field1",
            "field2",
            "field3",
            // Add all fields that should be checked
        ];

        editedItemFields.forEach((field) => {
            const input = wrapper.find(
                `input[v-model="state.editedItem.${field}"]`
            );
            expect(input.exists()).toBe(true);
        });
    });
});
