import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nrwl/cypress/plugins/cypress-preset';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

export default defineConfig({
  env: {
    login_url: '/login',
    api:"https://platform.dev.fg.whitehatgaming.com",
    apistage:"https://platform.stage.fg.whitehatgaming.com",
    username:"admin_whg",
    password:"gx2FJF1V2PzyPqAp",
    products_url: '/products',
    environment:'dev'
  },
  e2e: {
    ...nxE2EPreset(__dirname),
    baseUrl: 'https://nx.dev/',
    specPattern: './src/integration/*.feature',
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});
