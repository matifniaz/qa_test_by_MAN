import { defineConfig } from "cypress";

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  viewportWidth: 1280,
  viewportHeight: 720,
  defaultCommandTimeout: 27000,
  requestTimeout: 27000,
  chromeWebSecurity: false,
  video: false,
  reporterOptions: {
    charts: true, //Display Suite charts
    reportPageTitle: 'Cypress Automation Report',//Browser title
    reportTitle:'Cypress Automation Report',//Report title
    embeddedScreenshots: true, //snapshots in HTML report embedded.
    inlineAssets: true,
    saveAllAttempts: false, //ave screenshots of all test attempts, set to false to save only the last attempt
    code:false, //Display test code
    showHooks:true, //show Hook on report
    autoOpen:true, //Automatically open the report
    overwrite:true //Overwrite existing report files. 
  },
  env: {
    apiUrl: 'https://picsum.photos',
  },
  e2e: {
    testIsolation: false, // Form Cypress 12.
    experimentalOriginDependencies: true,

    watchForFileChanges: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    //defaultCommandTimeout: 25000,
    //requestTimeout:25000,
    baseUrl: 'http://localhost:4200/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
