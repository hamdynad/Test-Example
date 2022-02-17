Feature: Homepage Tests

Scenario: Test Homepage Loads
Given I navigate to the JupiterOne url
Then I should be on the home page
And I should see content on the page
And I should be able to scroll to the bottom of the page

Scenario: Test Homepage Top Level Navigation
Given I navigate to the JupiterOne url
Then I should be on the home page
Then I hover over the first navigation item
And I should be able to click the first navigation item 
And I should be able to click the second navigation item
And I should be able to click the third navigation item
