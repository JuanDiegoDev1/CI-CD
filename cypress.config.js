const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").default;

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",

    baseUrl: 'https://www.saucedemo.com/v1',
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config, {
        stepDefinitions: "cypress/support/step_definitions", // 👈 Ruta correcta
      });

      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));

      return config;
    },
  },
});
