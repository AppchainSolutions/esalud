import {
    G as be,
    h as m,
    c as oe,
    o as B,
    w as n,
    b as l,
    n as j,
    f as U,
    t as S,
    a as P,
    s as Ce,
    W as Ve,
    x as ye,
    k as W,
    d as _e,
    i as Z,
    u as Ie,
    m as Q,
    F as Fe,
    N as H,
    r as we,
} from "./app-Bd0vU_sz.js";
import { A as xe } from "./AppLayout-DLm9dYBT.js";
import { u as Ae } from "./store-kpSnY_mw.js";
import { h as he } from "./moment-C5S46NFB.js";
import {
    f as Ue,
    a as ke,
    o as Ee,
    b as Se,
    d as De,
    c as K,
    e as X,
} from "./helper-BFSVoXz5.js";
import { _ as ne } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./logo-DIp7Rf8v.js";
const Pe = (s) => {
    if (!s) return "";
    const u = s.replace(/[.-]/g, ""),
        e = u.slice(0, -1),
        f = u.slice(-1);
    return `${e.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}-${f}`;
};
var R = { exports: {} },
    L,
    ee;
function $e() {
    if (ee) return L;
    ee = 1;
    var s = 1e3,
        u = s * 60,
        e = u * 60,
        f = e * 24,
        g = f * 7,
        _ = f * 365.25;
    L = function (a, i) {
        i = i || {};
        var d = typeof a;
        if (d === "string" && a.length > 0) return I(a);
        if (d === "number" && isFinite(a)) return i.long ? A(a) : V(a);
        throw new Error(
            "val is not a non-empty string or a valid number. val=" +
                JSON.stringify(a)
        );
    };
    function I(a) {
        if (((a = String(a)), !(a.length > 100))) {
            var i =
                /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                    a
                );
            if (i) {
                var d = parseFloat(i[1]),
                    p = (i[2] || "ms").toLowerCase();
                switch (p) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return d * _;
                    case "weeks":
                    case "week":
                    case "w":
                        return d * g;
                    case "days":
                    case "day":
                    case "d":
                        return d * f;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return d * e;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return d * u;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return d * s;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return d;
                    default:
                        return;
                }
            }
        }
    }
    function V(a) {
        var i = Math.abs(a);
        return i >= f
            ? Math.round(a / f) + "d"
            : i >= e
            ? Math.round(a / e) + "h"
            : i >= u
            ? Math.round(a / u) + "m"
            : i >= s
            ? Math.round(a / s) + "s"
            : a + "ms";
    }
    function A(a) {
        var i = Math.abs(a);
        return i >= f
            ? c(a, i, f, "day")
            : i >= e
            ? c(a, i, e, "hour")
            : i >= u
            ? c(a, i, u, "minute")
            : i >= s
            ? c(a, i, s, "second")
            : a + " ms";
    }
    function c(a, i, d, p) {
        var w = i >= d * 1.5;
        return Math.round(a / d) + " " + p + (w ? "s" : "");
    }
    return L;
}
function Me(s) {
    (e.debug = e),
        (e.default = e),
        (e.coerce = A),
        (e.disable = I),
        (e.enable = g),
        (e.enabled = V),
        (e.humanize = $e()),
        (e.destroy = c),
        Object.keys(s).forEach((a) => {
            e[a] = s[a];
        }),
        (e.names = []),
        (e.skips = []),
        (e.formatters = {});
    function u(a) {
        let i = 0;
        for (let d = 0; d < a.length; d++)
            (i = (i << 5) - i + a.charCodeAt(d)), (i |= 0);
        return e.colors[Math.abs(i) % e.colors.length];
    }
    e.selectColor = u;
    function e(a) {
        let i,
            d = null,
            p,
            w;
        function C(...y) {
            if (!C.enabled) return;
            const x = C,
                D = Number(new Date()),
                F = D - (i || D);
            (x.diff = F),
                (x.prev = i),
                (x.curr = D),
                (i = D),
                (y[0] = e.coerce(y[0])),
                typeof y[0] != "string" && y.unshift("%O");
            let t = 0;
            (y[0] = y[0].replace(/%([a-zA-Z%])/g, (b, v) => {
                if (b === "%%") return "%";
                t++;
                const k = e.formatters[v];
                if (typeof k == "function") {
                    const r = y[t];
                    (b = k.call(x, r)), y.splice(t, 1), t--;
                }
                return b;
            })),
                e.formatArgs.call(x, y),
                (x.log || e.log).apply(x, y);
        }
        return (
            (C.namespace = a),
            (C.useColors = e.useColors()),
            (C.color = e.selectColor(a)),
            (C.extend = f),
            (C.destroy = e.destroy),
            Object.defineProperty(C, "enabled", {
                enumerable: !0,
                configurable: !1,
                get: () =>
                    d !== null
                        ? d
                        : (p !== e.namespaces &&
                              ((p = e.namespaces), (w = e.enabled(a))),
                          w),
                set: (y) => {
                    d = y;
                },
            }),
            typeof e.init == "function" && e.init(C),
            C
        );
    }
    function f(a, i) {
        const d = e(this.namespace + (typeof i > "u" ? ":" : i) + a);
        return (d.log = this.log), d;
    }
    function g(a) {
        e.save(a), (e.namespaces = a), (e.names = []), (e.skips = []);
        const i = (typeof a == "string" ? a : "")
            .trim()
            .replace(" ", ",")
            .split(",")
            .filter(Boolean);
        for (const d of i)
            d[0] === "-" ? e.skips.push(d.slice(1)) : e.names.push(d);
    }
    function _(a, i) {
        let d = 0,
            p = 0,
            w = -1,
            C = 0;
        for (; d < a.length; )
            if (p < i.length && (i[p] === a[d] || i[p] === "*"))
                i[p] === "*" ? ((w = p), (C = d), p++) : (d++, p++);
            else if (w !== -1) (p = w + 1), C++, (d = C);
            else return !1;
        for (; p < i.length && i[p] === "*"; ) p++;
        return p === i.length;
    }
    function I() {
        const a = [...e.names, ...e.skips.map((i) => "-" + i)].join(",");
        return e.enable(""), a;
    }
    function V(a) {
        for (const i of e.skips) if (_(a, i)) return !1;
        for (const i of e.names) if (_(a, i)) return !0;
        return !1;
    }
    function A(a) {
        return a instanceof Error ? a.stack || a.message : a;
    }
    function c() {
        console.warn(
            "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
        );
    }
    return e.enable(e.load()), e;
}
var Te = Me;
(function (s, u) {
    var e = {};
    (u.formatArgs = g),
        (u.save = _),
        (u.load = I),
        (u.useColors = f),
        (u.storage = V()),
        (u.destroy = (() => {
            let c = !1;
            return () => {
                c ||
                    ((c = !0),
                    console.warn(
                        "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
                    ));
            };
        })()),
        (u.colors = [
            "#0000CC",
            "#0000FF",
            "#0033CC",
            "#0033FF",
            "#0066CC",
            "#0066FF",
            "#0099CC",
            "#0099FF",
            "#00CC00",
            "#00CC33",
            "#00CC66",
            "#00CC99",
            "#00CCCC",
            "#00CCFF",
            "#3300CC",
            "#3300FF",
            "#3333CC",
            "#3333FF",
            "#3366CC",
            "#3366FF",
            "#3399CC",
            "#3399FF",
            "#33CC00",
            "#33CC33",
            "#33CC66",
            "#33CC99",
            "#33CCCC",
            "#33CCFF",
            "#6600CC",
            "#6600FF",
            "#6633CC",
            "#6633FF",
            "#66CC00",
            "#66CC33",
            "#9900CC",
            "#9900FF",
            "#9933CC",
            "#9933FF",
            "#99CC00",
            "#99CC33",
            "#CC0000",
            "#CC0033",
            "#CC0066",
            "#CC0099",
            "#CC00CC",
            "#CC00FF",
            "#CC3300",
            "#CC3333",
            "#CC3366",
            "#CC3399",
            "#CC33CC",
            "#CC33FF",
            "#CC6600",
            "#CC6633",
            "#CC9900",
            "#CC9933",
            "#CCCC00",
            "#CCCC33",
            "#FF0000",
            "#FF0033",
            "#FF0066",
            "#FF0099",
            "#FF00CC",
            "#FF00FF",
            "#FF3300",
            "#FF3333",
            "#FF3366",
            "#FF3399",
            "#FF33CC",
            "#FF33FF",
            "#FF6600",
            "#FF6633",
            "#FF9900",
            "#FF9933",
            "#FFCC00",
            "#FFCC33",
        ]);
    function f() {
        if (
            typeof window < "u" &&
            window.process &&
            (window.process.type === "renderer" || window.process.__nwjs)
        )
            return !0;
        if (
            typeof navigator < "u" &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
        )
            return !1;
        let c;
        return (
            (typeof document < "u" &&
                document.documentElement &&
                document.documentElement.style &&
                document.documentElement.style.WebkitAppearance) ||
            (typeof window < "u" &&
                window.console &&
                (window.console.firebug ||
                    (window.console.exception && window.console.table))) ||
            (typeof navigator < "u" &&
                navigator.userAgent &&
                (c = navigator.userAgent
                    .toLowerCase()
                    .match(/firefox\/(\d+)/)) &&
                parseInt(c[1], 10) >= 31) ||
            (typeof navigator < "u" &&
                navigator.userAgent &&
                navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
        );
    }
    function g(c) {
        if (
            ((c[0] =
                (this.useColors ? "%c" : "") +
                this.namespace +
                (this.useColors ? " %c" : " ") +
                c[0] +
                (this.useColors ? "%c " : " ") +
                "+" +
                s.exports.humanize(this.diff)),
            !this.useColors)
        )
            return;
        const a = "color: " + this.color;
        c.splice(1, 0, a, "color: inherit");
        let i = 0,
            d = 0;
        c[0].replace(/%[a-zA-Z%]/g, (p) => {
            p !== "%%" && (i++, p === "%c" && (d = i));
        }),
            c.splice(d, 0, a);
    }
    u.log = console.debug || console.log || (() => {});
    function _(c) {
        try {
            c ? u.storage.setItem("debug", c) : u.storage.removeItem("debug");
        } catch {}
    }
    function I() {
        let c;
        try {
            c = u.storage.getItem("debug");
        } catch {}
        return (
            !c && typeof process < "u" && "env" in process && (c = e.DEBUG), c
        );
    }
    function V() {
        try {
            return localStorage;
        } catch {}
    }
    s.exports = Te(u);
    const { formatters: A } = s.exports;
    A.j = function (c) {
        try {
            return JSON.stringify(c);
        } catch (a) {
            return "[UnexpectedJSONParseError]: " + a.message;
        }
    };
})(R, R.exports);
var Ne = R.exports;
const le = be(Ne),
    te = "esalud",
    G = {
        trace: { icon: "🔍", color: "#808080", label: "TRACE" },
        info: { icon: "🔵", color: "#2196F3", label: "INFO" },
        success: { icon: "✅", color: "#2ecc71", label: "SUCCESS" },
        warning: { icon: "⚠️", color: "#FF9800", label: "WARNING" },
        error: { icon: "❌", color: "#F44336", label: "ERROR" },
        api: { icon: "🌐", color: "#9b59b6", label: "API" },
        component: { icon: "🧩", color: "#e67e22", label: "COMPONENT" },
        db: { icon: "💾", color: "#1abc9c", label: "DATABASE" },
        auth: { icon: "🔐", color: "#34495e", label: "AUTH" },
    },
    Qe = () => new Date().toISOString(),
    je = (s, u, e = null) => {
        const f = Qe(),
            g = G[s] || G.info,
            I = `%c${`${g.icon} [${f}] [${g.label}]`}`,
            V = `color: ${g.color}; font-weight: bold;`;
        return e ? [`${I} ${u}`, V, e] : [`${I} ${u}`, V];
    },
    $ = (s, u = "info") => {
        const e = le(`${te}:${s}`),
            f = {};
        return (
            le.enable(`${te}:*`),
            Object.keys(G).forEach((g) => {
                f[g] = (_, I = null) => {
                    const V = je(g, _, I);
                    e(...V);
                };
            }),
            (f.log = (g, _ = null) => {
                f[u](g, _);
            }),
            (f.group = (g) => {
                e(`%c→ ${g}`, "color: #3498db; font-weight: bold;"),
                    console.group();
            }),
            (f.groupEnd = () => {
                console.groupEnd(),
                    e("%c← End Group", "color: #3498db; font-weight: bold;");
            }),
            f
        );
    };
$("helpers", "info");
$("api", "api");
$("components", "component");
$("database", "db");
$("auth", "auth");
const Oe = { class: "mt-2 text-grey-darken-1" },
    qe = {
        __name: "ConfirmDialog",
        props: {
            modelValue: { type: Boolean, required: !0 },
            title: { type: String, default: "Confirmar Eliminación" },
            question: { type: String, required: !0 },
            description: {
                type: String,
                default: "Esta acción no se puede deshacer.",
            },
            confirmText: { type: String, default: "Eliminar" },
            cancelText: { type: String, default: "Cancelar" },
            confirmIcon: { type: String, default: "mdi-delete" },
            confirmColor: { type: String, default: "red-darken-1" },
            width: { type: String, default: "450px" },
        },
        emits: ["update:modelValue", "confirm", "cancel"],
        setup(s, { emit: u }) {
            const e = u,
                f = () => {
                    e("update:modelValue", !1), e("cancel");
                },
                g = () => {
                    e("confirm"), e("update:modelValue", !1);
                };
            return (_, I) => {
                const V = m("v-icon"),
                    A = m("v-card-title"),
                    c = m("v-card-item"),
                    a = m("v-card-text"),
                    i = m("v-divider"),
                    d = m("v-spacer"),
                    p = m("v-btn"),
                    w = m("v-card-actions"),
                    C = m("v-card"),
                    y = m("v-dialog");
                return (
                    B(),
                    oe(
                        y,
                        {
                            "model-value": s.modelValue,
                            "onUpdate:modelValue":
                                I[0] ||
                                (I[0] = (x) => _.$emit("update:modelValue", x)),
                            "max-width": s.width,
                            transition: "dialog-bottom-transition",
                        },
                        {
                            default: n(() => [
                                l(
                                    C,
                                    { class: "rounded-lg", elevation: "5" },
                                    {
                                        default: n(() => [
                                            l(
                                                c,
                                                {
                                                    class: j(
                                                        `bg-${s.confirmColor}-lighten-5`
                                                    ),
                                                },
                                                {
                                                    prepend: n(() => [
                                                        l(
                                                            V,
                                                            {
                                                                class: "mr-3",
                                                                size: "32",
                                                                icon: "mdi-alert-circle",
                                                                color: s.confirmColor,
                                                            },
                                                            null,
                                                            8,
                                                            ["color"]
                                                        ),
                                                    ]),
                                                    default: n(() => [
                                                        l(
                                                            A,
                                                            {
                                                                class: j([
                                                                    "text-h5 font-weight-bold",
                                                                    `text-${s.confirmColor}`,
                                                                ]),
                                                            },
                                                            {
                                                                default: n(
                                                                    () => [
                                                                        U(
                                                                            S(
                                                                                s.title
                                                                            ),
                                                                            1
                                                                        ),
                                                                    ]
                                                                ),
                                                                _: 1,
                                                            },
                                                            8,
                                                            ["class"]
                                                        ),
                                                    ]),
                                                    _: 1,
                                                },
                                                8,
                                                ["class"]
                                            ),
                                            l(
                                                a,
                                                { class: "pt-5 text-body-1" },
                                                {
                                                    default: n(() => [
                                                        P(
                                                            "p",
                                                            null,
                                                            S(s.question),
                                                            1
                                                        ),
                                                        P("p", Oe, [
                                                            l(V, {
                                                                icon: "mdi-information",
                                                                size: "18",
                                                                class: "mr-1",
                                                            }),
                                                            U(
                                                                " " +
                                                                    S(
                                                                        s.description
                                                                    ),
                                                                1
                                                            ),
                                                        ]),
                                                    ]),
                                                    _: 1,
                                                }
                                            ),
                                            l(i),
                                            l(
                                                w,
                                                { class: "pa-4" },
                                                {
                                                    default: n(() => [
                                                        l(d),
                                                        l(
                                                            p,
                                                            {
                                                                "prepend-icon":
                                                                    "mdi-close",
                                                                variant:
                                                                    "tonal",
                                                                color: "grey-darken-1",
                                                                onClick: f,
                                                                class: "mr-3",
                                                            },
                                                            {
                                                                default: n(
                                                                    () => [
                                                                        U(
                                                                            S(
                                                                                s.cancelText
                                                                            ),
                                                                            1
                                                                        ),
                                                                    ]
                                                                ),
                                                                _: 1,
                                                            }
                                                        ),
                                                        l(
                                                            p,
                                                            {
                                                                "prepend-icon":
                                                                    s.confirmIcon,
                                                                color: s.confirmColor,
                                                                onClick: g,
                                                                variant:
                                                                    "elevated",
                                                            },
                                                            {
                                                                default: n(
                                                                    () => [
                                                                        U(
                                                                            S(
                                                                                s.confirmText
                                                                            ),
                                                                            1
                                                                        ),
                                                                    ]
                                                                ),
                                                                _: 1,
                                                            },
                                                            8,
                                                            [
                                                                "prepend-icon",
                                                                "color",
                                                            ]
                                                        ),
                                                    ]),
                                                    _: 1,
                                                }
                                            ),
                                        ]),
                                        _: 1,
                                    }
                                ),
                            ]),
                            _: 1,
                        },
                        8,
                        ["model-value", "max-width"]
                    )
                );
            };
        },
    },
    Le = ne(qe, [
        [
            "__file",
            "/home/omar/www/esalud/resources/js/Components/ConfirmDialog.vue",
        ],
    ]),
    Be = { class: "text-h6 ma-2" },
    Re = { class: "text-h6 ma-2" },
    Ge = Object.assign(
        { layout: xe },
        {
            __name: "PacientePage",
            setup(s) {
                const u = Ae(),
                    e = Ce({
                        endpoints: [
                            "afp",
                            "area",
                            "ceco",
                            "estado_civil",
                            "empresa",
                            "exposicion",
                            "genero",
                            "grupo_sanguineo",
                            "nivel_instruccion",
                            "ley_social",
                            "nacionalidad",
                            "planta",
                            "prevision",
                            "pueblo_originario",
                            "religion",
                            "seguro",
                            "unidad",
                        ],
                        headers: [
                            {
                                title: "Rut",
                                align: "center",
                                sortable: !0,
                                key: "rut",
                            },
                            {
                                title: "Nombre",
                                align: "center",
                                sortable: !0,
                                key: "nombre",
                            },
                            {
                                title: "Apellidos",
                                align: "center",
                                sortable: !0,
                                key: "apellidos",
                            },
                            {
                                title: "Empresa",
                                align: "center",
                                sortable: !0,
                                key: "empresa.descripcion",
                            },
                            {
                                title: "Acciones",
                                sortable: !1,
                                align: "center",
                                key: "actions",
                            },
                        ],
                        searchQuery: {
                            id: null,
                            rut: null,
                            empresa: null,
                            area: null,
                            unidad: null,
                            planta: null,
                            ceco: null,
                            activo: !0,
                            protocolo_minsal: !1,
                            exposicion: [],
                        },
                        editedItem: {
                            rut: null,
                            nombre: null,
                            actividad_economica: null,
                            activo: !0,
                            protocolo_minsal: !1,
                            afp: null,
                            apellidos: null,
                            area: null,
                            cargo: null,
                            ceco: null,
                            ciudad: null,
                            direccion: null,
                            donante: !1,
                            edad: null,
                            email: null,
                            empresa: null,
                            estado_civil: null,
                            exposicion: [],
                            fecha_nacimiento: null,
                            genero: null,
                            grupo_sanguineo: null,
                            nivelInstruccion: null,
                            ley_social: null,
                            modalidadAtencion: null,
                            nacionalidad: null,
                            ocupacion: null,
                            planta: null,
                            prevision: null,
                            profesion: null,
                            pueblo_originario: null,
                            religion: null,
                            seguro: null,
                            telefono1: null,
                            telefono2: null,
                            unidad: null,
                        },
                        dialog: !1,
                        dialogActivationAccount: !1,
                        dialogDelete: !1,
                        itemToDelete: null,
                        editedIndex: -1,
                        formCrear: "Nuevo Paciente",
                        formEdit: "Editar datos del Paciente",
                        formItems: [],
                        formTitle: "Gestión de Pacientes",
                        list: [],
                        loadingSearch: !1,
                        tableItems: [],
                        urlDelete: "paciente/delete",
                        urlShow: "paciente/show",
                        urlUpdate: "paciente/update",
                        urlStore: "paciente",
                    });
                Ve(),
                    ye(async () => {
                        e.list = await Ue(e.endpoints);
                    });
                const f = W(() =>
                        e.editedIndex === -1 ? e.formCrear : e.formEdit
                    ),
                    g = W(() =>
                        he(e.editedItem.fecha_nacimiento).format("DD/MM/YYYY")
                    );
                function _(F) {
                    u.selected = F;
                    try {
                        H.get("/ficha");
                    } catch {
                        console.error(
                            '"An error occurred while fetching daily attention data."'
                        );
                    }
                }
                function I(F) {
                    u.selected = F;
                    try {
                        H.get("/atencion_diaria");
                    } catch {
                        console.error(
                            "An error occurred while fetching daily attention data."
                        );
                    }
                }
                function V() {
                    e.editedItem.errors && (e.editedItem.errors = {}), K(e);
                }
                function A(F) {
                    let t = new Date(),
                        M = new Date(F);
                    return t.getFullYear() - M.getFullYear();
                }
                const c = () => {
                        let F = e.editedItem.fecha_nacimiento,
                            t = A(F);
                        e.editedItem.edad = we(t);
                    },
                    a = async () => {
                        console.log("inicia buscar"), await ke(e);
                    };
                function i() {
                    De(e);
                }
                async function d() {
                    return e.editedIndex > -1 ? w() : p();
                }
                const p = async () => {
                        await X(e, "create"),
                            V(),
                            (e.dialogActivationAccount = !0);
                    },
                    w = async () => {
                        await X(e, "edit"), K(e);
                    };
                function C(F) {
                    Ee(e, F), c();
                }
                const y = async (F) => {
                        Se(e, F);
                    },
                    x = () => {
                        (e.dialogDelete = !1), (e.itemToDelete = null);
                    },
                    D = async () => {
                        await deleteConfirmed({
                            ...e,
                            url: { delete: "api/paciente" },
                        }),
                            x();
                    };
                return (F, t) => {
                    const M = m("v-expansion-panel-title"),
                        b = m("v-text-field"),
                        v = m("v-select"),
                        k = m("v-switch"),
                        r = m("v-col"),
                        T = m("v-row"),
                        h = m("v-btn"),
                        ae = m("download-excel"),
                        z = m("v-form"),
                        ie = m("v-expansion-panel-text"),
                        de = m("v-expansion-panel"),
                        re = m("v-expansion-panels"),
                        Y = m("v-divider"),
                        se = m("v-card-title"),
                        O = m("v-spacer"),
                        ue = m("v-card-text"),
                        ce = m("v-card-actions"),
                        me = m("v-card"),
                        pe = m("v-dialog"),
                        fe = m("v-toolbar"),
                        N = m("v-tooltip"),
                        ve = m("v-data-table"),
                        J = m("v-sheet"),
                        ge = m("v-container");
                    return (
                        B(),
                        _e(
                            Fe,
                            null,
                            [
                                l(
                                    ge,
                                    { fluid: "" },
                                    {
                                        default: n(() => [
                                            l(
                                                J,
                                                {
                                                    color: "white",
                                                    elevation: 6,
                                                    class: j(
                                                        "rounded-lg ma-4 pa-4"
                                                    ),
                                                },
                                                {
                                                    default: n(() => [
                                                        P(
                                                            "div",
                                                            Be,
                                                            S(e.formTitle),
                                                            1
                                                        ),
                                                        l(re, null, {
                                                            default: n(() => [
                                                                l(de, null, {
                                                                    default: n(
                                                                        () => [
                                                                            l(
                                                                                M,
                                                                                {
                                                                                    color: "#009AA4",
                                                                                },
                                                                                {
                                                                                    default:
                                                                                        n(
                                                                                            () =>
                                                                                                t[48] ||
                                                                                                (t[48] =
                                                                                                    [
                                                                                                        U(
                                                                                                            "Criterios de Búsqueda"
                                                                                                        ),
                                                                                                    ])
                                                                                        ),
                                                                                    _: 1,
                                                                                }
                                                                            ),
                                                                            l(
                                                                                ie,
                                                                                null,
                                                                                {
                                                                                    default:
                                                                                        n(
                                                                                            () => [
                                                                                                l(
                                                                                                    z,
                                                                                                    {
                                                                                                        "fast-fail":
                                                                                                            "",
                                                                                                        onSubmit:
                                                                                                            t[10] ||
                                                                                                            (t[10] =
                                                                                                                Z(() => {}, [
                                                                                                                    "prevent",
                                                                                                                ])),
                                                                                                    },
                                                                                                    {
                                                                                                        default:
                                                                                                            n(
                                                                                                                () => [
                                                                                                                    l(
                                                                                                                        T,
                                                                                                                        null,
                                                                                                                        {
                                                                                                                            default:
                                                                                                                                n(
                                                                                                                                    () => [
                                                                                                                                        l(
                                                                                                                                            r,
                                                                                                                                            null,
                                                                                                                                            {
                                                                                                                                                default:
                                                                                                                                                    n(
                                                                                                                                                        () => [
                                                                                                                                                            l(
                                                                                                                                                                b,
                                                                                                                                                                {
                                                                                                                                                                    modelValue:
                                                                                                                                                                        e
                                                                                                                                                                            .searchQuery
                                                                                                                                                                            .rut,
                                                                                                                                                                    "onUpdate:modelValue":
                                                                                                                                                                        t[0] ||
                                                                                                                                                                        (t[0] =
                                                                                                                                                                            (
                                                                                                                                                                                o
                                                                                                                                                                            ) =>
                                                                                                                                                                                (e.searchQuery.rut =
                                                                                                                                                                                    o)),
                                                                                                                                                                    onInput:
                                                                                                                                                                        t[1] ||
                                                                                                                                                                        (t[1] =
                                                                                                                                                                            (
                                                                                                                                                                                o
                                                                                                                                                                            ) =>
                                                                                                                                                                                (e.searchQuery.rut =
                                                                                                                                                                                    Ie(
                                                                                                                                                                                        Pe
                                                                                                                                                                                    )(
                                                                                                                                                                                        o
                                                                                                                                                                                    ))),
                                                                                                                                                                    label: "Rut* (12345678-9)",
                                                                                                                                                                    type: "text",
                                                                                                                                                                    variant:
                                                                                                                                                                        "underlined",
                                                                                                                                                                    clearable:
                                                                                                                                                                        "",
                                                                                                                                                                },
                                                                                                                                                                null,
                                                                                                                                                                8,
                                                                                                                                                                [
                                                                                                                                                                    "modelValue",
                                                                                                                                                                ]
                                                                                                                                                            ),
                                                                                                                                                            l(
                                                                                                                                                                v,
                                                                                                                                                                {
                                                                                                                                                                    items: e
                                                                                                                                                                        .list
                                                                                                                                                                        .ceco,
                                                                                                                                                                    "item-title":
                                                                                                                                                                        "descripcion",
                                                                                                                                                                    "item-value":
                                                                                                                                                                        "id",
                                                                                                                                                                    modelValue:
                                                                                                                                                                        e
                                                                                                                                                                            .searchQuery
                                                                                                                                                                            .ceco,
                                                                                                                                                                    "onUpdate:modelValue":
                                                                                                                                                                        t[2] ||
                                                                                                                                                                        (t[2] =
                                                                                                                                                                            (
                                                                                                                                                                                o
                                                                                                                                                                            ) =>
                                                                                                                                                                                (e.searchQuery.ceco =
                                                                                                                                                                                    o)),
                                                                                                                                                                    label: "Area de Trabajo (Cencos)",
                                                                                                                                                                    clearable:
                                                                                                                                                                        "",
                                                                                                                                                                    variant:
                                                                                                                                                                        "underlined",
                                                                                                                                                                    single: "",
                                                                                                                                                                },
                                                                                                                                                                null,
                                                                                                                                                                8,
                                                                                                                                                                [
                                                                                                                                                                    "items",
                                                                                                                                                                    "modelValue",
                                                                                                                                                                ]
                                                                                                                                                            ),
                                                                                                                                                            l(
                                                                                                                                                                k,
                                                                                                                                                                {
                                                                                                                                                                    modelValue:
                                                                                                                                                                        e
                                                                                                                                                                            .searchQuery
                                                                                                                                                                            .activo,
                                                                                                                                                                    "onUpdate:modelValue":
                                                                                                                                                                        t[3] ||
                                                                                                                                                                        (t[3] =
                                                                                                                                                                            (
                                                                                                                                                                                o
                                                                                                                                                                            ) =>
                                                                                                                                                                                (e.searchQuery.activo =
                                                                                                                                                                                    o)),
                                                                                                                                                                    "hide-details":
                                                                                                                                                                        "",
                                                                                                                                                                    "true-value":
                                                                                                                                                                        "true",
                                                                                                                                                                    "false-value":
                                                                                                                                                                        "false",
                                                                                                                                                                    variant:
                                                                                                                                                                        "underlined",
                                                                                                                                                                    color: "green-darken-3",
                                                                                                                                                                    inset: "",
                                                                                                                                                                    label: "Activo",
                                                                                                                                                                },
                                                                                                                                                                null,
                                                                                                                                                                8,
                                                                                                                                                                [
                                                                                                                                                                    "modelValue",
                                                                                                                                                                ]
                                                                                                                                                            ),
                                                                                                                                                            l(
                                                                                                                                                                k,
                                                                                                                                                                {
                                                                                                                                                                    modelValue:
                                                                                                                                                                        e
                                                                                                                                                                            .searchQuery
                                                                                                                                                                            .protocolo_minsal,
                                                                                                                                                                    "onUpdate:modelValue":
                                                                                                                                                                        t[4] ||
                                                                                                                                                                        (t[4] =
                                                                                                                                                                            (
                                                                                                                                                                                o
                                                                                                                                                                            ) =>
                                                                                                                                                                                (e.searchQuery.protocolo_minsal =
                                                                                                                                                                                    o)),
                                                                                                                                                                    "hide-details":
                                                                                                                                                                        "",
                                                                                                                                                                    variant:
                                                                                                                                                                        "underlined",
                                                                                                                                                                    color: "green-darken-3",
                                                                                                                                                                    inset: "",
                                                                                                                                                                    label: "Seguimiento Exposición",
                                                                                                                                                                },
                                                                                                                                                                null,
                                                                                                                                                                8,
                                                                                                                                                                [
                                                                                                                                                                    "modelValue",
                                                                                                                                                                ]
                                                                                                                                                            ),
                                                                                                                                                        ]
                                                                                                                                                    ),
                                                                                                                                                _: 1,
                                                                                                                                            }
                                                                                                                                        ),
                                                                                                                                        l(
                                                                                                                                            r,
                                                                                                                                            null,
                                                                                                                                            {
                                                                                                                                                default:
                                                                                                                                                    n(
                                                                                                                                                        () => [
                                                                                                                                                            l(
                                                                                                                                                                v,
                                                                                                                                                                {
                                                                                                                                                                    items: e
                                                                                                                                                                        .list
                                                                                                                                                                        .empresa,
                                                                                                                                                                    "item-title":
                                                                                                                                                                        "descripcion",
                                                                                                                                                                    "item-value":
                                                                                                                                                                        "id",
                                                                                                                                                                    modelValue:
                                                                                                                                                                        e
                                                                                                                                                                            .searchQuery
                                                                                                                                                                            .empresa,
                                                                                                                                                                    "onUpdate:modelValue":
                                                                                                                                                                        t[5] ||
                                                                                                                                                                        (t[5] =
                                                                                                                                                                            (
                                                                                                                                                                                o
                                                                                                                                                                            ) =>
                                                                                                                                                                                (e.searchQuery.empresa =
                                                                                                                                                                                    o)),
                                                                                                                                                                    label: "Empresa",
                                                                                                                                                                    clearable:
                                                                                                                                                                        "",
                                                                                                                                                                    variant:
                                                                                                                                                                        "underlined",
                                                                                                                                                                    single: "",
                                                                                                                                                                },
                                                                                                                                                                null,
                                                                                                                                                                8,
                                                                                                                                                                [
                                                                                                                                                                    "items",
                                                                                                                                                                    "modelValue",
                                                                                                                                                                ]
                                                                                                                                                            ),
                                                                                                                                                            (B(),
                                                                                                                                                            oe(
                                                                                                                                                                v,
                                                                                                                                                                {
                                                                                                                                                                    items: e
                                                                                                                                                                        .list
                                                                                                                                                                        .planta,
                                                                                                                                                                    "item-title":
                                                                                                                                                                        "descripcion",
                                                                                                                                                                    "item-value":
                                                                                                                                                                        "id",
                                                                                                                                                                    modelValue:
                                                                                                                                                                        e
                                                                                                                                                                            .searchQuery
                                                                                                                                                                            .planta,
                                                                                                                                                                    "onUpdate:modelValue":
                                                                                                                                                                        t[6] ||
                                                                                                                                                                        (t[6] =
                                                                                                                                                                            (
                                                                                                                                                                                o
                                                                                                                                                                            ) =>
                                                                                                                                                                                (e.searchQuery.planta =
                                                                                                                                                                                    o)),
                                                                                                                                                                    label: "Planta",
                                                                                                                                                                    clearable:
                                                                                                                                                                        "",
                                                                                                                                                                    variant:
                                                                                                                                                                        "underlined",
                                                                                                                                                                    single: "",
                                                                                                                                                                    key: "planta",
                                                                                                                                                                },
                                                                                                                                                                null,
                                                                                                                                                                8,
                                                                                                                                                                [
                                                                                                                                                                    "items",
                                                                                                                                                                    "modelValue",
                                                                                                                                                                ]
                                                                                                                                                            )),
                                                                                                                                                            l(
                                                                                                                                                                v,
                                                                                                                                                                {
                                                                                                                                                                    items: e
                                                                                                                                                                        .list
                                                                                                                                                                        .exposicion,
                                                                                                                                                                    "item-title":
                                                                                                                                                                        "descripcion",
                                                                                                                                                                    "item-value":
                                                                                                                                                                        "descripcion",
                                                                                                                                                                    modelValue:
                                                                                                                                                                        e
                                                                                                                                                                            .searchQuery
                                                                                                                                                                            .exposicion,
                                                                                                                                                                    "onUpdate:modelValue":
                                                                                                                                                                        t[7] ||
                                                                                                                                                                        (t[7] =
                                                                                                                                                                            (
                                                                                                                                                                                o
                                                                                                                                                                            ) =>
                                                                                                                                                                                (e.searchQuery.exposicion =
                                                                                                                                                                                    o)),
                                                                                                                                                                    label: "Exposicion",
                                                                                                                                                                    clearable:
                                                                                                                                                                        "",
                                                                                                                                                                    variant:
                                                                                                                                                                        "underlined",
                                                                                                                                                                    chips: "",
                                                                                                                                                                    multiple:
                                                                                                                                                                        "",
                                                                                                                                                                },
                                                                                                                                                                null,
                                                                                                                                                                8,
                                                                                                                                                                [
                                                                                                                                                                    "items",
                                                                                                                                                                    "modelValue",
                                                                                                                                                                ]
                                                                                                                                                            ),
                                                                                                                                                        ]
                                                                                                                                                    ),
                                                                                                                                                _: 1,
                                                                                                                                            }
                                                                                                                                        ),
                                                                                                                                        l(
                                                                                                                                            r,
                                                                                                                                            null,
                                                                                                                                            {
                                                                                                                                                default:
                                                                                                                                                    n(
                                                                                                                                                        () => [
                                                                                                                                                            l(
                                                                                                                                                                v,
                                                                                                                                                                {
                                                                                                                                                                    items: e
                                                                                                                                                                        .list
                                                                                                                                                                        .unidad,
                                                                                                                                                                    "item-title":
                                                                                                                                                                        "descripcion",
                                                                                                                                                                    "item-value":
                                                                                                                                                                        "id",
                                                                                                                                                                    modelValue:
                                                                                                                                                                        e
                                                                                                                                                                            .searchQuery
                                                                                                                                                                            .unidad,
                                                                                                                                                                    "onUpdate:modelValue":
                                                                                                                                                                        t[8] ||
                                                                                                                                                                        (t[8] =
                                                                                                                                                                            (
                                                                                                                                                                                o
                                                                                                                                                                            ) =>
                                                                                                                                                                                (e.searchQuery.unidad =
                                                                                                                                                                                    o)),
                                                                                                                                                                    clearable:
                                                                                                                                                                        "",
                                                                                                                                                                    label: "Unidad",
                                                                                                                                                                    variant:
                                                                                                                                                                        "underlined",
                                                                                                                                                                    single: "",
                                                                                                                                                                },
                                                                                                                                                                null,
                                                                                                                                                                8,
                                                                                                                                                                [
                                                                                                                                                                    "items",
                                                                                                                                                                    "modelValue",
                                                                                                                                                                ]
                                                                                                                                                            ),
                                                                                                                                                            l(
                                                                                                                                                                v,
                                                                                                                                                                {
                                                                                                                                                                    items: e
                                                                                                                                                                        .list
                                                                                                                                                                        .area,
                                                                                                                                                                    "item-title":
                                                                                                                                                                        "descripcion",
                                                                                                                                                                    "item-value":
                                                                                                                                                                        "id",
                                                                                                                                                                    modelValue:
                                                                                                                                                                        e
                                                                                                                                                                            .searchQuery
                                                                                                                                                                            .area,
                                                                                                                                                                    "onUpdate:modelValue":
                                                                                                                                                                        t[9] ||
                                                                                                                                                                        (t[9] =
                                                                                                                                                                            (
                                                                                                                                                                                o
                                                                                                                                                                            ) =>
                                                                                                                                                                                (e.searchQuery.area =
                                                                                                                                                                                    o)),
                                                                                                                                                                    clearable:
                                                                                                                                                                        "",
                                                                                                                                                                    label: "Area",
                                                                                                                                                                    variant:
                                                                                                                                                                        "underlined",
                                                                                                                                                                    single: "",
                                                                                                                                                                },
                                                                                                                                                                null,
                                                                                                                                                                8,
                                                                                                                                                                [
                                                                                                                                                                    "items",
                                                                                                                                                                    "modelValue",
                                                                                                                                                                ]
                                                                                                                                                            ),
                                                                                                                                                        ]
                                                                                                                                                    ),
                                                                                                                                                _: 1,
                                                                                                                                            }
                                                                                                                                        ),
                                                                                                                                    ]
                                                                                                                                ),
                                                                                                                            _: 1,
                                                                                                                        }
                                                                                                                    ),
                                                                                                                    l(
                                                                                                                        T,
                                                                                                                        null,
                                                                                                                        {
                                                                                                                            default:
                                                                                                                                n(
                                                                                                                                    () => [
                                                                                                                                        l(
                                                                                                                                            h,
                                                                                                                                            {
                                                                                                                                                "prepend-icon":
                                                                                                                                                    "mdi-file-search",
                                                                                                                                                variant:
                                                                                                                                                    "tonal",
                                                                                                                                                class: "ma-4",
                                                                                                                                                color: "#009AA4",
                                                                                                                                                loading:
                                                                                                                                                    e.loadingSearch,
                                                                                                                                                type: "submit",
                                                                                                                                                onClick:
                                                                                                                                                    a,
                                                                                                                                            },
                                                                                                                                            {
                                                                                                                                                default:
                                                                                                                                                    n(
                                                                                                                                                        () =>
                                                                                                                                                            t[49] ||
                                                                                                                                                            (t[49] =
                                                                                                                                                                [
                                                                                                                                                                    U(
                                                                                                                                                                        " Buscar "
                                                                                                                                                                    ),
                                                                                                                                                                ])
                                                                                                                                                    ),
                                                                                                                                                _: 1,
                                                                                                                                            },
                                                                                                                                            8,
                                                                                                                                            [
                                                                                                                                                "loading",
                                                                                                                                            ]
                                                                                                                                        ),
                                                                                                                                        l(
                                                                                                                                            h,
                                                                                                                                            {
                                                                                                                                                "prepend-icon":
                                                                                                                                                    "mdi-cloud-download",
                                                                                                                                                variant:
                                                                                                                                                    "tonal",
                                                                                                                                                class: "ma-4",
                                                                                                                                                color: "#009AA4",
                                                                                                                                            },
                                                                                                                                            {
                                                                                                                                                default:
                                                                                                                                                    n(
                                                                                                                                                        () => [
                                                                                                                                                            l(
                                                                                                                                                                ae,
                                                                                                                                                                {
                                                                                                                                                                    data: e.tableItems,
                                                                                                                                                                    name: "consulta_paciente.xls",
                                                                                                                                                                },
                                                                                                                                                                {
                                                                                                                                                                    default:
                                                                                                                                                                        n(
                                                                                                                                                                            () =>
                                                                                                                                                                                t[50] ||
                                                                                                                                                                                (t[50] =
                                                                                                                                                                                    [
                                                                                                                                                                                        U(
                                                                                                                                                                                            " Bajar archivo "
                                                                                                                                                                                        ),
                                                                                                                                                                                    ])
                                                                                                                                                                        ),
                                                                                                                                                                    _: 1,
                                                                                                                                                                },
                                                                                                                                                                8,
                                                                                                                                                                [
                                                                                                                                                                    "data",
                                                                                                                                                                ]
                                                                                                                                                            ),
                                                                                                                                                        ]
                                                                                                                                                    ),
                                                                                                                                                _: 1,
                                                                                                                                            }
                                                                                                                                        ),
                                                                                                                                    ]
                                                                                                                                ),
                                                                                                                            _: 1,
                                                                                                                        }
                                                                                                                    ),
                                                                                                                ]
                                                                                                            ),
                                                                                                        _: 1,
                                                                                                    }
                                                                                                ),
                                                                                            ]
                                                                                        ),
                                                                                    _: 1,
                                                                                }
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    _: 1,
                                                                }),
                                                            ]),
                                                            _: 1,
                                                        }),
                                                        l(Y, {
                                                            thickness: "4px",
                                                            color: "#009AA4",
                                                            class: "ma-4",
                                                        }),
                                                        l(
                                                            J,
                                                            {
                                                                color: "white",
                                                                elevation: 4,
                                                                class: j(
                                                                    "rounded-lg pa-2"
                                                                ),
                                                            },
                                                            {
                                                                default: n(
                                                                    () => [
                                                                        l(
                                                                            ve,
                                                                            {
                                                                                headers:
                                                                                    e.headers,
                                                                                items: e.tableItems,
                                                                                "sort-by":
                                                                                    [
                                                                                        {
                                                                                            key: "apellidos",
                                                                                            order: "asc",
                                                                                        },
                                                                                    ],
                                                                            },
                                                                            {
                                                                                top: n(
                                                                                    () => [
                                                                                        l(
                                                                                            fe,
                                                                                            {
                                                                                                flat: "",
                                                                                            },
                                                                                            {
                                                                                                default:
                                                                                                    n(
                                                                                                        () => [
                                                                                                            l(
                                                                                                                h,
                                                                                                                {
                                                                                                                    icon: "mdi-account-multiple-plus",
                                                                                                                    variant:
                                                                                                                        "tonal",
                                                                                                                    class: "ma-2",
                                                                                                                    color: "#009AA4",
                                                                                                                    onClick:
                                                                                                                        i,
                                                                                                                }
                                                                                                            ),
                                                                                                            l(
                                                                                                                pe,
                                                                                                                {
                                                                                                                    modelValue:
                                                                                                                        e.dialog,
                                                                                                                    "onUpdate:modelValue":
                                                                                                                        t[46] ||
                                                                                                                        (t[46] =
                                                                                                                            (
                                                                                                                                o
                                                                                                                            ) =>
                                                                                                                                (e.dialog =
                                                                                                                                    o)),
                                                                                                                    persistent:
                                                                                                                        "",
                                                                                                                },
                                                                                                                {
                                                                                                                    default:
                                                                                                                        n(
                                                                                                                            () => [
                                                                                                                                l(
                                                                                                                                    z,
                                                                                                                                    {
                                                                                                                                        "fast-fail":
                                                                                                                                            "",
                                                                                                                                        onSubmit:
                                                                                                                                            t[45] ||
                                                                                                                                            (t[45] =
                                                                                                                                                Z(() => {}, [
                                                                                                                                                    "prevent",
                                                                                                                                                ])),
                                                                                                                                    },
                                                                                                                                    {
                                                                                                                                        default:
                                                                                                                                            n(
                                                                                                                                                () => [
                                                                                                                                                    l(
                                                                                                                                                        me,
                                                                                                                                                        null,
                                                                                                                                                        {
                                                                                                                                                            default:
                                                                                                                                                                n(
                                                                                                                                                                    () => [
                                                                                                                                                                        l(
                                                                                                                                                                            se,
                                                                                                                                                                            null,
                                                                                                                                                                            {
                                                                                                                                                                                default:
                                                                                                                                                                                    n(
                                                                                                                                                                                        () => [
                                                                                                                                                                                            P(
                                                                                                                                                                                                "div",
                                                                                                                                                                                                Re,
                                                                                                                                                                                                S(
                                                                                                                                                                                                    f.value
                                                                                                                                                                                                ),
                                                                                                                                                                                                1
                                                                                                                                                                                            ),
                                                                                                                                                                                            l(
                                                                                                                                                                                                Y,
                                                                                                                                                                                                {
                                                                                                                                                                                                    thickness:
                                                                                                                                                                                                        "4px",
                                                                                                                                                                                                    color: "#662d91",
                                                                                                                                                                                                }
                                                                                                                                                                                            ),
                                                                                                                                                                                        ]
                                                                                                                                                                                    ),
                                                                                                                                                                                _: 1,
                                                                                                                                                                            }
                                                                                                                                                                        ),
                                                                                                                                                                        l(
                                                                                                                                                                            ue,
                                                                                                                                                                            null,
                                                                                                                                                                            {
                                                                                                                                                                                default:
                                                                                                                                                                                    n(
                                                                                                                                                                                        () => [
                                                                                                                                                                                            t[51] ||
                                                                                                                                                                                                (t[51] =
                                                                                                                                                                                                    P(
                                                                                                                                                                                                        "div",
                                                                                                                                                                                                        {
                                                                                                                                                                                                            class: "text-h6",
                                                                                                                                                                                                        },
                                                                                                                                                                                                        " Datos Personales ",
                                                                                                                                                                                                        -1
                                                                                                                                                                                                    )),
                                                                                                                                                                                            l(
                                                                                                                                                                                                O
                                                                                                                                                                                            ),
                                                                                                                                                                                            l(
                                                                                                                                                                                                T,
                                                                                                                                                                                                null,
                                                                                                                                                                                                {
                                                                                                                                                                                                    default:
                                                                                                                                                                                                        n(
                                                                                                                                                                                                            () => [
                                                                                                                                                                                                                l(
                                                                                                                                                                                                                    r,
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        cols: "6",
                                                                                                                                                                                                                        sm: "4",
                                                                                                                                                                                                                        md: "2",
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        default:
                                                                                                                                                                                                                            n(
                                                                                                                                                                                                                                () => [
                                                                                                                                                                                                                                    l(
                                                                                                                                                                                                                                        b,
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            modelValue:
                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                    .editedItem
                                                                                                                                                                                                                                                    .rut,
                                                                                                                                                                                                                                            "onUpdate:modelValue":
                                                                                                                                                                                                                                                t[11] ||
                                                                                                                                                                                                                                                (t[11] =
                                                                                                                                                                                                                                                    (
                                                                                                                                                                                                                                                        o
                                                                                                                                                                                                                                                    ) =>
                                                                                                                                                                                                                                                        (e.editedItem.rut =
                                                                                                                                                                                                                                                            o)),
                                                                                                                                                                                                                                            label: "RUT (12345678-9)",
                                                                                                                                                                                                                                            type: "text",
                                                                                                                                                                                                                                            required:
                                                                                                                                                                                                                                                "",
                                                                                                                                                                                                                                            clearable:
                                                                                                                                                                                                                                                "",
                                                                                                                                                                                                                                            variant:
                                                                                                                                                                                                                                                "underlined",
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        null,
                                                                                                                                                                                                                                        8,
                                                                                                                                                                                                                                        [
                                                                                                                                                                                                                                            "modelValue",
                                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                        _: 1,
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                l(
                                                                                                                                                                                                                    r,
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        cols: "6",
                                                                                                                                                                                                                        sm: "4",
                                                                                                                                                                                                                        md: "2",
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        default:
                                                                                                                                                                                                                            n(
                                                                                                                                                                                                                                () => [
                                                                                                                                                                                                                                    l(
                                                                                                                                                                                                                                        b,
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            modelValue:
                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                    .editedItem
                                                                                                                                                                                                                                                    .nombre,
                                                                                                                                                                                                                                            "onUpdate:modelValue":
                                                                                                                                                                                                                                                t[12] ||
                                                                                                                                                                                                                                                (t[12] =
                                                                                                                                                                                                                                                    (
                                                                                                                                                                                                                                                        o
                                                                                                                                                                                                                                                    ) =>
                                                                                                                                                                                                                                                        (e.editedItem.nombre =
                                                                                                                                                                                                                                                            o)),
                                                                                                                                                                                                                                            label: "Nombre*",
                                                                                                                                                                                                                                            type: "text",
                                                                                                                                                                                                                                            required:
                                                                                                                                                                                                                                                "",
                                                                                                                                                                                                                                            clearable:
                                                                                                                                                                                                                                                "",
                                                                                                                                                                                                                                            variant:
                                                                                                                                                                                                                                                "underlined",
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        null,
                                                                                                                                                                                                                                        8,
                                                                                                                                                                                                                                        [
                                                                                                                                                                                                                                            "modelValue",
                                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                        _: 1,
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                l(
                                                                                                                                                                                                                    r,
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        cols: "6",
                                                                                                                                                                                                                        sm: "4",
                                                                                                                                                                                                                        md: "2",
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        default:
                                                                                                                                                                                                                            n(
                                                                                                                                                                                                                                () => [
                                                                                                                                                                                                                                    l(
                                                                                                                                                                                                                                        b,
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            modelValue:
                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                    .editedItem
                                                                                                                                                                                                                                                    .apellidos,
                                                                                                                                                                                                                                            "onUpdate:modelValue":
                                                                                                                                                                                                                                                t[13] ||
                                                                                                                                                                                                                                                (t[13] =
                                                                                                                                                                                                                                                    (
                                                                                                                                                                                                                                                        o
                                                                                                                                                                                                                                                    ) =>
                                                                                                                                                                                                                                                        (e.editedItem.apellidos =
                                                                                                                                                                                                                                                            o)),
                                                                                                                                                                                                                                            label: "Apellidos*",
                                                                                                                                                                                                                                            required:
                                                                                                                                                                                                                                                "",
                                                                                                                                                                                                                                            type: "text",
                                                                                                                                                                                                                                            clearable:
                                                                                                                                                                                                                                                "",
                                                                                                                                                                                                                                            variant:
                                                                                                                                                                                                                                                "underlined",
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        null,
                                                                                                                                                                                                                                        8,
                                                                                                                                                                                                                                        [
                                                                                                                                                                                                                                            "modelValue",
                                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                        _: 1,
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                l(
                                                                                                                                                                                                                    r,
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        cols: "6",
                                                                                                                                                                                                                        sm: "4",
                                                                                                                                                                                                                        md: "2",
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        default:
                                                                                                                                                                                                                            n(
                                                                                                                                                                                                                                () => [
                                                                                                                                                                                                                                    l(
                                                                                                                                                                                                                                        k,
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            modelValue:
                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                    .editedItem
                                                                                                                                                                                                                                                    .activo,
                                                                                                                                                                                                                                            "onUpdate:modelValue":
                                                                                                                                                                                                                                                t[14] ||
                                                                                                                                                                                                                                                (t[14] =
                                                                                                                                                                                                                                                    (
                                                                                                                                                                                                                                                        o
                                                                                                                                                                                                                                                    ) =>
                                                                                                                                                                                                                                                        (e.editedItem.activo =
                                                                                                                                                                                                                                                            o)),
                                                                                                                                                                                                                                            "hide-details":
                                                                                                                                                                                                                                                "",
                                                                                                                                                                                                                                            value: e
                                                                                                                                                                                                                                                .editedItem
                                                                                                                                                                                                                                                .activo,
                                                                                                                                                                                                                                            "false-value":
                                                                                                                                                                                                                                                "true",
                                                                                                                                                                                                                                            "true-value":
                                                                                                                                                                                                                                                "false",
                                                                                                                                                                                                                                            class: "ml-2",
                                                                                                                                                                                                                                            color: "green-darken-3",
                                                                                                                                                                                                                                            inset: "",
                                                                                                                                                                                                                                            label: "Activo",
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        null,
                                                                                                                                                                                                                                        8,
                                                                                                                                                                                                                                        [
                                                                                                                                                                                                                                            "modelValue",
                                                                                                                                                                                                                                            "value",
                                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                    l(
                                                                                                                                                                                                                                        k,
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            modelValue:
                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                    .editedItem
                                                                                                                                                                                                                                                    .protocolo_minsal,
                                                                                                                                                                                                                                            "onUpdate:modelValue":
                                                                                                                                                                                                                                                t[15] ||
                                                                                                                                                                                                                                                (t[15] =
                                                                                                                                                                                                                                                    (
                                                                                                                                                                                                                                                        o
                                                                                                                                                                                                                                                    ) =>
                                                                                                                                                                                                                                                        (e.editedItem.protocolo_minsal =
                                                                                                                                                                                                                                                            o)),
                                                                                                                                                                                                                                            "hide-details":
                                                                                                                                                                                                                                                "",
                                                                                                                                                                                                                                            "false-value":
                                                                                                                                                                                                                                                "true",
                                                                                                                                                                                                                                            "true-value":
                                                                                                                                                                                                                                                "false",
                                                                                                                                                                                                                                            class: "ml-2",
                                                                                                                                                                                                                                            color: "green-darken-3",
                                                                                                                                                                                                                                            inset: "",
                                                                                                                                                                                                                                            label: "Protocolo Minsal",
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        null,
                                                                                                                                                                                                                                        8,
                                                                                                                                                                                                                                        [
                                                                                                                                                                                                                                            "modelValue",
                                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                        _: 1,
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                l(
                                                                                                                                                                                                                    r,
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        cols: "6",
                                                                                                                                                                                                                        sm: "4",
                                                                                                                                                                                                                        md: "2",
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        default:
                                                                                                                                                                                                                            n(
                                                                                                                                                                                                                                () => [
                                                                                                                                                                                                                                    l(
                                                                                                                                                                                                                                        k,
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            modelValue:
                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                    .editedItem
                                                                                                                                                                                                                                                    .donante,
                                                                                                                                                                                                                                            "onUpdate:modelValue":
                                                                                                                                                                                                                                                t[16] ||
                                                                                                                                                                                                                                                (t[16] =
                                                                                                                                                                                                                                                    (
                                                                                                                                                                                                                                                        o
                                                                                                                                                                                                                                                    ) =>
                                                                                                                                                                                                                                                        (e.editedItem.donante =
                                                                                                                                                                                                                                                            o)),
                                                                                                                                                                                                                                            class: "ml-2",
                                                                                                                                                                                                                                            label: "Donante",
                                                                                                                                                                                                                                            color: "success",
                                                                                                                                                                                                                                            "hide-details":
                                                                                                                                                                                                                                                "",
                                                                                                                                                                                                                                            inset: "",
                                                                                                                                                                                                                                            clearable:
                                                                                                                                                                                                                                                "",
                                                                                                                                                                                                                                            variant:
                                                                                                                                                                                                                                                "underlined",
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        null,
                                                                                                                                                                                                                                        8,
                                                                                                                                                                                                                                        [
                                                                                                                                                                                                                                            "modelValue",
                                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                        _: 1,
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                l(
                                                                                                                                                                                                                    r,
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        cols: "6",
                                                                                                                                                                                                                        sm: "4",
                                                                                                                                                                                                                        md: "2",
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        default:
                                                                                                                                                                                                                            n(
                                                                                                                                                                                                                                () => [
                                                                                                                                                                                                                                    l(
                                                                                                                                                                                                                                        b,
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            modelValue:
                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                    .editedItem
                                                                                                                                                                                                                                                    .email,
                                                                                                                                                                                                                                            "onUpdate:modelValue":
                                                                                                                                                                                                                                                t[17] ||
                                                                                                                                                                                                                                                (t[17] =
                                                                                                                                                                                                                                                    (
                                                                                                                                                                                                                                                        o
                                                                                                                                                                                                                                                    ) =>
                                                                                                                                                                                                                                                        (e.editedItem.email =
                                                                                                                                                                                                                                                            o)),
                                                                                                                                                                                                                                            required:
                                                                                                                                                                                                                                                "",
                                                                                                                                                                                                                                            clearable:
                                                                                                                                                                                                                                                "",
                                                                                                                                                                                                                                            variant:
                                                                                                                                                                                                                                                "underlined",
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        null,
                                                                                                                                                                                                                                        8,
                                                                                                                                                                                                                                        [
                                                                                                                                                                                                                                            "modelValue",
                                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                        _: 1,
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                l(
                                                                                                                                                                                                                    r,
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        cols: "6",
                                                                                                                                                                                                                        sm: "4",
                                                                                                                                                                                                                        md: "2",
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        default:
                                                                                                                                                                                                                            n(
                                                                                                                                                                                                                                () => [
                                                                                                                                                                                                                                    l(
                                                                                                                                                                                                                                        b,
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            modelValue:
                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                    .editedItem
                                                                                                                                                                                                                                                    .fecha_nacimiento,
                                                                                                                                                                                                                                            "onUpdate:modelValue":
                                                                                                                                                                                                                                                t[18] ||
                                                                                                                                                                                                                                                (t[18] =
                                                                                                                                                                                                                                                    (
                                                                                                                                                                                                                                                        o
                                                                                                                                                                                                                                                    ) =>
                                                                                                                                                                                                                                                        (e.editedItem.fecha_nacimiento =
                                                                                                                                                                                                                                                            o)),
                                                                                                                                                                                                                                            label: "Fecha de nacimiento",
                                                                                                                                                                                                                                            clearable:
                                                                                                                                                                                                                                                "",
                                                                                                                                                                                                                                            variant:
                                                                                                                                                                                                                                                "underlined",
                                                                                                                                                                                                                                            type: "date",
                                                                                                                                                                                                                                            format: g.value,
                                                                                                                                                                                                                                            onInput:
                                                                                                                                                                                                                                                c,
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        null,
                                                                                                                                                                                                                                        8,
                                                                                                                                                                                                                                        [
                                                                                                                                                                                                                                            "modelValue",
                                                                                                                                                                                                                                            "format",
                                                                                                                                                                                                                                            "onInput",
                                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                        _: 1,
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                l(
                                                                                                                                                                                                                    r,
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        cols: "6",
                                                                                                                                                                                                                        sm: "4",
                                                                                                                                                                                                                        md: "2",
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        default:
                                                                                                                                                                                                                            n(
                                                                                                                                                                                                                                () => [
                                                                                                                                                                                                                                    l(
                                                                                                                                                                                                                                        b,
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            modelValue:
                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                    .editedItem
                                                                                                                                                                                                                                                    .edad,
                                                                                                                                                                                                                                            "onUpdate:modelValue":
                                                                                                                                                                                                                                                t[19] ||
                                                                                                                                                                                                                                                (t[19] =
                                                                                                                                                                                                                                                    (
                                                                                                                                                                                                                                                        o
                                                                                                                                                                                                                                                    ) =>
                                                                                                                                                                                                                                                        (e.editedItem.edad =
                                                                                                                                                                                                                                                            o)),
                                                                                                                                                                                                                                            label: "Edad*",
                                                                                                                                                                                                                                            type: "text",
                                                                                                                                                                                                                                            variant:
                                                                                                                                                                                                                                                "underlined",
                                                                                                                                                                                                                                            readonly:
                                                                                                                                                                                                                                                "",
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        null,
                                                                                                                                                                                                                                        8,
                                                                                                                                                                                                                                        [
                                                                                                                                                                                                                                            "modelValue",
                                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                        _: 1,
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                l(
                                                                                                                                                                                                                    r,
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        cols: "6",
                                                                                                                                                                                                                        sm: "4",
                                                                                                                                                                                                                        md: "2",
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        default:
                                                                                                                                                                                                                            n(
                                                                                                                                                                                                                                () => [
                                                                                                                                                                                                                                    l(
                                                                                                                                                                                                                                        b,
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            modelValue:
                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                    .editedItem
                                                                                                                                                                                                                                                    .direccion,
                                                                                                                                                                                                                                            "onUpdate:modelValue":
                                                                                                                                                                                                                                                t[20] ||
                                                                                                                                                                                                                                                (t[20] =
                                                                                                                                                                                                                                                    (
                                                                                                                                                                                                                                                        o
                                                                                                                                                                                                                                                    ) =>
                                                                                                                                                                                                                                                        (e.editedItem.direccion =
                                                                                                                                                                                                                                                            o)),
                                                                                                                                                                                                                                            label: "Dirección",
                                                                                                                                                                                                                                            clearable:
                                                                                                                                                                                                                                                "",
                                                                                                                                                                                                                                            variant:
                                                                                                                                                                                                                                                "underlined",
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        null,
                                                                                                                                                                                                                                        8,
                                                                                                                                                                                                                                        [
                                                                                                                                                                                                                                            "modelValue",
                                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                        _: 1,
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                l(
                                                                                                                                                                                                                    r,
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        cols: "6",
                                                                                                                                                                                                                        sm: "4",
                                                                                                                                                                                                                        md: "2",
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        default:
                                                                                                                                                                                                                            n(
                                                                                                                                                                                                                                () => [
                                                                                                                                                                                                                                    l(
                                                                                                                                                                                                                                        b,
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            label: "teléfono 1",
                                                                                                                                                                                                                                            modelValue:
                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                    .editedItem
                                                                                                                                                                                                                                                    .telefono1,
                                                                                                                                                                                                                                            "onUpdate:modelValue":
                                                                                                                                                                                                                                                t[21] ||
                                                                                                                                                                                                                                                (t[21] =
                                                                                                                                                                                                                                                    (
                                                                                                                                                                                                                                                        o
                                                                                                                                                                                                                                                    ) =>
                                                                                                                                                                                                                                                        (e.editedItem.telefono1 =
                                                                                                                                                                                                                                                            o)),
                                                                                                                                                                                                                                            clearable:
                                                                                                                                                                                                                                                "",
                                                                                                                                                                                                                                            variant:
                                                                                                                                                                                                                                                "underlined",
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        null,
                                                                                                                                                                                                                                        8,
                                                                                                                                                                                                                                        [
                                                                                                                                                                                                                                            "modelValue",
                                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                        _: 1,
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                l(
                                                                                                                                                                                                                    r,
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        cols: "6",
                                                                                                                                                                                                                        sm: "4",
                                                                                                                                                                                                                        md: "2",
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        default:
                                                                                                                                                                                                                            n(
                                                                                                                                                                                                                                () => [
                                                                                                                                                                                                                                    l(
                                                                                                                                                                                                                                        b,
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            modelValue:
                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                    .editedItem
                                                                                                                                                                                                                                                    .telefono2,
                                                                                                                                                                                                                                            "onUpdate:modelValue":
                                                                                                                                                                                                                                                t[22] ||
                                                                                                                                                                                                                                                (t[22] =
                                                                                                                                                                                                                                                    (
                                                                                                                                                                                                                                                        o
                                                                                                                                                                                                                                                    ) =>
                                                                                                                                                                                                                                                        (e.editedItem.telefono2 =
                                                                                                                                                                                                                                                            o)),
                                                                                                                                                                                                                                            label: "teléfono 2",
                                                                                                                                                                                                                                            clearable:
                                                                                                                                                                                                                                                "",
                                                                                                                                                                                                                                            variant:
                                                                                                                                                                                                                                                "underlined",
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        null,
                                                                                                                                                                                                                                        8,
                                                                                                                                                                                                                                        [
                                                                                                                                                                                                                                            "modelValue",
                                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                        _: 1,
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                l(
                                                                                                                                                                                                                    r,
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        cols: "6",
                                                                                                                                                                                                                        sm: "4",
                                                                                                                                                                                                                        md: "2",
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        default:
                                                                                                                                                                                                                            n(
                                                                                                                                                                                                                                () => [
                                                                                                                                                                                                                                    l(
                                                                                                                                                                                                                                        v,
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            items: e
                                                                                                                                                                                                                                                .list
                                                                                                                                                                                                                                                .grupo_sanguineo,
                                                                                                                                                                                                                                            "item-title":
                                                                                                                                                                                                                                                "descripcion",
                                                                                                                                                                                                                                            "item-value":
                                                                                                                                                                                                                                                "id",
                                                                                                                                                                                                                                            modelValue:
                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                    .editedItem
                                                                                                                                                                                                                                                    .grupo_sanguineo,
                                                                                                                                                                                                                                            "onUpdate:modelValue":
                                                                                                                                                                                                                                                t[23] ||
                                                                                                                                                                                                                                                (t[23] =
                                                                                                                                                                                                                                                    (
                                                                                                                                                                                                                                                        o
                                                                                                                                                                                                                                                    ) =>
                                                                                                                                                                                                                                                        (e.editedItem.grupo_sanguineo =
                                                                                                                                                                                                                                                            o)),
                                                                                                                                                                                                                                            label: "Grupo sanguíneo",
                                                                                                                                                                                                                                            clearable:
                                                                                                                                                                                                                                                "",
                                                                                                                                                                                                                                            variant:
                                                                                                                                                                                                                                                "underlined",
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        null,
                                                                                                                                                                                                                                        8,
                                                                                                                                                                                                                                        [
                                                                                                                                                                                                                                            "items",
                                                                                                                                                                                                                                            "modelValue",
                                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                        _: 1,
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                l(
                                                                                                                                                                                                                    r,
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        cols: "6",
                                                                                                                                                                                                                        sm: "4",
                                                                                                                                                                                                                        md: "2",
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        default:
                                                                                                                                                                                                                            n(
                                                                                                                                                                                                                                () => [
                                                                                                                                                                                                                                    l(
                                                                                                                                                                                                                                        v,
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            items: e
                                                                                                                                                                                                                                                .list
                                                                                                                                                                                                                                                .estado_civil,
                                                                                                                                                                                                                                            "item-title":
                                                                                                                                                                                                                                                "descripcion",
                                                                                                                                                                                                                                            "item-value":
                                                                                                                                                                                                                                                "id",
                                                                                                                                                                                                                                            modelValue:
                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                    .editedItem
                                                                                                                                                                                                                                                    .estado_civil,
                                                                                                                                                                                                                                            "onUpdate:modelValue":
                                                                                                                                                                                                                                                t[24] ||
                                                                                                                                                                                                                                                (t[24] =
                                                                                                                                                                                                                                                    (
                                                                                                                                                                                                                                                        o
                                                                                                                                                                                                                                                    ) =>
                                                                                                                                                                                                                                                        (e.editedItem.estado_civil =
                                                                                                                                                                                                                                                            o)),
                                                                                                                                                                                                                                            label: "Estado civil",
                                                                                                                                                                                                                                            clearable:
                                                                                                                                                                                                                                                "",
                                                                                                                                                                                                                                            variant:
                                                                                                                                                                                                                                                "underlined",
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        null,
                                                                                                                                                                                                                                        8,
                                                                                                                                                                                                                                        [
                                                                                                                                                                                                                                            "items",
                                                                                                                                                                                                                                            "modelValue",
                                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                        _: 1,
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                l(
                                                                                                                                                                                                                    r,
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        cols: "6",
                                                                                                                                                                                                                        sm: "4",
                                                                                                                                                                                                                        md: "2",
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        default:
                                                                                                                                                                                                                            n(
                                                                                                                                                                                                                                () => [
                                                                                                                                                                                                                                    l(
                                                                                                                                                                                                                                        v,
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            items: e
                                                                                                                                                                                                                                                .list
                                                                                                                                                                                                                                                .nacionalidad,
                                                                                                                                                                                                                                            "item-title":
                                                                                                                                                                                                                                                "descripcion",
                                                                                                                                                                                                                                            "item-value":
                                                                                                                                                                                                                                                "id",
                                                                                                                                                                                                                                            modelValue:
                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                    .editedItem
                                                                                                                                                                                                                                                    .nacionalidad,
                                                                                                                                                                                                                                            "onUpdate:modelValue":
                                                                                                                                                                                                                                                t[25] ||
                                                                                                                                                                                                                                                (t[25] =
                                                                                                                                                                                                                                                    (
                                                                                                                                                                                                                                                        o
                                                                                                                                                                                                                                                    ) =>
                                                                                                                                                                                                                                                        (e.editedItem.nacionalidad =
                                                                                                                                                                                                                                                            o)),
                                                                                                                                                                                                                                            label: "Nacionalidad",
                                                                                                                                                                                                                                            clearable:
                                                                                                                                                                                                                                                "",
                                                                                                                                                                                                                                            variant:
                                                                                                                                                                                                                                                "underlined",
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        null,
                                                                                                                                                                                                                                        8,
                                                                                                                                                                                                                                        [
                                                                                                                                                                                                                                            "items",
                                                                                                                                                                                                                                            "modelValue",
                                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                        _: 1,
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                l(
                                                                                                                                                                                                                    r,
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        cols: "6",
                                                                                                                                                                                                                        sm: "4",
                                                                                                                                                                                                                        md: "2",
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        default:
                                                                                                                                                                                                                            n(
                                                                                                                                                                                                                                () => [
                                                                                                                                                                                                                                    l(
                                                                                                                                                                                                                                        v,
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            items: e
                                                                                                                                                                                                                                                .list
                                                                                                                                                                                                                                                .religion,
                                                                                                                                                                                                                                            "item-title":
                                                                                                                                                                                                                                                "descripcion",
                                                                                                                                                                                                                                            "item-value":
                                                                                                                                                                                                                                                "id",
                                                                                                                                                                                                                                            label: "Religion / Culto",
                                                                                                                                                                                                                                            modelValue:
                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                    .editedItem
                                                                                                                                                                                                                                                    .religion,
                                                                                                                                                                                                                                            "onUpdate:modelValue":
                                                                                                                                                                                                                                                t[26] ||
                                                                                                                                                                                                                                                (t[26] =
                                                                                                                                                                                                                                                    (
                                                                                                                                                                                                                                                        o
                                                                                                                                                                                                                                                    ) =>
                                                                                                                                                                                                                                                        (e.editedItem.religion =
                                                                                                                                                                                                                                                            o)),
                                                                                                                                                                                                                                            clearable:
                                                                                                                                                                                                                                                "",
                                                                                                                                                                                                                                            variant:
                                                                                                                                                                                                                                                "underlined",
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        null,
                                                                                                                                                                                                                                        8,
                                                                                                                                                                                                                                        [
                                                                                                                                                                                                                                            "items",
                                                                                                                                                                                                                                            "modelValue",
                                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                        _: 1,
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                l(
                                                                                                                                                                                                                    r,
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        cols: "6",
                                                                                                                                                                                                                        sm: "4",
                                                                                                                                                                                                                        md: "2",
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        default:
                                                                                                                                                                                                                            n(
                                                                                                                                                                                                                                () => [
                                                                                                                                                                                                                                    l(
                                                                                                                                                                                                                                        v,
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            items: e
                                                                                                                                                                                                                                                .list
                                                                                                                                                                                                                                                .genero,
                                                                                                                                                                                                                                            "item-title":
                                                                                                                                                                                                                                                "descripcion",
                                                                                                                                                                                                                                            "item-value":
                                                                                                                                                                                                                                                "id",
                                                                                                                                                                                                                                            label: "Género",
                                                                                                                                                                                                                                            modelValue:
                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                    .editedItem
                                                                                                                                                                                                                                                    .genero,
                                                                                                                                                                                                                                            "onUpdate:modelValue":
                                                                                                                                                                                                                                                t[27] ||
                                                                                                                                                                                                                                                (t[27] =
                                                                                                                                                                                                                                                    (
                                                                                                                                                                                                                                                        o
                                                                                                                                                                                                                                                    ) =>
                                                                                                                                                                                                                                                        (e.editedItem.genero =
                                                                                                                                                                                                                                                            o)),
                                                                                                                                                                                                                                            clearable:
                                                                                                                                                                                                                                                "",
                                                                                                                                                                                                                                            variant:
                                                                                                                                                                                                                                                "underlined",
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        null,
                                                                                                                                                                                                                                        8,
                                                                                                                                                                                                                                        [
                                                                                                                                                                                                                                            "items",
                                                                                                                                                                                                                                            "modelValue",
                                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                        _: 1,
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                l(
                                                                                                                                                                                                                    r,
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        cols: "6",
                                                                                                                                                                                                                        sm: "4",
                                                                                                                                                                                                                        md: "2",
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        default:
                                                                                                                                                                                                                            n(
                                                                                                                                                                                                                                () => [
                                                                                                                                                                                                                                    l(
                                                                                                                                                                                                                                        v,
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            items: [
                                                                                                                                                                                                                                                "Institucional (MAI)",
                                                                                                                                                                                                                                                "Libre elección (MLE)",
                                                                                                                                                                                                                                            ],
                                                                                                                                                                                                                                            "item-title":
                                                                                                                                                                                                                                                "descripcion",
                                                                                                                                                                                                                                            "item-value":
                                                                                                                                                                                                                                                "descripcion",
                                                                                                                                                                                                                                            modelValue:
                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                    .editedItem
                                                                                                                                                                                                                                                    .modalidadAtencion,
                                                                                                                                                                                                                                            "onUpdate:modelValue":
                                                                                                                                                                                                                                                t[28] ||
                                                                                                                                                                                                                                                (t[28] =
                                                                                                                                                                                                                                                    (
                                                                                                                                                                                                                                                        o
                                                                                                                                                                                                                                                    ) =>
                                                                                                                                                                                                                                                        (e.editedItem.modalidadAtencion =
                                                                                                                                                                                                                                                            o)),
                                                                                                                                                                                                                                            label: "ModalidadAtencion de atención",
                                                                                                                                                                                                                                            clearable:
                                                                                                                                                                                                                                                "",
                                                                                                                                                                                                                                            variant:
                                                                                                                                                                                                                                                "underlined",
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        null,
                                                                                                                                                                                                                                        8,
                                                                                                                                                                                                                                        [
                                                                                                                                                                                                                                            "modelValue",
                                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                        _: 1,
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                l(
                                                                                                                                                                                                                    r,
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        cols: "6",
                                                                                                                                                                                                                        sm: "4",
                                                                                                                                                                                                                        md: "2",
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        default:
                                                                                                                                                                                                                            n(
                                                                                                                                                                                                                                () => [
                                                                                                                                                                                                                                    l(
                                                                                                                                                                                                                                        b,
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            label: "Ciudad",
                                                                                                                                                                                                                                            modelValue:
                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                    .editedItem
                                                                                                                                                                                                                                                    .ciudad,
                                                                                                                                                                                                                                            "onUpdate:modelValue":
                                                                                                                                                                                                                                                t[29] ||
                                                                                                                                                                                                                                                (t[29] =
                                                                                                                                                                                                                                                    (
                                                                                                                                                                                                                                                        o
                                                                                                                                                                                                                                                    ) =>
                                                                                                                                                                                                                                                        (e.editedItem.ciudad =
                                                                                                                                                                                                                                                            o)),
                                                                                                                                                                                                                                            clearable:
                                                                                                                                                                                                                                                "",
                                                                                                                                                                                                                                            variant:
                                                                                                                                                                                                                                                "underlined",
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        null,
                                                                                                                                                                                                                                        8,
                                                                                                                                                                                                                                        [
                                                                                                                                                                                                                                            "modelValue",
                                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                        _: 1,
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                l(
                                                                                                                                                                                                                    r,
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        cols: "6",
                                                                                                                                                                                                                        sm: "4",
                                                                                                                                                                                                                        md: "2",
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        default:
                                                                                                                                                                                                                            n(
                                                                                                                                                                                                                                () => [
                                                                                                                                                                                                                                    l(
                                                                                                                                                                                                                                        v,
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            items: e
                                                                                                                                                                                                                                                .list
                                                                                                                                                                                                                                                .prevision,
                                                                                                                                                                                                                                            "item-title":
                                                                                                                                                                                                                                                "descripcion",
                                                                                                                                                                                                                                            "item-value":
                                                                                                                                                                                                                                                "id",
                                                                                                                                                                                                                                            modelValue:
                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                    .editedItem
                                                                                                                                                                                                                                                    .prevision,
                                                                                                                                                                                                                                            "onUpdate:modelValue":
                                                                                                                                                                                                                                                t[30] ||
                                                                                                                                                                                                                                                (t[30] =
                                                                                                                                                                                                                                                    (
                                                                                                                                                                                                                                                        o
                                                                                                                                                                                                                                                    ) =>
                                                                                                                                                                                                                                                        (e.editedItem.prevision =
                                                                                                                                                                                                                                                            o)),
                                                                                                                                                                                                                                            label: "Previsión de Salud",
                                                                                                                                                                                                                                            clearable:
                                                                                                                                                                                                                                                "",
                                                                                                                                                                                                                                            variant:
                                                                                                                                                                                                                                                "underlined",
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        null,
                                                                                                                                                                                                                                        8,
                                                                                                                                                                                                                                        [
                                                                                                                                                                                                                                            "items",
                                                                                                                                                                                                                                            "modelValue",
                                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                        _: 1,
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                l(
                                                                                                                                                                                                                    r,
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        cols: "6",
                                                                                                                                                                                                                        sm: "4",
                                                                                                                                                                                                                        md: "2",
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        default:
                                                                                                                                                                                                                            n(
                                                                                                                                                                                                                                () => [
                                                                                                                                                                                                                                    l(
                                                                                                                                                                                                                                        v,
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            items: e
                                                                                                                                                                                                                                                .list
                                                                                                                                                                                                                                                .afp,
                                                                                                                                                                                                                                            "item-title":
                                                                                                                                                                                                                                                "descripcion",
                                                                                                                                                                                                                                            "item-value":
                                                                                                                                                                                                                                                "id",
                                                                                                                                                                                                                                            modelValue:
                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                    .editedItem
                                                                                                                                                                                                                                                    .afp,
                                                                                                                                                                                                                                            "onUpdate:modelValue":
                                                                                                                                                                                                                                                t[31] ||
                                                                                                                                                                                                                                                (t[31] =
                                                                                                                                                                                                                                                    (
                                                                                                                                                                                                                                                        o
                                                                                                                                                                                                                                                    ) =>
                                                                                                                                                                                                                                                        (e.editedItem.afp =
                                                                                                                                                                                                                                                            o)),
                                                                                                                                                                                                                                            label: "AFP",
                                                                                                                                                                                                                                            clearable:
                                                                                                                                                                                                                                                "",
                                                                                                                                                                                                                                            variant:
                                                                                                                                                                                                                                                "underlined",
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        null,
                                                                                                                                                                                                                                        8,
                                                                                                                                                                                                                                        [
                                                                                                                                                                                                                                            "items",
                                                                                                                                                                                                                                            "modelValue",
                                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                        _: 1,
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                l(
                                                                                                                                                                                                                    r,
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        cols: "6",
                                                                                                                                                                                                                        sm: "4",
                                                                                                                                                                                                                        md: "2",
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        default:
                                                                                                                                                                                                                            n(
                                                                                                                                                                                                                                () => [
                                                                                                                                                                                                                                    l(
                                                                                                                                                                                                                                        v,
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            items: e
                                                                                                                                                                                                                                                .list
                                                                                                                                                                                                                                                .ley_social,
                                                                                                                                                                                                                                            "item-title":
                                                                                                                                                                                                                                                "descripcion",
                                                                                                                                                                                                                                            "item-value":
                                                                                                                                                                                                                                                "id",
                                                                                                                                                                                                                                            modelValue:
                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                    .editedItem
                                                                                                                                                                                                                                                    .ley_social,
                                                                                                                                                                                                                                            "onUpdate:modelValue":
                                                                                                                                                                                                                                                t[32] ||
                                                                                                                                                                                                                                                (t[32] =
                                                                                                                                                                                                                                                    (
                                                                                                                                                                                                                                                        o
                                                                                                                                                                                                                                                    ) =>
                                                                                                                                                                                                                                                        (e.editedItem.ley_social =
                                                                                                                                                                                                                                                            o)),
                                                                                                                                                                                                                                            label: "Leyes Sociales",
                                                                                                                                                                                                                                            clearable:
                                                                                                                                                                                                                                                "",
                                                                                                                                                                                                                                            variant:
                                                                                                                                                                                                                                                "underlined",
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        null,
                                                                                                                                                                                                                                        8,
                                                                                                                                                                                                                                        [
                                                                                                                                                                                                                                            "items",
                                                                                                                                                                                                                                            "modelValue",
                                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                        _: 1,
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                l(
                                                                                                                                                                                                                    r,
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        cols: "6",
                                                                                                                                                                                                                        sm: "4",
                                                                                                                                                                                                                        md: "2",
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        default:
                                                                                                                                                                                                                            n(
                                                                                                                                                                                                                                () => [
                                                                                                                                                                                                                                    l(
                                                                                                                                                                                                                                        v,
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            items: e
                                                                                                                                                                                                                                                .list
                                                                                                                                                                                                                                                .seguro,
                                                                                                                                                                                                                                            "item-title":
                                                                                                                                                                                                                                                "descripcion",
                                                                                                                                                                                                                                            "item-value":
                                                                                                                                                                                                                                                "id",
                                                                                                                                                                                                                                            modelValue:
                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                    .editedItem
                                                                                                                                                                                                                                                    .seguro,
                                                                                                                                                                                                                                            "onUpdate:modelValue":
                                                                                                                                                                                                                                                t[33] ||
                                                                                                                                                                                                                                                (t[33] =
                                                                                                                                                                                                                                                    (
                                                                                                                                                                                                                                                        o
                                                                                                                                                                                                                                                    ) =>
                                                                                                                                                                                                                                                        (e.editedItem.seguro =
                                                                                                                                                                                                                                                            o)),
                                                                                                                                                                                                                                            label: "Administradores del Seguro Ley 16.744",
                                                                                                                                                                                                                                            clearable:
                                                                                                                                                                                                                                                "",
                                                                                                                                                                                                                                            variant:
                                                                                                                                                                                                                                                "underlined",
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        null,
                                                                                                                                                                                                                                        8,
                                                                                                                                                                                                                                        [
                                                                                                                                                                                                                                            "items",
                                                                                                                                                                                                                                            "modelValue",
                                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                        _: 1,
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                l(
                                                                                                                                                                                                                    r,
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        cols: "6",
                                                                                                                                                                                                                        sm: "4",
                                                                                                                                                                                                                        md: "2",
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        default:
                                                                                                                                                                                                                            n(
                                                                                                                                                                                                                                () => [
                                                                                                                                                                                                                                    l(
                                                                                                                                                                                                                                        v,
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            items: e
                                                                                                                                                                                                                                                .list
                                                                                                                                                                                                                                                .pueblo_originario,
                                                                                                                                                                                                                                            "item-title":
                                                                                                                                                                                                                                                "descripcion",
                                                                                                                                                                                                                                            "item-value":
                                                                                                                                                                                                                                                "id",
                                                                                                                                                                                                                                            modelValue:
                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                    .editedItem
                                                                                                                                                                                                                                                    .pueblo_originario,
                                                                                                                                                                                                                                            "onUpdate:modelValue":
                                                                                                                                                                                                                                                t[34] ||
                                                                                                                                                                                                                                                (t[34] =
                                                                                                                                                                                                                                                    (
                                                                                                                                                                                                                                                        o
                                                                                                                                                                                                                                                    ) =>
                                                                                                                                                                                                                                                        (e.editedItem.pueblo_originario =
                                                                                                                                                                                                                                                            o)),
                                                                                                                                                                                                                                            label: "Pueblo originario",
                                                                                                                                                                                                                                            clearable:
                                                                                                                                                                                                                                                "",
                                                                                                                                                                                                                                            variant:
                                                                                                                                                                                                                                                "underlined",
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        null,
                                                                                                                                                                                                                                        8,
                                                                                                                                                                                                                                        [
                                                                                                                                                                                                                                            "items",
                                                                                                                                                                                                                                            "modelValue",
                                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                        _: 1,
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                l(
                                                                                                                                                                                                                    r,
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        cols: "6",
                                                                                                                                                                                                                        sm: "4",
                                                                                                                                                                                                                        md: "2",
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        default:
                                                                                                                                                                                                                            n(
                                                                                                                                                                                                                                () => [
                                                                                                                                                                                                                                    l(
                                                                                                                                                                                                                                        v,
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            items: e
                                                                                                                                                                                                                                                .list
                                                                                                                                                                                                                                                .nivel_instruccion,
                                                                                                                                                                                                                                            "item-title":
                                                                                                                                                                                                                                                "descripcion",
                                                                                                                                                                                                                                            "item-value":
                                                                                                                                                                                                                                                "id",
                                                                                                                                                                                                                                            modelValue:
                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                    .editedItem
                                                                                                                                                                                                                                                    .nivel_instruccion,
                                                                                                                                                                                                                                            "onUpdate:modelValue":
                                                                                                                                                                                                                                                t[35] ||
                                                                                                                                                                                                                                                (t[35] =
                                                                                                                                                                                                                                                    (
                                                                                                                                                                                                                                                        o
                                                                                                                                                                                                                                                    ) =>
                                                                                                                                                                                                                                                        (e.editedItem.nivel_instruccion =
                                                                                                                                                                                                                                                            o)),
                                                                                                                                                                                                                                            label: "Nivel de Instrucción",
                                                                                                                                                                                                                                            clearable:
                                                                                                                                                                                                                                                "",
                                                                                                                                                                                                                                            variant:
                                                                                                                                                                                                                                                "underlined",
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        null,
                                                                                                                                                                                                                                        8,
                                                                                                                                                                                                                                        [
                                                                                                                                                                                                                                            "items",
                                                                                                                                                                                                                                            "modelValue",
                                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                        _: 1,
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                ),
                                                                                                                                                                                                            ]
                                                                                                                                                                                                        ),
                                                                                                                                                                                                    _: 1,
                                                                                                                                                                                                }
                                                                                                                                                                                            ),
                                                                                                                                                                                            t[52] ||
                                                                                                                                                                                                (t[52] =
                                                                                                                                                                                                    P(
                                                                                                                                                                                                        "div",
                                                                                                                                                                                                        {
                                                                                                                                                                                                            class: "text-h6",
                                                                                                                                                                                                        },
                                                                                                                                                                                                        " Datos Laborales ",
                                                                                                                                                                                                        -1
                                                                                                                                                                                                    )),
                                                                                                                                                                                            l(
                                                                                                                                                                                                O
                                                                                                                                                                                            ),
                                                                                                                                                                                            l(
                                                                                                                                                                                                T,
                                                                                                                                                                                                {
                                                                                                                                                                                                    class: "mt-2",
                                                                                                                                                                                                },
                                                                                                                                                                                                {
                                                                                                                                                                                                    default:
                                                                                                                                                                                                        n(
                                                                                                                                                                                                            () => [
                                                                                                                                                                                                                l(
                                                                                                                                                                                                                    r,
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        cols: "12",
                                                                                                                                                                                                                        sm: "6",
                                                                                                                                                                                                                        md: "3",
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        default:
                                                                                                                                                                                                                            n(
                                                                                                                                                                                                                                () => [
                                                                                                                                                                                                                                    l(
                                                                                                                                                                                                                                        b,
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            modelValue:
                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                    .editedItem
                                                                                                                                                                                                                                                    .actividad_economica,
                                                                                                                                                                                                                                            "onUpdate:modelValue":
                                                                                                                                                                                                                                                t[36] ||
                                                                                                                                                                                                                                                (t[36] =
                                                                                                                                                                                                                                                    (
                                                                                                                                                                                                                                                        o
                                                                                                                                                                                                                                                    ) =>
                                                                                                                                                                                                                                                        (e.editedItem.actividad_economica =
                                                                                                                                                                                                                                                            o)),
                                                                                                                                                                                                                                            label: "Actividad económica",
                                                                                                                                                                                                                                            clearable:
                                                                                                                                                                                                                                                "",
                                                                                                                                                                                                                                            variant:
                                                                                                                                                                                                                                                "underlined",
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        null,
                                                                                                                                                                                                                                        8,
                                                                                                                                                                                                                                        [
                                                                                                                                                                                                                                            "modelValue",
                                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                        _: 1,
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                l(
                                                                                                                                                                                                                    r,
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        cols: "12",
                                                                                                                                                                                                                        sm: "6",
                                                                                                                                                                                                                        md: "3",
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        default:
                                                                                                                                                                                                                            n(
                                                                                                                                                                                                                                () => [
                                                                                                                                                                                                                                    l(
                                                                                                                                                                                                                                        v,
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            items: e
                                                                                                                                                                                                                                                .list
                                                                                                                                                                                                                                                .empresa,
                                                                                                                                                                                                                                            "item-title":
                                                                                                                                                                                                                                                "descripcion",
                                                                                                                                                                                                                                            "item-value":
                                                                                                                                                                                                                                                "id",
                                                                                                                                                                                                                                            clearable:
                                                                                                                                                                                                                                                "",
                                                                                                                                                                                                                                            modelValue:
                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                    .editedItem
                                                                                                                                                                                                                                                    .empresa,
                                                                                                                                                                                                                                            "onUpdate:modelValue":
                                                                                                                                                                                                                                                t[37] ||
                                                                                                                                                                                                                                                (t[37] =
                                                                                                                                                                                                                                                    (
                                                                                                                                                                                                                                                        o
                                                                                                                                                                                                                                                    ) =>
                                                                                                                                                                                                                                                        (e.editedItem.empresa =
                                                                                                                                                                                                                                                            o)),
                                                                                                                                                                                                                                            label: "Empresa*",
                                                                                                                                                                                                                                            variant:
                                                                                                                                                                                                                                                "underlined",
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        null,
                                                                                                                                                                                                                                        8,
                                                                                                                                                                                                                                        [
                                                                                                                                                                                                                                            "items",
                                                                                                                                                                                                                                            "modelValue",
                                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                        _: 1,
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                l(
                                                                                                                                                                                                                    r,
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        cols: "12",
                                                                                                                                                                                                                        sm: "6",
                                                                                                                                                                                                                        md: "3",
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        default:
                                                                                                                                                                                                                            n(
                                                                                                                                                                                                                                () => [
                                                                                                                                                                                                                                    l(
                                                                                                                                                                                                                                        b,
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            modelValue:
                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                    .editedItem
                                                                                                                                                                                                                                                    .cargo,
                                                                                                                                                                                                                                            "onUpdate:modelValue":
                                                                                                                                                                                                                                                t[38] ||
                                                                                                                                                                                                                                                (t[38] =
                                                                                                                                                                                                                                                    (
                                                                                                                                                                                                                                                        o
                                                                                                                                                                                                                                                    ) =>
                                                                                                                                                                                                                                                        (e.editedItem.cargo =
                                                                                                                                                                                                                                                            o)),
                                                                                                                                                                                                                                            label: "Cargo",
                                                                                                                                                                                                                                            clearable:
                                                                                                                                                                                                                                                "",
                                                                                                                                                                                                                                            variant:
                                                                                                                                                                                                                                                "underlined",
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        null,
                                                                                                                                                                                                                                        8,
                                                                                                                                                                                                                                        [
                                                                                                                                                                                                                                            "modelValue",
                                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                        _: 1,
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                l(
                                                                                                                                                                                                                    r,
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        cols: "12",
                                                                                                                                                                                                                        sm: "6",
                                                                                                                                                                                                                        md: "3",
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        default:
                                                                                                                                                                                                                            n(
                                                                                                                                                                                                                                () => [
                                                                                                                                                                                                                                    l(
                                                                                                                                                                                                                                        v,
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            items: e
                                                                                                                                                                                                                                                .list
                                                                                                                                                                                                                                                .area,
                                                                                                                                                                                                                                            "item-title":
                                                                                                                                                                                                                                                "descripcion",
                                                                                                                                                                                                                                            "item-value":
                                                                                                                                                                                                                                                "id",
                                                                                                                                                                                                                                            clearable:
                                                                                                                                                                                                                                                "",
                                                                                                                                                                                                                                            modelValue:
                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                    .editedItem
                                                                                                                                                                                                                                                    .area,
                                                                                                                                                                                                                                            "onUpdate:modelValue":
                                                                                                                                                                                                                                                t[39] ||
                                                                                                                                                                                                                                                (t[39] =
                                                                                                                                                                                                                                                    (
                                                                                                                                                                                                                                                        o
                                                                                                                                                                                                                                                    ) =>
                                                                                                                                                                                                                                                        (e.editedItem.area =
                                                                                                                                                                                                                                                            o)),
                                                                                                                                                                                                                                            label: "Área",
                                                                                                                                                                                                                                            single: "",
                                                                                                                                                                                                                                            variant:
                                                                                                                                                                                                                                                "underlined",
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        null,
                                                                                                                                                                                                                                        8,
                                                                                                                                                                                                                                        [
                                                                                                                                                                                                                                            "items",
                                                                                                                                                                                                                                            "modelValue",
                                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                        _: 1,
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                l(
                                                                                                                                                                                                                    r,
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        cols: "12",
                                                                                                                                                                                                                        sm: "6",
                                                                                                                                                                                                                        md: "3",
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        default:
                                                                                                                                                                                                                            n(
                                                                                                                                                                                                                                () => [
                                                                                                                                                                                                                                    l(
                                                                                                                                                                                                                                        v,
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            items: e
                                                                                                                                                                                                                                                .list
                                                                                                                                                                                                                                                .unidad,
                                                                                                                                                                                                                                            "item-title":
                                                                                                                                                                                                                                                "descripcion",
                                                                                                                                                                                                                                            "item-value":
                                                                                                                                                                                                                                                "id",
                                                                                                                                                                                                                                            clearable:
                                                                                                                                                                                                                                                "",
                                                                                                                                                                                                                                            modelValue:
                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                    .editedItem
                                                                                                                                                                                                                                                    .unidad,
                                                                                                                                                                                                                                            "onUpdate:modelValue":
                                                                                                                                                                                                                                                t[40] ||
                                                                                                                                                                                                                                                (t[40] =
                                                                                                                                                                                                                                                    (
                                                                                                                                                                                                                                                        o
                                                                                                                                                                                                                                                    ) =>
                                                                                                                                                                                                                                                        (e.editedItem.unidad =
                                                                                                                                                                                                                                                            o)),
                                                                                                                                                                                                                                            label: "Unidad",
                                                                                                                                                                                                                                            variant:
                                                                                                                                                                                                                                                "underlined",
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        null,
                                                                                                                                                                                                                                        8,
                                                                                                                                                                                                                                        [
                                                                                                                                                                                                                                            "items",
                                                                                                                                                                                                                                            "modelValue",
                                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                        _: 1,
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                l(
                                                                                                                                                                                                                    r,
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        cols: "12",
                                                                                                                                                                                                                        sm: "6",
                                                                                                                                                                                                                        md: "3",
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        default:
                                                                                                                                                                                                                            n(
                                                                                                                                                                                                                                () => [
                                                                                                                                                                                                                                    l(
                                                                                                                                                                                                                                        b,
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            modelValue:
                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                    .editedItem
                                                                                                                                                                                                                                                    .ocupacion,
                                                                                                                                                                                                                                            "onUpdate:modelValue":
                                                                                                                                                                                                                                                t[41] ||
                                                                                                                                                                                                                                                (t[41] =
                                                                                                                                                                                                                                                    (
                                                                                                                                                                                                                                                        o
                                                                                                                                                                                                                                                    ) =>
                                                                                                                                                                                                                                                        (e.editedItem.ocupacion =
                                                                                                                                                                                                                                                            o)),
                                                                                                                                                                                                                                            label: "Ocupación",
                                                                                                                                                                                                                                            clearable:
                                                                                                                                                                                                                                                "",
                                                                                                                                                                                                                                            variant:
                                                                                                                                                                                                                                                "underlined",
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        null,
                                                                                                                                                                                                                                        8,
                                                                                                                                                                                                                                        [
                                                                                                                                                                                                                                            "modelValue",
                                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                        _: 1,
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                l(
                                                                                                                                                                                                                    r,
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        cols: "12",
                                                                                                                                                                                                                        sm: "6",
                                                                                                                                                                                                                        md: "3",
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        default:
                                                                                                                                                                                                                            n(
                                                                                                                                                                                                                                () => [
                                                                                                                                                                                                                                    l(
                                                                                                                                                                                                                                        v,
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            items: e
                                                                                                                                                                                                                                                .list
                                                                                                                                                                                                                                                .exposicion,
                                                                                                                                                                                                                                            "item-title":
                                                                                                                                                                                                                                                "descripcion",
                                                                                                                                                                                                                                            "item-value":
                                                                                                                                                                                                                                                "descripcion",
                                                                                                                                                                                                                                            clearable:
                                                                                                                                                                                                                                                "",
                                                                                                                                                                                                                                            chips: "",
                                                                                                                                                                                                                                            modelValue:
                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                    .editedItem
                                                                                                                                                                                                                                                    .exposicion,
                                                                                                                                                                                                                                            "onUpdate:modelValue":
                                                                                                                                                                                                                                                t[42] ||
                                                                                                                                                                                                                                                (t[42] =
                                                                                                                                                                                                                                                    (
                                                                                                                                                                                                                                                        o
                                                                                                                                                                                                                                                    ) =>
                                                                                                                                                                                                                                                        (e.editedItem.exposicion =
                                                                                                                                                                                                                                                            o)),
                                                                                                                                                                                                                                            label: "Exposicion",
                                                                                                                                                                                                                                            multiple:
                                                                                                                                                                                                                                                "",
                                                                                                                                                                                                                                            variant:
                                                                                                                                                                                                                                                "underlined",
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        null,
                                                                                                                                                                                                                                        8,
                                                                                                                                                                                                                                        [
                                                                                                                                                                                                                                            "items",
                                                                                                                                                                                                                                            "modelValue",
                                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                        _: 1,
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                l(
                                                                                                                                                                                                                    r,
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        cols: "12",
                                                                                                                                                                                                                        sm: "6",
                                                                                                                                                                                                                        md: "3",
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        default:
                                                                                                                                                                                                                            n(
                                                                                                                                                                                                                                () => [
                                                                                                                                                                                                                                    l(
                                                                                                                                                                                                                                        v,
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            items: e
                                                                                                                                                                                                                                                .list
                                                                                                                                                                                                                                                .ceco,
                                                                                                                                                                                                                                            "item-title":
                                                                                                                                                                                                                                                "descripcion",
                                                                                                                                                                                                                                            "item-value":
                                                                                                                                                                                                                                                "id",
                                                                                                                                                                                                                                            clearable:
                                                                                                                                                                                                                                                "",
                                                                                                                                                                                                                                            modelValue:
                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                    .editedItem
                                                                                                                                                                                                                                                    .ceco,
                                                                                                                                                                                                                                            "onUpdate:modelValue":
                                                                                                                                                                                                                                                t[43] ||
                                                                                                                                                                                                                                                (t[43] =
                                                                                                                                                                                                                                                    (
                                                                                                                                                                                                                                                        o
                                                                                                                                                                                                                                                    ) =>
                                                                                                                                                                                                                                                        (e.editedItem.ceco =
                                                                                                                                                                                                                                                            o)),
                                                                                                                                                                                                                                            label: "Área de Trabajo (Cencos)",
                                                                                                                                                                                                                                            single: "",
                                                                                                                                                                                                                                            variant:
                                                                                                                                                                                                                                                "underlined",
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        null,
                                                                                                                                                                                                                                        8,
                                                                                                                                                                                                                                        [
                                                                                                                                                                                                                                            "items",
                                                                                                                                                                                                                                            "modelValue",
                                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                        _: 1,
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                l(
                                                                                                                                                                                                                    r,
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        cols: "12",
                                                                                                                                                                                                                        sm: "6",
                                                                                                                                                                                                                        md: "3",
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        default:
                                                                                                                                                                                                                            n(
                                                                                                                                                                                                                                () => [
                                                                                                                                                                                                                                    l(
                                                                                                                                                                                                                                        v,
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            items: e
                                                                                                                                                                                                                                                .list
                                                                                                                                                                                                                                                .planta,
                                                                                                                                                                                                                                            "item-title":
                                                                                                                                                                                                                                                "descripcion",
                                                                                                                                                                                                                                            "item-value":
                                                                                                                                                                                                                                                "id",
                                                                                                                                                                                                                                            clearable:
                                                                                                                                                                                                                                                "",
                                                                                                                                                                                                                                            modelValue:
                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                    .editedItem
                                                                                                                                                                                                                                                    .planta,
                                                                                                                                                                                                                                            "onUpdate:modelValue":
                                                                                                                                                                                                                                                t[44] ||
                                                                                                                                                                                                                                                (t[44] =
                                                                                                                                                                                                                                                    (
                                                                                                                                                                                                                                                        o
                                                                                                                                                                                                                                                    ) =>
                                                                                                                                                                                                                                                        (e.editedItem.planta =
                                                                                                                                                                                                                                                            o)),
                                                                                                                                                                                                                                            label: "Planta",
                                                                                                                                                                                                                                            single: "",
                                                                                                                                                                                                                                            variant:
                                                                                                                                                                                                                                                "underlined",
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        null,
                                                                                                                                                                                                                                        8,
                                                                                                                                                                                                                                        [
                                                                                                                                                                                                                                            "items",
                                                                                                                                                                                                                                            "modelValue",
                                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                        _: 1,
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                ),
                                                                                                                                                                                                            ]
                                                                                                                                                                                                        ),
                                                                                                                                                                                                    _: 1,
                                                                                                                                                                                                }
                                                                                                                                                                                            ),
                                                                                                                                                                                        ]
                                                                                                                                                                                    ),
                                                                                                                                                                                _: 1,
                                                                                                                                                                            }
                                                                                                                                                                        ),
                                                                                                                                                                        l(
                                                                                                                                                                            ce,
                                                                                                                                                                            null,
                                                                                                                                                                            {
                                                                                                                                                                                default:
                                                                                                                                                                                    n(
                                                                                                                                                                                        () => [
                                                                                                                                                                                            l(
                                                                                                                                                                                                O
                                                                                                                                                                                            ),
                                                                                                                                                                                            l(
                                                                                                                                                                                                h,
                                                                                                                                                                                                {
                                                                                                                                                                                                    color: "#009AA4",
                                                                                                                                                                                                    variant:
                                                                                                                                                                                                        "tonal",
                                                                                                                                                                                                    onClick:
                                                                                                                                                                                                        V,
                                                                                                                                                                                                },
                                                                                                                                                                                                {
                                                                                                                                                                                                    default:
                                                                                                                                                                                                        n(
                                                                                                                                                                                                            () =>
                                                                                                                                                                                                                t[53] ||
                                                                                                                                                                                                                (t[53] =
                                                                                                                                                                                                                    [
                                                                                                                                                                                                                        U(
                                                                                                                                                                                                                            " Cancelar "
                                                                                                                                                                                                                        ),
                                                                                                                                                                                                                    ])
                                                                                                                                                                                                        ),
                                                                                                                                                                                                    _: 1,
                                                                                                                                                                                                }
                                                                                                                                                                                            ),
                                                                                                                                                                                            l(
                                                                                                                                                                                                h,
                                                                                                                                                                                                {
                                                                                                                                                                                                    color: "#009AA4",
                                                                                                                                                                                                    variant:
                                                                                                                                                                                                        "tonal",
                                                                                                                                                                                                    onClick:
                                                                                                                                                                                                        d,
                                                                                                                                                                                                },
                                                                                                                                                                                                {
                                                                                                                                                                                                    default:
                                                                                                                                                                                                        n(
                                                                                                                                                                                                            () =>
                                                                                                                                                                                                                t[54] ||
                                                                                                                                                                                                                (t[54] =
                                                                                                                                                                                                                    [
                                                                                                                                                                                                                        U(
                                                                                                                                                                                                                            " Guardar "
                                                                                                                                                                                                                        ),
                                                                                                                                                                                                                    ])
                                                                                                                                                                                                        ),
                                                                                                                                                                                                    _: 1,
                                                                                                                                                                                                }
                                                                                                                                                                                            ),
                                                                                                                                                                                        ]
                                                                                                                                                                                    ),
                                                                                                                                                                                _: 1,
                                                                                                                                                                            }
                                                                                                                                                                        ),
                                                                                                                                                                    ]
                                                                                                                                                                ),
                                                                                                                                                            _: 1,
                                                                                                                                                        }
                                                                                                                                                    ),
                                                                                                                                                ]
                                                                                                                                            ),
                                                                                                                                        _: 1,
                                                                                                                                    }
                                                                                                                                ),
                                                                                                                            ]
                                                                                                                        ),
                                                                                                                    _: 1,
                                                                                                                },
                                                                                                                8,
                                                                                                                [
                                                                                                                    "modelValue",
                                                                                                                ]
                                                                                                            ),
                                                                                                        ]
                                                                                                    ),
                                                                                                _: 1,
                                                                                            }
                                                                                        ),
                                                                                    ]
                                                                                ),
                                                                                "item.actions":
                                                                                    n(
                                                                                        ({
                                                                                            item: o,
                                                                                        }) => [
                                                                                            l(
                                                                                                N,
                                                                                                {
                                                                                                    text: "Atenciones Diarias",
                                                                                                    location:
                                                                                                        "top",
                                                                                                },
                                                                                                {
                                                                                                    activator:
                                                                                                        n(
                                                                                                            ({
                                                                                                                props: E,
                                                                                                            }) => [
                                                                                                                l(
                                                                                                                    h,
                                                                                                                    Q(
                                                                                                                        E,
                                                                                                                        {
                                                                                                                            density:
                                                                                                                                "compact",
                                                                                                                            color: "#009AA4",
                                                                                                                            class: "mr-2 ml-2",
                                                                                                                            icon: "mdi-medical-bag",
                                                                                                                            variant:
                                                                                                                                "tonal",
                                                                                                                            onClick:
                                                                                                                                (
                                                                                                                                    q
                                                                                                                                ) =>
                                                                                                                                    I(
                                                                                                                                        o
                                                                                                                                    ),
                                                                                                                        }
                                                                                                                    ),
                                                                                                                    null,
                                                                                                                    16,
                                                                                                                    [
                                                                                                                        "onClick",
                                                                                                                    ]
                                                                                                                ),
                                                                                                            ]
                                                                                                        ),
                                                                                                    _: 2,
                                                                                                },
                                                                                                1024
                                                                                            ),
                                                                                            l(
                                                                                                N,
                                                                                                {
                                                                                                    text: "Ficha Médica",
                                                                                                    location:
                                                                                                        "top",
                                                                                                },
                                                                                                {
                                                                                                    activator:
                                                                                                        n(
                                                                                                            ({
                                                                                                                props: E,
                                                                                                            }) => [
                                                                                                                l(
                                                                                                                    h,
                                                                                                                    Q(
                                                                                                                        E,
                                                                                                                        {
                                                                                                                            density:
                                                                                                                                "compact",
                                                                                                                            color: "#009AA4",
                                                                                                                            class: "mr-2 ml-2",
                                                                                                                            variant:
                                                                                                                                "tonal",
                                                                                                                            icon: "mdi-stethoscope",
                                                                                                                            onClick:
                                                                                                                                (
                                                                                                                                    q
                                                                                                                                ) =>
                                                                                                                                    _(
                                                                                                                                        o
                                                                                                                                    ),
                                                                                                                        }
                                                                                                                    ),
                                                                                                                    null,
                                                                                                                    16,
                                                                                                                    [
                                                                                                                        "onClick",
                                                                                                                    ]
                                                                                                                ),
                                                                                                            ]
                                                                                                        ),
                                                                                                    _: 2,
                                                                                                },
                                                                                                1024
                                                                                            ),
                                                                                            l(
                                                                                                N,
                                                                                                {
                                                                                                    text: "Editar Datos Personales y Laborales",
                                                                                                    location:
                                                                                                        "top",
                                                                                                },
                                                                                                {
                                                                                                    activator:
                                                                                                        n(
                                                                                                            ({
                                                                                                                props: E,
                                                                                                            }) => [
                                                                                                                l(
                                                                                                                    h,
                                                                                                                    Q(
                                                                                                                        E,
                                                                                                                        {
                                                                                                                            density:
                                                                                                                                "compact",
                                                                                                                            class: "mr-2 ml-2",
                                                                                                                            color: "#009AA4",
                                                                                                                            variant:
                                                                                                                                "tonal",
                                                                                                                            icon: "mdi-account-edit-outline",
                                                                                                                            onClick:
                                                                                                                                (
                                                                                                                                    q
                                                                                                                                ) =>
                                                                                                                                    C(
                                                                                                                                        o
                                                                                                                                    ),
                                                                                                                        }
                                                                                                                    ),
                                                                                                                    null,
                                                                                                                    16,
                                                                                                                    [
                                                                                                                        "onClick",
                                                                                                                    ]
                                                                                                                ),
                                                                                                            ]
                                                                                                        ),
                                                                                                    _: 2,
                                                                                                },
                                                                                                1024
                                                                                            ),
                                                                                            l(
                                                                                                N,
                                                                                                {
                                                                                                    text: "Eliminar",
                                                                                                    location:
                                                                                                        "top",
                                                                                                },
                                                                                                {
                                                                                                    activator:
                                                                                                        n(
                                                                                                            ({
                                                                                                                props: E,
                                                                                                            }) => [
                                                                                                                l(
                                                                                                                    h,
                                                                                                                    Q(
                                                                                                                        E,
                                                                                                                        {
                                                                                                                            density:
                                                                                                                                "compact",
                                                                                                                            class: "mr-2 ml-2",
                                                                                                                            color: "#009AA4",
                                                                                                                            variant:
                                                                                                                                "tonal",
                                                                                                                            icon: "mdi-delete-outline",
                                                                                                                            onClick:
                                                                                                                                (
                                                                                                                                    q
                                                                                                                                ) =>
                                                                                                                                    y(
                                                                                                                                        o
                                                                                                                                    ),
                                                                                                                        }
                                                                                                                    ),
                                                                                                                    null,
                                                                                                                    16,
                                                                                                                    [
                                                                                                                        "onClick",
                                                                                                                    ]
                                                                                                                ),
                                                                                                            ]
                                                                                                        ),
                                                                                                    _: 2,
                                                                                                },
                                                                                                1024
                                                                                            ),
                                                                                        ]
                                                                                    ),
                                                                                _: 1,
                                                                            },
                                                                            8,
                                                                            [
                                                                                "headers",
                                                                                "items",
                                                                            ]
                                                                        ),
                                                                    ]
                                                                ),
                                                                _: 1,
                                                            }
                                                        ),
                                                    ]),
                                                    _: 1,
                                                }
                                            ),
                                        ]),
                                        _: 1,
                                    }
                                ),
                                l(
                                    Le,
                                    {
                                        modelValue: e.dialogActivationAccount,
                                        "onUpdate:modelValue":
                                            t[47] ||
                                            (t[47] = (o) =>
                                                (e.dialogActivationAccount =
                                                    o)),
                                        question:
                                            "¿Está seguro que desea eliminar este paciente?",
                                        description:
                                            "Esta acción no se puede deshacer y eliminará permanentemente el registro del paciente.",
                                        onConfirm: D,
                                        onCancel: x,
                                    },
                                    null,
                                    8,
                                    ["modelValue"]
                                ),
                            ],
                            64
                        )
                    );
                };
            },
        }
    ),
    Xe = ne(Ge, [
        ["__file", "/home/omar/www/esalud/resources/js/Pages/PacientePage.vue"],
    ]);
export { Xe as default };
//# sourceMappingURL=PacientePage-X2bQjBNN.js.map
