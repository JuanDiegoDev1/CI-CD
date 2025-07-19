class LoginPage {
  visit() {
    cy.visit('https://www.saucedemo.com/v1/index.html');
  }

  fillUsername(username) {
    cy.get('#user-name').clear().type(username);
  }

  fillPassword(password) {
    cy.get('#password').clear().type(password);
  }

  clickLogin() {
    cy.get('#login-button').click();
  }
}

export default LoginPage;
