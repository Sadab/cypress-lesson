const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://172.24.144.1:3001',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
