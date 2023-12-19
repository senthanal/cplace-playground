import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, { cypressDir: 'src' }),
    setupNodeEvents(on) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  reporter: './../../node_modules/cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: './../../cypress/a11y',
    screenshotsFolder: './../../cypress/a11y/images',
    charts: true,
    overwrite: true,
    saveJson: true,
    reportPageTitle: 'A11Y Results',
    embeddedScreenshots: false,
    ignoreVideos: true,
    videoOnFailOnly: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
});
