const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  viewportHeight: 1000,
  viewportWidth: 1920,
  video: false,
  retries: 1,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json'
  },
  e2e: {
    baseUrl: 'http://localhost:4200',
    specPattern: 'cypress/e2e/**/*.spec.js',
    setupNodeEvents(on, config) {
      // e2e testing node events setup code
    },
  },
})