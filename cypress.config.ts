import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    viewportHeight: 1024,
    viewportWidth: 768,
    reporter: "junit",
    reporterOptions: {
      mochaFile: "results/e2e/e2e-test-junit-[hash].xml",
    },
    screenshotsFolder: "results/e2e/screenshots",
    videosFolder: "results/e2e/videos",

    setupNodeEvents(on, config) {
     
      require("@cypress/code-coverage/task")(on, config);

      on("task", {
        log(message) {
        
          console.log(message);

          return null;
        },
        table(message) {
          
          console.table(message);

          return null;
        },
      });

      return config;
    },
  },
});
