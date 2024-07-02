const { defineConfig } = require("cypress");
const createBuilders = require('@bahmutov/cypress-esbuild-preprocessor')
const addCucumberPreprocessor = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const build = createBuilders({
        plugins: [createEsbuildPlugin(config)]
      })
      on('file:preprocessor', build)
      addCucumberPreprocessor(on, config)
      return config;
    },
    specPattern: "**/*.feature",
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      html: true,
      json: true,
      overwrite: false,
      quite: false
    }
  },
});
