class Login {
  getLoginButton() {
    return cy.get('.a-link.a-link--no-arrow');
  }

  getUserName() {
    return cy.get('[type="username"]');
  }

  getPassword() {
    return cy.get('[type="password"]');
  }

  getSignInButton() {
    return cy.get('[type="submit"]');
  }
}
export default Login;
