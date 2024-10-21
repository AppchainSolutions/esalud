import { describe, it, expect, beforeEach, vi } from "vitest";
import { mount, createLocalVue } from "@vue/test-utils";
import PacientePage from "@/Pages/PacientePage.vue";
import { fetchAllData } from "@/helper.js";
import Vuetify from "vuetify";

/* vi.mock("@/helper.js", () => ({
    fetchAllData: vi.fn(),
})); */

//Vue.use(Vuetify);
//const localVue = createLocalVue();
//localVue.use(Vuetify);

//let vuetify;

//beforeEach(() => {
//    vuetify = new Vuetify();
//});

describe("PacientePage.vue", () => {
    it("should call fetchAllData with correct endpoints on mount", async () => {
        const wrapper = mount(PacientePage, {
            localVue,
            vuetify,
        });

        await wrapper.vm.$nextTick();

        const endpoints = [
            "calles",
            "estados_civiles",
            "establecimientos_educacionales",
            "generos",
            "grupos_sanguineos",
            "leyes_sociales",
            "nacionalidades",
            "niveles_instruccion",
            "previsiones",
            "pueblos_originarios",
            "religiones",
            "seguros_salud",
        ];

        endpoints.forEach((endpoint) => {
            expect(fetchAllData).toHaveBeenCalledWith(endpoint);
        });
    });

    it("should update state.list after fetchAllData resolves", async () => {
        fetchAllData.mockResolvedValue({ data: [1, 2, 3] });

        const wrapper = mount(PacientePage, {
            localVue,
            vuetify,
        });

        await wrapper.vm.$nextTick();

        const endpoints = [
            "calles",
            "estados_civiles",
            "establecimientos_educacionales",
            "generos",
            "grupos_sanguineos",
            "leyes_sociales",
            "nacionalidades",
            "niveles_instruccion",
            "previsiones",
            "pueblos_originarios",
            "religiones",
            "seguros_salud",
        ];

        endpoints.forEach((endpoint) => {
            expect(wrapper.vm.state.list[endpoint]).toEqual([1, 2, 3]);
        });
    });

    it("should have v-model bindings for each endpoint", () => {
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
            "niveles_instruccion",
            "previsiones",
            "pueblos_originarios",
            "religiones",
            "seguros_salud",
        ];

        endpoints.forEach((endpoint) => {
            expect(wrapper.vm.state.list[endpoint]).toBeDefined();
        });
    });

    it("should have v-model bindings for each editedItem field", () => {
        const wrapper = mount(PacientePage, {
            localVue,
            vuetify,
        });

        const editedItemFields = [
            "apellidos",
            "apellidos_responsable",
            "calles_id",
            "calles_responsable_id",
            "ciudad_responsable",
            "ciudad",
            "comunidad_lgbtq",
            "comunidad_lgbtq_responsable",
            "credencial_discapacidad_responsable",
            "credencial_discapacidad",
            "direccion_responsable",
            "direccion",
            "donante_responsable",
            "donante",
            "edad_responsable",
            "edad",
            "email_responsable",
            "email",
            "establecimiento_educacional_id",
            "estado_civil_id",
            "estado_civil_responsable_id",
            "fecha_nacimiento_responsable",
            "fecha_nacimiento",
            "genero_id",
            "genero_responsable_id",
            "grupo_sanguineo_id",
            "grupo_sanguineo_responsable_id",
            "nacionalidad_id",
            "nacionalidad_responsable_id",
            "nivel_instruccion_id",
            "nivel_instruccion_responsable_id",
            "nombre_responsable",
            "nombre",
            "ocupacion_responsable",
            "ocupacion",
            "parentesco_responsable",
            "password",
            "pertenece_pie",
            "prevision_id",
            "prevision_responsable_id",
            "profesor",
            "pueblo_originario_id",
            "pueblo_originario_responsable_id",
            "religion_id",
            "religion_responsable_id",
            "remember_token",
            "rut_responsable",
            "rut",
            "telefono_responsable",
            "telefono1",
            "telefono2",
        ];

        editedItemFields.forEach((field) => {
            expect(wrapper.vm.state.editedItem[field]).toBeDefined();
        });
    });
});
