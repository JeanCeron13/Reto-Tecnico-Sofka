const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  ScreenshotOnRunFailure:true,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'prueba',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    embeddedScreenshots:true
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

    },
    
    watchForFileChanges: false,
    defaultCommandTimeout: 10000,
    "baseUrl":"https://www.demoblaze.com/"
  },
 
      
  

});
