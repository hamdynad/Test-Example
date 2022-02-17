import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import Homepage from './Homepage.po';

const url = Cypress.env('url');
const homepage = new Homepage();

Given('I navigate to the JupiterOne url', () => {
  cy.visit(url);
});

Then('I should be on the home page', () => {
  cy.url().should('eq', 'https://jupiterone.com/');
});

And('I should see content on the page', () => {});

And('I should be able to scroll to the bottom of the page', () => {});

When('I hover over the first navigation item', () => {});

Then('I should see child level navigation items listed ', () => {});

And('I should be able to click the first navigation item ', () => {});

And('I can click the back arrow', () => {});

And('I should be able to click the second navigation item', () => {});

And('I should be able to click the third navigation item', () => {});

When('I click login at the top of the page', () => {});

Then('I am taken to the login page for JupiterOne ', () => {});

And('I can enter in a username', () => {});

And('I can enter in a password', () => {});

And('I can click sign in', () => {});

When('I click the get started button at the top of the page', () => {});

Then('I am taken to the get started page for JupiterOne', () => {});

And('I select the input field to start a new account', () => {});

And('I enter in a first name', () => {});

And('I enter in a last name', () => {});

And('I enter a company name', () => {});

And('I enter an email address ', () => {});

And('I select other from the job title drop down menu', () => {});

And('I click the sign up button for the form', () => {});

Given('I scroll to the bottom of the homepage on JupiterOne', () => {});

Then(
  'I should be able to see that the footer is visible at the bottom of the page',
  () => {}
);

And('the social icons exists within the footer', () => {});

And('the terms link is clickable', () => {});

And('the privacy policy link is clickable', () => {});

When('I should see the icon for the chatbot is visible ', () => {});

Then('I should be able to click the icon', () => {});

And('the chatbot window opens', () => {});

And('I can click on continue the discussion option', () => {});

And('I can then write a reply in the chatbot text box', () => {});
