// src/components/HelloWorld.test.js
import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { mount, createLocalVue } from "@vue/test-utils";
import PacientePage from "../../resources/js/Pages/PacientePage.vue";
import Vuetify from "vuetify";

describe("HelloWorld", () => {
    it("renders properly", () => {
        const wrapper = mount(PacientePage, {
            props: { msg: "HOLA" },
            Vuetify,
        });
        expect(wrapper.text()).toContain("HOLA");
    });
    it("should have v-model bindings for each endpoint in v-dialog and v-form", () => {
        const wrapper = mount(PacientePage, {
            localVue,
            Vuetify,
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
            const input = wrapper.find(
                `input[v-model="state.list.${endpoint}"]`,
            );
            expect(input.exists()).toBe(true);
        });
    });

    it("should have v-model bindings for each editedItem field in v-dialog and v-form", () => {
        const wrapper = mount(PacientePage, {
            localVue,
            Vuetify,
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
            "rut_responsable",
            "rut",
            "telefono_responsable",
            "telefono1",
            "telefono2",
            // Add all fields that should be checked
        ];

        editedItemFields.forEach((field) => {
            const input = wrapper.find(
                `input[v-model="state.editedItem.${field}"]`,
            );
            expect(input.exists()).toBe(true);
        });
    });
});
