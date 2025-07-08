const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'y2v7m7',

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://practice.expandtesting.com/notes/app',
    supportFile: 'cypress/support/e2e.js',
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/html',
    charts: true,
    reportPageTitle: 'Automation Notes Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    overwrite: false,
  },
});
