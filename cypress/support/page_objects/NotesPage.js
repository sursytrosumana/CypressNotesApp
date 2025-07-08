// cypress/support/page_objects/NotesPage.js
class NotesPage {
    visit() {
      cy.visit('/');
    }
  
    openAddNoteModal() {
      cy.contains('+ Add Note').click();
      cy.contains('Add new note').should('be.visible');
    }
  
    addNote({ title, description, category = 'Home', completed = false }) {
      this.openAddNoteModal();
      cy.get('select').select(category);
      cy.get('input[name="title"]').type(title);
      cy.get('textarea[name="description"]').type(description);
      if (completed) {
        cy.get('input[type="checkbox"]').check({ force: true });
      }
      cy.contains('Create').click();
    }
  
    editNote(existingTitle, { newTitle, newDescription }) {
      cy.contains(existingTitle).click();
      cy.contains('Edit').click();
      cy.get('input[name="title"]').clear().type(newTitle);
      cy.get('textarea[name="description"]').clear().type(newDescription);
      cy.contains('Save').click();
    }
  
    deleteNote(title) {
      cy.contains(title).click();
      cy.contains('Delete').click();
      cy.get('button[data-testid="note-delete-confirm"]').click();
      cy.contains('Delete').click();
    }
  }
  
  export default new NotesPage();
  