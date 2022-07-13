const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1440,
    viewportHeight: 1000,
    pageLoadTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
