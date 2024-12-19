import { createLogger } from "vue-logger-plugin";

// Logger configuration options
const logger = createLogger({
    enabled: true,
    level: "debug",
    showConsoleColors: true,
});
export default logger;
