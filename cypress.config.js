{
  "component": {
    "specPattern": "tests/E2E/**/*.cy.{js,jsx,ts,tsx}",
    "supportFile": "tests/E2E/support/component.js"
  },
  "e2e": {
    "setupNodeEvents": (on, config) => {},
    "supportFile": "tests/E2E/support/e2e.js",
    "specPattern": "tests/E2E/flows/**/*.cy.{js,jsx,ts,tsx}"
  }
}
