class HomePage {
  enterURL() {
    cy.visit('https://qaautomationlabs.com/');
  }

  // validateMenus(menus) {
  //   cy.contains(menus);
  //   return this;
  // }
  //
  // verifyPageTitle() {
  //   return cy.title().should('eq', 'About Us — QAAutomationLabs');
  // }
}

export const homePage = new HomePage();
