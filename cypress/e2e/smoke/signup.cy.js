import SignupPage from '../../support/page_objects/SignupPage';
import { testUser, getUniqueTestUser, getMismatchedUser } from '../../support/testData';

describe('Signup Flow @signup', () => {
  it('Register with full valid input [Positive] @smoke', () => {
    const user = getUniqueTestUser();

    SignupPage.visit();
    SignupPage.fillForm(user.email, user.password, user.fullName, user.password);
    SignupPage.submit();

    cy.contains('Click here to Log In').should('be.visible').click();
    cy.url().should('include', '/login');
  });

  it('Register with existing email [Negative] @regression', () => {
    SignupPage.visit();
    SignupPage.fillForm(testUser.email, testUser.password, testUser.fullName, testUser.password);
    SignupPage.submit();

    cy.contains('An account already exists with the same email address').should('be.visible');
  });

  it('Register with mismatched passwords [Negative] @regression', () => {
    const mismatchUser = getMismatchedUser();

    SignupPage.visit();
    SignupPage.fillForm(
      mismatchUser.email,
      mismatchUser.password,
      mismatchUser.fullName,
      mismatchUser.confirmPassword
    );
    SignupPage.submit();

    cy.contains("Passwords don't match!").should('be.visible');
  });

  it('Register with blank fields [Negative] @regression', () => {
    SignupPage.visit();
    SignupPage.submit();

    cy.contains('User name is required').should('be.visible');
    cy.contains('Email address is required').should('be.visible');
    cy.contains('Password is required').should('be.visible');
    cy.contains('Confirm Password is required').should('be.visible');
  });
});
