class AuthPage {
  login(email, password) {
    cy.visit('https://automationexercise.com/login');
    cy.get('input[data-qa="login-email"]').type(email);
    cy.get('input[data-qa="login-password"]').type(password);
    cy.get('button[data-qa="login-button"]').click();
  }

  logout() {
    cy.contains('Logout').click();
  }

  verifyLoggedIn() {
    cy.contains('Logged in as').should('be.visible');
  }

  verifyLoggedOut() {
    cy.contains('Login').should('be.visible');
  }
}

export default AuthPage;
