class ProfilePage {
    visit() {
      cy.visit('/profile');
    }
  
    updateName(newName) {
      cy.get('input[name="name"]')
        .should('be.visible')
        .clear()
        .type(newName);
  
      cy.contains('Update profile').click();
  
      cy.contains('Profile updated successful', { timeout: 5000 }).should('be.visible');
    }
}
  
//     deleteAccount() {
//       cy.contains('Delete Account').click();
//       cy.contains('Do you really want to delete your account?').should('be.visible');
  
//       // Use force: true since button center is obscured
//       cy.get('button')
//         .contains('Delete')
//         .should('exist')
//         .click({ force: true });
  
//       // Confirm redirection
//       cy.contains('login').should('be.visible');
//     }
//   }
  
  export default new ProfilePage();
  