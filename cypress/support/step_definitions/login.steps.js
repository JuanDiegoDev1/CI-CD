import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../e2e/pages/loginpage';

const loginPage = new LoginPage();

Given('que el usuario visita la página de login', () => {
  loginPage.visit();
});

When('ingresa el usuario {string} y contraseña {string}', (username, password) => {
  loginPage.fillUsername(username);
  loginPage.fillPassword(password);
});

When('hace clic en el botón de login', () => {
  loginPage.clickLogin();
});

Then('debería ver error', () => {
  cy.get('[data-test="error"]').should('be.visible');
  cy.get('[data-test="error"]').should('contain.text', 'Username and password do not match');
});
