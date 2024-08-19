const { defineConfig } = require('cypress');
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more.
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  // Mochawesome reporter plugin
  require('cypress-mochawesome-reporter/plugin')(on);

  // Use the browserify preprocessor for handling .feature files.
  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  defaultCommandTimeout: 6000, // applied to all test cases

  reporter: 'cypress-mochawesome-reporter',
  env: {
    url: "https://rahulshettyacademy.com/angularpractice/"
  },
  retries: {
    runMode: 1,
  },
  projectId: "4bbbi7",
  e2e: {
    specPattern: 'cypress/integration/**/**/*.feature', // Adjust this pattern to match your test file location
    setupNodeEvents, // Link the setupNodeEvents function to the config
  },
});
