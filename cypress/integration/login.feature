Feature: Login to JupiterOne App

Scenario: Test Login Flow 
Given I navigate to the login page
Then I am taken to the login page for JupiterOne 
And I can enter in a username
And I can enter in a password
And I can click sign in
Then I am signed into the app
