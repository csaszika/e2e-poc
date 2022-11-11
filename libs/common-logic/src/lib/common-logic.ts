export const checkPageTitle = (title: string) => {
  cy.title().should('eq', title);
}
