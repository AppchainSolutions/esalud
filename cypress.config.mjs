import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            try {
                if (!on || !config) {
                    throw new Error("Invalid arguments passed to setupNodeEvents");
                }
                // Add more event handlers and logic here
            } catch (error) {
                console.error("Error in setupNodeEvents:", error);
            }
        },
    },
});
