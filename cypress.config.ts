import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    viewportHeight: 1024,
    viewportWidth: 768,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
      require("@cypress/code-coverage/task")(on, config);

      return config;
    }
  }
});
