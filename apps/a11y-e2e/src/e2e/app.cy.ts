import { getGreeting } from '../support/app.po';

describe('a11y-e2e', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.injectAxe();
  });

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains(/Welcome/);
    cy.checkA11y("h1", {
      runOnly: {
        type: "tag",
        values: ["wcag2a", "wcag2aa"],
      },
    });
  });
});
