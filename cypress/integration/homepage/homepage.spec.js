import { When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import Homepage from './Homepage.po';

const homepage = new Homepage();

And('I should see content on the page', () => {
  homepage.getPageTitle().should('be.visible');
});

And('I should be able to scroll to the bottom of the page', () => {
  homepage.getScrollToBottom();
});

When('I hover over the first navigation item', () => {
  homepage.getTopFirstNavigation();
});

And('I should be able to click the first navigation item', () => {
  homepage.getTopFirstNavigation().click();
});

And('I should be able to click the second navigation item', () => {
  homepage.getTopSecondNavigation().click();
});

And('I should be able to click the third navigation item', () => {
  homepage.getTopThirdNavigation().click();
});
