import {Given, Then, DataTable} from '@badeball/cypress-cucumber-preprocessor';
import {checkPageTitle} from '@e2e-poc/common-logic';

beforeEach(() => {
  cy.viewport(1600, 720);
});

Given(/^I navigate to the Website$/, () => {
  cy.visit('https://nx.dev/');

});

Then(/^Validate the menus in home page$/, (datatable: DataTable) => {
  datatable.hashes().forEach((element) => {
    cy.contains(element['menu_name'])
  });
});

Then(/^Validate the title after login$/, (datatable: DataTable) => {
  datatable.hashes().forEach(({ title }) => {
    // cy.title().should('eq', title)
    checkPageTitle(title);
  });
});
