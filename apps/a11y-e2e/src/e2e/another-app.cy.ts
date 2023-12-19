import { getSubTitle } from '../support/app.po';

describe('a11y-e2e', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.injectAxe();
  });

  afterEach(() => {
    cy.checkA11y();
  });

  it('should display welcome message', () => {
    // Function helper example, see `../support/app.po.ts` file
    getSubTitle().contains(/Learning/);
  });
});
