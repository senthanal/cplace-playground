import { getSubTitle } from '../support/app.po';
import { getAxeOptions, terminalLog } from './utils';

describe('a11y-e2e', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.injectAxe();
  });

  afterEach(() => {
    cy.checkA11y("h2", getAxeOptions(), terminalLog, true);
  });

  it('should display welcome message', () => {
    // Function helper example, see `../support/app.po.ts` file
    getSubTitle().contains(/Learning/);
  });
});
