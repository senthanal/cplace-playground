import axe from 'axe-core';

export function getAxeOptions(): axe.RunOptions {
  return {
    rules: {
      'color-contrast': { enabled: true },
      label: { enabled: true },
    },
    runOnly: {
      type: 'tag',
      values: ['wcag2a', 'wcag2aa'],
    },
  };
}

// Define at the top of the spec file or just import it
export function terminalLog(violations: axe.Result[]) {
  cy.task(
    'log',
    `${violations.length} accessibility violation${
      violations.length === 1 ? '' : 's'
    } ${violations.length === 1 ? 'was' : 'were'} detected`
  );
  // pluck specific keys to keep the table readable
  const violationData = violations.map(
    ({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      nodes: nodes.length,
    })
  );

  cy.task('table', violationData);
}
