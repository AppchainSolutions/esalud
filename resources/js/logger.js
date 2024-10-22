// src/logger.js
import Vue from "vue";
import VueLogger from "@/vue-logger";

const options = {
    isEnabled: true,
    logLevel: "debug", // Puede ser 'debug', 'info', 'warn', 'error', 'fatal'
    stringifyArguments: false,
    showLogLevel: true,
    showMethodName: true,
    separator: "|",
    showConsoleColors: true,
};

Vue.use(VueLogger, options);
