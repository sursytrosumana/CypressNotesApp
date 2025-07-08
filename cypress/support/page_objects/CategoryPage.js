class CategoryPage {
    visit() {
      cy.visit('/');
      cy.url().should('include', '/notes/app');
      cy.contains('MyNotes').should('be.visible');
    }
  
    openCategory(name) {
      cy.contains('button', name).click();
    }
  
    getNotes() {
      return cy.get('[data-testid="note-card"]');
    }
  
    openAddNoteModal() {
      cy.contains('+ Add Note').click();
      cy.contains('Add new note').should('be.visible');
    }
  
    createNote({ title, description, category = 'Home', completed = false }) {
      this.openAddNoteModal();
      cy.get('select').select(category);
      cy.get('input[name="title"]').type(title);
      cy.get('textarea[name="description"]').type(description);
      if (completed) {
        cy.get('input[type="checkbox"]').check({ force: true });
      }
      cy.contains('Create').click();
    }
  }
  
  export default new CategoryPage();
  