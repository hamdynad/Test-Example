import { When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import Login from './Login.po';

const login = new Login();

Given('I navigate to the login page', () => {
  cy.visit('https://login.us.jupiterone.io/');
  cy.clearCookies();
});

Then('I am taken to the login page for JupiterOne', () => {
  cy.url().should('contains', 'https://login.us.jupiterone.io/');
});

And('I can enter in a username', () => {
  login.getUserName().type('nadia.sh.hamdy@gmail.com');
});

And('I can enter in a password', () => {
  login.getPassword().type('$Test123');
});

And('I can click sign in', () => {
  login.getSignInButton().click();
});

Then('I am signed into the app', () => {
  cy.url().should('contains', 'https://apps.us.jupiterone.io/search');
});
