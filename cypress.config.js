import { defineConfig } from "cypress";

export default defineConfig({
    projectId: "jkgyof",
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },

    component: {
        devServer: {
            framework: "vue-cli",
            bundler: "vite",
        },
    },
});
const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        // e2e options here
        setupNodeEvents(on, config) {
    },
        component: {
            devServer: {
                framework: "vue-cli",
                bundler: "vite",
            },
        },
})