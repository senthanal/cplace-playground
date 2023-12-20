import { getGreeting } from '../support/app.po';
import { getAxeOptions, terminalLog } from './utils';

describe('a11y-e2e', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.injectAxe();
  });

  afterEach(() => {
    cy.checkA11y(undefined, getAxeOptions(), terminalLog, true);
  });

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains(/Welcome/);
  });
});
