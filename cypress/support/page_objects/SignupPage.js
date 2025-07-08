class SignupPage {
    visit() {
      cy.visit('/register');
    }
  
    fillForm(email, password, fullName, confirmPassword = password) {
      cy.get('input[name="email"]').clear().type(email);
      cy.get('input[name="password"]').clear().type(password);
      cy.get('input[name="name"]').clear().type(fullName);
      cy.get('input[name="confirmPassword"]').clear().type(confirmPassword);
    }
  
    submit() {
      cy.get('button').contains('Register').click();
    }
  }
  
  export default new SignupPage();
  