import 'dotenv/config'

import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: process.env.CYPRESS_PROJECT_ID,
  e2e: {
    baseUrl: 'https://www.w3.org/',
    specPattern: '**/*.feature',
    supportFile: 'cypress/support/e2e.ts',
    setupNodeEvents: require('./cypress/plugins/index.ts')
  }
})
