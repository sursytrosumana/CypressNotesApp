import LoginPage from '../../support/page_objects/LoginPage';
import { loginTestData } from '../../support/testData';

describe('Login Page Tests @login', () => {
  it('Login with valid credentials [Positive] @smoke', () => {
    const user = loginTestData.valid;
    LoginPage.login(user.email, user.password);
    cy.contains('My Notes').should('be.visible');
  });

  it('Login with incorrect password [Negative] @regression', () => {
    const user = loginTestData.invalidPassword;
    LoginPage.login(user.email, user.password);
    cy.contains('Incorrect email address or password').should('be.visible');
  });

  it('Login with non-existent email [Negative] @regression', () => {
    const user = loginTestData.invalidEmail;
    LoginPage.login(user.email, user.password);
    cy.contains('Incorrect email address or password').should('be.visible');
  });

  it('Login with blank input [Negative] @regression', () => {
    const user = loginTestData.blank;
    LoginPage.visit();
    LoginPage.fillEmail(user.email);
    LoginPage.fillPassword(user.password);
    LoginPage.submit();

    cy.contains('Email address is required').should('be.visible');
    cy.contains('Password is required').should('be.visible');
  });
});
