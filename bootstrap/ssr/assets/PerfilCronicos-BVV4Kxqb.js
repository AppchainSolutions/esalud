import { reactive, resolveComponent, mergeProps, withCtx, unref, createVNode, toDisplayString, createTextVNode, withDirectives, vModelRadio, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseEqual } from "vue/server-renderer";
import { A as AppLayout } from "./AppLayout-BCZ1d8OE.js";
import { u as useDataStore } from "./store-BqtSnK9e.js";
import { e as handleEditItem } from "./helper-c_7h9sWQ.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
import "./logo-DLUxz0ei.js";
import "pinia";
import "sweetalert2/dist/sweetalert2.js";
import "axios";
import "@kyvg/vue3-notification";
const _sfc_main = /* @__PURE__ */ Object.assign({ layout: AppLayout }, {
  __name: "PerfilCronicos",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useDataStore();
    const nombre = store.getSelected.nombre;
    const apellidos = store.getSelected.apellidos;
    const state = reactive({
      editedItem: {
        paciente_id: null,
        nivel_energia: null,
        estado_animo: null,
        calidad_sueño: null,
        dolor_malestar: null,
        cumple_medicacion: null,
        cumple_recomendacion: null,
        cumple_dieta: null,
        capacidad_tareas_diarias: null,
        nivel_actividad_fisica: null,
        capacidad_respiratoria: null,
        fuerza_flexibilidad: null,
        soporte_social: null,
        apoyo_familiares: null,
        participacion_social: null,
        acceso_recursos_salud: null
      },
      defaultItem: {
        paciente_id: null,
        nivel_energia: null,
        estado_animo: null,
        calidad_sueño: null,
        dolor_malestar: null,
        cumple_medicacion: null,
        cumple_recomendacion: null,
        cumple_dieta: null,
        capacidad_tareas_diarias: null,
        nivel_actividad_fisica: null,
        capacidad_respiratoria: null,
        fuerza_flexibilidad: null,
        soporte_social: null,
        apoyo_familiares: null,
        participacion_social: null,
        acceso_recursos_salud: null
      },
      tableItems: [],
      editedIndex: -1,
      list: [],
      loading: false,
      valid: null,
      formTitle: "Ficha paciente crónico"
    });
    const update = async () => {
      await handleEditItem(state);
    };
    function volver() {
      window.history.back();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_toolbar = resolveComponent("v-toolbar");
      const _component_v_toolbar_title = resolveComponent("v-toolbar-title");
      const _component_v_btn = resolveComponent("v-btn");
      _push(ssrRenderComponent(_component_v_container, mergeProps({ fluid: "" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_toolbar, {
              flat: "",
              class: "ma-2 pa-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_toolbar_title, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-h5"${_scopeId3}>Perfil Paciente: ${ssrInterpolate(unref(apellidos))}, ${ssrInterpolate(unref(nombre))}</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-h5" }, "Perfil Paciente: " + toDisplayString(unref(apellidos)) + ", " + toDisplayString(unref(nombre)), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_btn, {
                    color: "#009AA4",
                    variant: "tonal",
                    onClick: volver,
                    class: "ma-2 pa-2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Volver `);
                      } else {
                        return [
                          createTextVNode(" Volver ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_btn, {
                    color: "#009AA4",
                    variant: "tonal",
                    onClick: update,
                    class: "ma-2 pa-2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Guardar `);
                      } else {
                        return [
                          createTextVNode(" Guardar ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_toolbar_title, null, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-h5" }, "Perfil Paciente: " + toDisplayString(unref(apellidos)) + ", " + toDisplayString(unref(nombre)), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_btn, {
                      color: "#009AA4",
                      variant: "tonal",
                      onClick: volver,
                      class: "ma-2 pa-2"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Volver ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_btn, {
                      color: "#009AA4",
                      variant: "tonal",
                      onClick: update,
                      class: "ma-2 pa-2"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Guardar ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<table class="mt-2"${_scopeId}><tr${_scopeId}><th${_scopeId}>Estado general de salud</th><th${_scopeId}>1</th><th${_scopeId}>2</th><th${_scopeId}>3</th><th${_scopeId}>4</th><th${_scopeId}>5</th></tr><tr${_scopeId}><td${_scopeId}>Nivel de energía</td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.nivel_energia, "1")) ? " checked" : ""} type="radio" name="nivel_energia" value="1"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.nivel_energia, "2")) ? " checked" : ""} type="radio" name="nivel_energia" value="2"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.nivel_energia, "3")) ? " checked" : ""} type="radio" name="nivel_energia" value="3"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.nivel_energia, "4")) ? " checked" : ""} type="radio" name="nivel_energia" value="4"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.nivel_energia, "5")) ? " checked" : ""} type="radio" name="nivel_energia" value="5"${_scopeId}></td></tr><tr${_scopeId}><td${_scopeId}>Estado de animo</td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.estado_animo, "1")) ? " checked" : ""} type="radio" name="estado_animo" value="1"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.estado_animo, "2")) ? " checked" : ""} type="radio" name="estado_animo" value="2"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.estado_animo, "3")) ? " checked" : ""} type="radio" name="estado_animo" value="3"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.estado_animo, "4")) ? " checked" : ""} type="radio" name="estado_animo" value="4"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.estado_animo, "5")) ? " checked" : ""} type="radio" name="estado_animo" value="5"${_scopeId}></td></tr><tr${_scopeId}><td${_scopeId}>Calidad de sueño</td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.calidad_sueño, "1")) ? " checked" : ""} type="radio" name="calidad_sueño" value="1"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.calidad_sueño, "2")) ? " checked" : ""} type="radio" name="calidad_sueño" value="2"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.calidad_sueño, "3")) ? " checked" : ""} type="radio" name="calidad_sueño" value="3"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.calidad_sueño, "4")) ? " checked" : ""} type="radio" name="calidad_sueño" value="4"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.calidad_sueño, "5")) ? " checked" : ""} type="radio" name="calidad_sueño" value="5"${_scopeId}></td></tr><tr${_scopeId}><td${_scopeId}>Dolor o malestar general</td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.dolor_malestar, "1")) ? " checked" : ""} type="radio" name="dolor_malestar" value="1"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.dolor_malestar, "2")) ? " checked" : ""} type="radio" name="dolor_malestar" value="2"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.dolor_malestar, "3")) ? " checked" : ""} type="radio" name="dolor_malestar" value="3"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.dolor_malestar, "4")) ? " checked" : ""} type="radio" name="dolor_malestar" value="4"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.dolor_malestar, "5")) ? " checked" : ""} type="radio" name="dolor_malestar" value="5"${_scopeId}></td></tr><tr${_scopeId}><th${_scopeId}>Adherencia al tratamiento</th><th${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.adherencia, "1")) ? " checked" : ""} type="radio" name="adherencia" value="1"${_scopeId}></th><th${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.adherencia, "2")) ? " checked" : ""} type="radio" name="adherencia" value="2"${_scopeId}></th><th${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.adherencia, "3")) ? " checked" : ""} type="radio" name="adherencia" value="3"${_scopeId}></th><th${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.adherencia, "4")) ? " checked" : ""} type="radio" name="adherencia" value="4"${_scopeId}></th><th${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.adherencia, "5")) ? " checked" : ""} type="radio" name="adherencia" value="5"${_scopeId}></th></tr><tr${_scopeId}><td${_scopeId}>Cumple Medicación</td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.cumple_medicacion, "1")) ? " checked" : ""} type="radio" name="cumple_medicacion" value="1"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.cumple_medicacion, "2")) ? " checked" : ""} type="radio" name="cumple_medicacion" value="2"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.cumple_medicacion, "3")) ? " checked" : ""} type="radio" name="cumple_medicacion" value="3"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.cumple_medicacion, "4")) ? " checked" : ""} type="radio" name="cumple_medicacion" value="4"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.cumple_medicacion, "5")) ? " checked" : ""} type="radio" name="cumple_medicacion" value="5"${_scopeId}></td></tr><tr${_scopeId}><td${_scopeId}>Cumple recomendaciones de ejercicio</td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.cumple_recomendacion, "1")) ? " checked" : ""} type="radio" name="cumple_recomendacion" value="1"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.cumple_recomendacion, "2")) ? " checked" : ""} type="radio" name="cumple_recomendacion" value="2"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.cumple_recomendacion, "3")) ? " checked" : ""} type="radio" name="cumple_recomendacion" value="3"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.cumple_recomendacion, "4")) ? " checked" : ""} type="radio" name="cumple_recomendacion" value="4"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.cumple_recomendacion, "5")) ? " checked" : ""} type="radio" name="cumple_recomendacion" value="5"${_scopeId}></td></tr><tr${_scopeId}><td${_scopeId}>Cumple dieta recomendada</td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.cumple_dieta, "1")) ? " checked" : ""} type="radio" name="cumple_dieta" value="1"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.cumple_dieta, "2")) ? " checked" : ""} type="radio" name="cumple_dieta" value="2"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.cumple_dieta, "3")) ? " checked" : ""} type="radio" name="cumple_dieta" value="3"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.cumple_dieta, "4")) ? " checked" : ""} type="radio" name="cumple_dieta" value="4"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.cumple_dieta, "5")) ? " checked" : ""} type="radio" name="cumple_dieta" value="5"${_scopeId}></td></tr><tr${_scopeId}><th${_scopeId}>Bienestar Físico</th><th${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.bienestar_fisico, "1")) ? " checked" : ""} type="radio" name="bienestar_fisico" value="1"${_scopeId}></th><th${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.bienestar_fisico, "2")) ? " checked" : ""} type="radio" name="bienestar_fisico" value="2"${_scopeId}></th><th${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.bienestar_fisico, "3")) ? " checked" : ""} type="radio" name="bienestar_fisico" value="3"${_scopeId}></th><th${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.bienestar_fisico, "4")) ? " checked" : ""} type="radio" name="bienestar_fisico" value="4"${_scopeId}></th><th${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.bienestar_fisico, "5")) ? " checked" : ""} type="radio" name="bienestar_fisico" value="5"${_scopeId}></th></tr><tr${_scopeId}><td${_scopeId}>Capacidad para realizar actividades diarias</td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.capacidad_tareas_diarias, "1")) ? " checked" : ""} type="radio" name="capacidad_tareas_diarias" value="1"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.capacidad_tareas_diarias, "2")) ? " checked" : ""} type="radio" name="capacidad_tareas_diarias" value="2"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.capacidad_tareas_diarias, "3")) ? " checked" : ""} type="radio" name="capacidad_tareas_diarias" value="3"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.capacidad_tareas_diarias, "4")) ? " checked" : ""} type="radio" name="capacidad_tareas_diarias" value="4"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.capacidad_tareas_diarias, "5")) ? " checked" : ""} type="radio" name="capacidad_tareas_diarias" value="5"${_scopeId}></td></tr><tr${_scopeId}><td${_scopeId}>Nivel de actividad física</td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.nivel_actividad_fisica, "1")) ? " checked" : ""} type="radio" name="nivel_actividad_fisica" value="1"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.nivel_actividad_fisica, "2")) ? " checked" : ""} type="radio" name="nivel_actividad_fisica" value="2"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.nivel_actividad_fisica, "3")) ? " checked" : ""} type="radio" name="nivel_actividad_fisica" value="3"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.nivel_actividad_fisica, "4")) ? " checked" : ""} type="radio" name="nivel_actividad_fisica" value="4"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.nivel_actividad_fisica, "5")) ? " checked" : ""} type="radio" name="nivel_actividad_fisica" value="5"${_scopeId}></td></tr><tr${_scopeId}><td${_scopeId}>Capacidad respiratoria</td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.capacidad_respiratoria, "1")) ? " checked" : ""} type="radio" name="capacidad_respiratoria" value="1"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.capacidad_respiratoria, "2")) ? " checked" : ""} type="radio" name="capacidad_respiratoria" value="2"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.capacidad_respiratoria, "3")) ? " checked" : ""} type="radio" name="capacidad_respiratoria" value="3"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.capacidad_respiratoria, "4")) ? " checked" : ""} type="radio" name="capacidad_respiratoria" value="4"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.capacidad_respiratoria, "5")) ? " checked" : ""} type="radio" name="capacidad_respiratoria" value="5"${_scopeId}></td></tr><tr${_scopeId}><td${_scopeId}>Fuerza y flexibilidad</td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.fuerza_flexibilidad, "1")) ? " checked" : ""} type="radio" name="fuerza_flexibilidad" value="1"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.fuerza_flexibilidad, "2")) ? " checked" : ""} type="radio" name="fuerza_flexibilidad" value="2"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.fuerza_flexibilidad, "3")) ? " checked" : ""} type="radio" name="fuerza_flexibilidad" value="3"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.fuerza_flexibilidad, "4")) ? " checked" : ""} type="radio" name="fuerza_flexibilidad" value="4"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.fuerza_flexibilidad, "5")) ? " checked" : ""} type="radio" name="fuerza_flexibilidad" value="5"${_scopeId}></td></tr><tr${_scopeId}><th${_scopeId}>Soporte social</th><th${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.soporte_social, "1")) ? " checked" : ""} type="radio" name="soporte_social" value="1"${_scopeId}></th><th${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.soporte_social, "2")) ? " checked" : ""} type="radio" name="soporte_social" value="2"${_scopeId}></th><th${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.soporte_social, "3")) ? " checked" : ""} type="radio" name="soporte_social" value="3"${_scopeId}></th><th${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.soporte_social, "4")) ? " checked" : ""} type="radio" name="soporte_social" value="4"${_scopeId}></th><th${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.soporte_social, "5")) ? " checked" : ""} type="radio" name="soporte_social" value="5"${_scopeId}></th></tr><tr${_scopeId}><td${_scopeId}>Apoyo familiar y amigos</td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.apoyo_familiares, "1")) ? " checked" : ""} type="radio" name="apoyo_familiares" value="1"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.apoyo_familiares, "2")) ? " checked" : ""} type="radio" name="apoyo_familiares" value="2"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.apoyo_familiares, "3")) ? " checked" : ""} type="radio" name="apoyo_familiares" value="3"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.apoyo_familiares, "4")) ? " checked" : ""} type="radio" name="apoyo_familiares" value="4"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.apoyo_familiares, "5")) ? " checked" : ""} type="radio" name="apoyo_familiares" value="5"${_scopeId}></td></tr><tr${_scopeId}><td${_scopeId}>Participación actividades sociales</td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.participacion_social, "1")) ? " checked" : ""} type="radio" name="participacion_social" value="1"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.participacion_social, "2")) ? " checked" : ""} type="radio" name="participacion_social" value="2"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.participacion_social, "3")) ? " checked" : ""} type="radio" name="participacion_social" value="3"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.participacion_social, "4")) ? " checked" : ""} type="radio" name="participacion_social" value="4"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.participacion_social, "5")) ? " checked" : ""} type="radio" name="participacion_social" value="5"${_scopeId}></td></tr><tr${_scopeId}><td${_scopeId}>Acceso a recursos de salud</td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.acceso_recursos_salud, "1")) ? " checked" : ""} type="radio" name="acceso_recursos_salud" value="1"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.acceso_recursos_salud, "2")) ? " checked" : ""} type="radio" name="acceso_recursos_salud" value="2"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.acceso_recursos_salud, "3")) ? " checked" : ""} type="radio" name="acceso_recursos_salud" value="3"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.acceso_recursos_salud, "4")) ? " checked" : ""} type="radio" name="acceso_recursos_salud" value="4"${_scopeId}></td><td${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(state.editedItem.acceso_recursos_salud, "5")) ? " checked" : ""} type="radio" name="acceso_recursos_salud" value="5"${_scopeId}></td></tr></table>`);
          } else {
            return [
              createVNode(_component_v_toolbar, {
                flat: "",
                class: "ma-2 pa-2"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_toolbar_title, null, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-h5" }, "Perfil Paciente: " + toDisplayString(unref(apellidos)) + ", " + toDisplayString(unref(nombre)), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_btn, {
                    color: "#009AA4",
                    variant: "tonal",
                    onClick: volver,
                    class: "ma-2 pa-2"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Volver ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_btn, {
                    color: "#009AA4",
                    variant: "tonal",
                    onClick: update,
                    class: "ma-2 pa-2"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Guardar ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode("table", { class: "mt-2" }, [
                createVNode("tr", null, [
                  createVNode("th", null, "Estado general de salud"),
                  createVNode("th", null, "1"),
                  createVNode("th", null, "2"),
                  createVNode("th", null, "3"),
                  createVNode("th", null, "4"),
                  createVNode("th", null, "5")
                ]),
                createVNode("tr", null, [
                  createVNode("td", null, "Nivel de energía"),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.nivel_energia = $event,
                      type: "radio",
                      name: "nivel_energia",
                      value: "1"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.nivel_energia]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.nivel_energia = $event,
                      type: "radio",
                      name: "nivel_energia",
                      value: "2"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.nivel_energia]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.nivel_energia = $event,
                      type: "radio",
                      name: "nivel_energia",
                      value: "3"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.nivel_energia]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.nivel_energia = $event,
                      type: "radio",
                      name: "nivel_energia",
                      value: "4"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.nivel_energia]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.nivel_energia = $event,
                      type: "radio",
                      name: "nivel_energia",
                      value: "5"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.nivel_energia]
                    ])
                  ])
                ]),
                createVNode("tr", null, [
                  createVNode("td", null, "Estado de animo"),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.estado_animo = $event,
                      type: "radio",
                      name: "estado_animo",
                      value: "1"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.estado_animo]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.estado_animo = $event,
                      type: "radio",
                      name: "estado_animo",
                      value: "2"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.estado_animo]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.estado_animo = $event,
                      type: "radio",
                      name: "estado_animo",
                      value: "3"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.estado_animo]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.estado_animo = $event,
                      type: "radio",
                      name: "estado_animo",
                      value: "4"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.estado_animo]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.estado_animo = $event,
                      type: "radio",
                      name: "estado_animo",
                      value: "5"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.estado_animo]
                    ])
                  ])
                ]),
                createVNode("tr", null, [
                  createVNode("td", null, "Calidad de sueño"),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.calidad_sueño = $event,
                      type: "radio",
                      name: "calidad_sueño",
                      value: "1"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.calidad_sueño]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.calidad_sueño = $event,
                      type: "radio",
                      name: "calidad_sueño",
                      value: "2"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.calidad_sueño]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.calidad_sueño = $event,
                      type: "radio",
                      name: "calidad_sueño",
                      value: "3"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.calidad_sueño]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.calidad_sueño = $event,
                      type: "radio",
                      name: "calidad_sueño",
                      value: "4"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.calidad_sueño]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.calidad_sueño = $event,
                      type: "radio",
                      name: "calidad_sueño",
                      value: "5"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.calidad_sueño]
                    ])
                  ])
                ]),
                createVNode("tr", null, [
                  createVNode("td", null, "Dolor o malestar general"),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.dolor_malestar = $event,
                      type: "radio",
                      name: "dolor_malestar",
                      value: "1"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.dolor_malestar]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.dolor_malestar = $event,
                      type: "radio",
                      name: "dolor_malestar",
                      value: "2"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.dolor_malestar]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.dolor_malestar = $event,
                      type: "radio",
                      name: "dolor_malestar",
                      value: "3"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.dolor_malestar]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.dolor_malestar = $event,
                      type: "radio",
                      name: "dolor_malestar",
                      value: "4"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.dolor_malestar]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.dolor_malestar = $event,
                      type: "radio",
                      name: "dolor_malestar",
                      value: "5"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.dolor_malestar]
                    ])
                  ])
                ]),
                createVNode("tr", null, [
                  createVNode("th", null, "Adherencia al tratamiento"),
                  createVNode("th", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.adherencia = $event,
                      type: "radio",
                      name: "adherencia",
                      value: "1"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.adherencia]
                    ])
                  ]),
                  createVNode("th", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.adherencia = $event,
                      type: "radio",
                      name: "adherencia",
                      value: "2"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.adherencia]
                    ])
                  ]),
                  createVNode("th", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.adherencia = $event,
                      type: "radio",
                      name: "adherencia",
                      value: "3"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.adherencia]
                    ])
                  ]),
                  createVNode("th", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.adherencia = $event,
                      type: "radio",
                      name: "adherencia",
                      value: "4"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.adherencia]
                    ])
                  ]),
                  createVNode("th", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.adherencia = $event,
                      type: "radio",
                      name: "adherencia",
                      value: "5"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.adherencia]
                    ])
                  ])
                ]),
                createVNode("tr", null, [
                  createVNode("td", null, "Cumple Medicación"),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.cumple_medicacion = $event,
                      type: "radio",
                      name: "cumple_medicacion",
                      value: "1"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.cumple_medicacion]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.cumple_medicacion = $event,
                      type: "radio",
                      name: "cumple_medicacion",
                      value: "2"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.cumple_medicacion]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.cumple_medicacion = $event,
                      type: "radio",
                      name: "cumple_medicacion",
                      value: "3"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.cumple_medicacion]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.cumple_medicacion = $event,
                      type: "radio",
                      name: "cumple_medicacion",
                      value: "4"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.cumple_medicacion]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.cumple_medicacion = $event,
                      type: "radio",
                      name: "cumple_medicacion",
                      value: "5"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.cumple_medicacion]
                    ])
                  ])
                ]),
                createVNode("tr", null, [
                  createVNode("td", null, "Cumple recomendaciones de ejercicio"),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.cumple_recomendacion = $event,
                      type: "radio",
                      name: "cumple_recomendacion",
                      value: "1"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.cumple_recomendacion]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.cumple_recomendacion = $event,
                      type: "radio",
                      name: "cumple_recomendacion",
                      value: "2"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.cumple_recomendacion]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.cumple_recomendacion = $event,
                      type: "radio",
                      name: "cumple_recomendacion",
                      value: "3"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.cumple_recomendacion]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.cumple_recomendacion = $event,
                      type: "radio",
                      name: "cumple_recomendacion",
                      value: "4"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.cumple_recomendacion]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.cumple_recomendacion = $event,
                      type: "radio",
                      name: "cumple_recomendacion",
                      value: "5"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.cumple_recomendacion]
                    ])
                  ])
                ]),
                createVNode("tr", null, [
                  createVNode("td", null, "Cumple dieta recomendada"),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.cumple_dieta = $event,
                      type: "radio",
                      name: "cumple_dieta",
                      value: "1"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.cumple_dieta]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.cumple_dieta = $event,
                      type: "radio",
                      name: "cumple_dieta",
                      value: "2"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.cumple_dieta]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.cumple_dieta = $event,
                      type: "radio",
                      name: "cumple_dieta",
                      value: "3"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.cumple_dieta]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.cumple_dieta = $event,
                      type: "radio",
                      name: "cumple_dieta",
                      value: "4"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.cumple_dieta]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.cumple_dieta = $event,
                      type: "radio",
                      name: "cumple_dieta",
                      value: "5"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.cumple_dieta]
                    ])
                  ])
                ]),
                createVNode("tr", null, [
                  createVNode("th", null, "Bienestar Físico"),
                  createVNode("th", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.bienestar_fisico = $event,
                      type: "radio",
                      name: "bienestar_fisico",
                      value: "1"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.bienestar_fisico]
                    ])
                  ]),
                  createVNode("th", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.bienestar_fisico = $event,
                      type: "radio",
                      name: "bienestar_fisico",
                      value: "2"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.bienestar_fisico]
                    ])
                  ]),
                  createVNode("th", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.bienestar_fisico = $event,
                      type: "radio",
                      name: "bienestar_fisico",
                      value: "3"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.bienestar_fisico]
                    ])
                  ]),
                  createVNode("th", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.bienestar_fisico = $event,
                      type: "radio",
                      name: "bienestar_fisico",
                      value: "4"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.bienestar_fisico]
                    ])
                  ]),
                  createVNode("th", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.bienestar_fisico = $event,
                      type: "radio",
                      name: "bienestar_fisico",
                      value: "5"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.bienestar_fisico]
                    ])
                  ])
                ]),
                createVNode("tr", null, [
                  createVNode("td", null, "Capacidad para realizar actividades diarias"),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.capacidad_tareas_diarias = $event,
                      type: "radio",
                      name: "capacidad_tareas_diarias",
                      value: "1"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.capacidad_tareas_diarias]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.capacidad_tareas_diarias = $event,
                      type: "radio",
                      name: "capacidad_tareas_diarias",
                      value: "2"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.capacidad_tareas_diarias]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.capacidad_tareas_diarias = $event,
                      type: "radio",
                      name: "capacidad_tareas_diarias",
                      value: "3"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.capacidad_tareas_diarias]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.capacidad_tareas_diarias = $event,
                      type: "radio",
                      name: "capacidad_tareas_diarias",
                      value: "4"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.capacidad_tareas_diarias]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.capacidad_tareas_diarias = $event,
                      type: "radio",
                      name: "capacidad_tareas_diarias",
                      value: "5"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.capacidad_tareas_diarias]
                    ])
                  ])
                ]),
                createVNode("tr", null, [
                  createVNode("td", null, "Nivel de actividad física"),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.nivel_actividad_fisica = $event,
                      type: "radio",
                      name: "nivel_actividad_fisica",
                      value: "1"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.nivel_actividad_fisica]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.nivel_actividad_fisica = $event,
                      type: "radio",
                      name: "nivel_actividad_fisica",
                      value: "2"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.nivel_actividad_fisica]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.nivel_actividad_fisica = $event,
                      type: "radio",
                      name: "nivel_actividad_fisica",
                      value: "3"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.nivel_actividad_fisica]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.nivel_actividad_fisica = $event,
                      type: "radio",
                      name: "nivel_actividad_fisica",
                      value: "4"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.nivel_actividad_fisica]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.nivel_actividad_fisica = $event,
                      type: "radio",
                      name: "nivel_actividad_fisica",
                      value: "5"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.nivel_actividad_fisica]
                    ])
                  ])
                ]),
                createVNode("tr", null, [
                  createVNode("td", null, "Capacidad respiratoria"),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.capacidad_respiratoria = $event,
                      type: "radio",
                      name: "capacidad_respiratoria",
                      value: "1"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.capacidad_respiratoria]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.capacidad_respiratoria = $event,
                      type: "radio",
                      name: "capacidad_respiratoria",
                      value: "2"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.capacidad_respiratoria]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.capacidad_respiratoria = $event,
                      type: "radio",
                      name: "capacidad_respiratoria",
                      value: "3"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.capacidad_respiratoria]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.capacidad_respiratoria = $event,
                      type: "radio",
                      name: "capacidad_respiratoria",
                      value: "4"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.capacidad_respiratoria]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.capacidad_respiratoria = $event,
                      type: "radio",
                      name: "capacidad_respiratoria",
                      value: "5"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.capacidad_respiratoria]
                    ])
                  ])
                ]),
                createVNode("tr", null, [
                  createVNode("td", null, "Fuerza y flexibilidad"),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.fuerza_flexibilidad = $event,
                      type: "radio",
                      name: "fuerza_flexibilidad",
                      value: "1"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.fuerza_flexibilidad]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.fuerza_flexibilidad = $event,
                      type: "radio",
                      name: "fuerza_flexibilidad",
                      value: "2"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.fuerza_flexibilidad]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.fuerza_flexibilidad = $event,
                      type: "radio",
                      name: "fuerza_flexibilidad",
                      value: "3"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.fuerza_flexibilidad]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.fuerza_flexibilidad = $event,
                      type: "radio",
                      name: "fuerza_flexibilidad",
                      value: "4"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.fuerza_flexibilidad]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.fuerza_flexibilidad = $event,
                      type: "radio",
                      name: "fuerza_flexibilidad",
                      value: "5"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.fuerza_flexibilidad]
                    ])
                  ])
                ]),
                createVNode("tr", null, [
                  createVNode("th", null, "Soporte social"),
                  createVNode("th", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.soporte_social = $event,
                      type: "radio",
                      name: "soporte_social",
                      value: "1"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.soporte_social]
                    ])
                  ]),
                  createVNode("th", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.soporte_social = $event,
                      type: "radio",
                      name: "soporte_social",
                      value: "2"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.soporte_social]
                    ])
                  ]),
                  createVNode("th", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.soporte_social = $event,
                      type: "radio",
                      name: "soporte_social",
                      value: "3"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.soporte_social]
                    ])
                  ]),
                  createVNode("th", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.soporte_social = $event,
                      type: "radio",
                      name: "soporte_social",
                      value: "4"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.soporte_social]
                    ])
                  ]),
                  createVNode("th", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.soporte_social = $event,
                      type: "radio",
                      name: "soporte_social",
                      value: "5"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.soporte_social]
                    ])
                  ])
                ]),
                createVNode("tr", null, [
                  createVNode("td", null, "Apoyo familiar y amigos"),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.apoyo_familiares = $event,
                      type: "radio",
                      name: "apoyo_familiares",
                      value: "1"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.apoyo_familiares]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.apoyo_familiares = $event,
                      type: "radio",
                      name: "apoyo_familiares",
                      value: "2"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.apoyo_familiares]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.apoyo_familiares = $event,
                      type: "radio",
                      name: "apoyo_familiares",
                      value: "3"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.apoyo_familiares]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.apoyo_familiares = $event,
                      type: "radio",
                      name: "apoyo_familiares",
                      value: "4"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.apoyo_familiares]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.apoyo_familiares = $event,
                      type: "radio",
                      name: "apoyo_familiares",
                      value: "5"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.apoyo_familiares]
                    ])
                  ])
                ]),
                createVNode("tr", null, [
                  createVNode("td", null, "Participación actividades sociales"),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.participacion_social = $event,
                      type: "radio",
                      name: "participacion_social",
                      value: "1"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.participacion_social]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.participacion_social = $event,
                      type: "radio",
                      name: "participacion_social",
                      value: "2"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.participacion_social]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.participacion_social = $event,
                      type: "radio",
                      name: "participacion_social",
                      value: "3"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.participacion_social]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.participacion_social = $event,
                      type: "radio",
                      name: "participacion_social",
                      value: "4"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.participacion_social]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.participacion_social = $event,
                      type: "radio",
                      name: "participacion_social",
                      value: "5"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.participacion_social]
                    ])
                  ])
                ]),
                createVNode("tr", null, [
                  createVNode("td", null, "Acceso a recursos de salud"),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.acceso_recursos_salud = $event,
                      type: "radio",
                      name: "acceso_recursos_salud",
                      value: "1"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.acceso_recursos_salud]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.acceso_recursos_salud = $event,
                      type: "radio",
                      name: "acceso_recursos_salud",
                      value: "2"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.acceso_recursos_salud]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.acceso_recursos_salud = $event,
                      type: "radio",
                      name: "acceso_recursos_salud",
                      value: "3"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.acceso_recursos_salud]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.acceso_recursos_salud = $event,
                      type: "radio",
                      name: "acceso_recursos_salud",
                      value: "4"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.acceso_recursos_salud]
                    ])
                  ]),
                  createVNode("td", null, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => state.editedItem.acceso_recursos_salud = $event,
                      type: "radio",
                      name: "acceso_recursos_salud",
                      value: "5"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelRadio, state.editedItem.acceso_recursos_salud]
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/SubPages/PerfilCronicos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PerfilCronicos = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/blueshadows/www/esalud/resources/js/Pages/SubPages/PerfilCronicos.vue"]]);
export {
  PerfilCronicos as default
};
//# sourceMappingURL=PerfilCronicos-BVV4Kxqb.js.map
