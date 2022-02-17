import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

const url = Cypress.env('url');

Given('I navigate to the JupiterOne url', () => {
  cy.visit(url);
  cy.clearCookies();
  cy.clearLocalStorage();
});

Then('I should be on the home page', () => {
  cy.url().should('eq', 'https://jupiterone.com/');
});
