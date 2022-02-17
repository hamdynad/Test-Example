class Homepage {
  getPageTitle() {
    return cy.get('h1').contains('Cyber Asset Context Is Security.');
  }

  getScrollToBottom() {
    return cy.scrollTo('bottom');
  }

  getTopFirstNavigation() {
    return cy.contains('Platform').trigger('mouseover');
  }

  getTopSecondNavigation() {
    return cy.get('.l-nav__menu-item').contains('Solutions').trigger('mouseover');
  }

  getTopThirdNavigation() {
    return cy.get('.l-nav__menu-item').contains('Use Cases').trigger('mouseover');
  }
}
export default Homepage;
