// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    login(): void;
  }
}

Cypress.Commands.add('login', () => {
  cy.viewport(1920, 1080);
  cy.setCookie("language", "en");
  cy.visit({
    url: "/",
    auth: {
      username: Cypress.env("username"),
      password: Cypress.env("password"),
    },
  });
});
