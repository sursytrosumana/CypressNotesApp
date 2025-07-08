import CategoryPage from '../../support/page_objects/CategoryPage';
import LoginPage from '../../support/page_objects/LoginPage';
import { testUser, categoryConfigs } from '../../support/testData';

describe('Category - Note Creation and Color Validation for All Categories', () => {
  beforeEach(() => {
    cy.session([testUser.email, testUser.password], () => {
      LoginPage.visit();
      LoginPage.login(testUser.email, testUser.password);
      cy.url().should('include', '/notes/app');
      cy.contains('MyNotes').should('be.visible');
    });

    CategoryPage.visit();
  });

  categoryConfigs.forEach(({ name, noteTitle, noteDescription, expectedColor }) => {
    it(`should create a ${name} category note and validate color`, () => {
      CategoryPage.openCategory(name);
      CategoryPage.createNote({
        title: noteTitle,
        description: noteDescription,
        category: name,
        completed: false
      });

      cy.contains(noteTitle).should('be.visible');

      // Validate color of the note header
      CategoryPage.getNotes()
        .contains(noteTitle)
        .parents('[data-testid="note-card"]')
        .within(() => {
          cy.get('[data-testid="note-card-title"]')
            .should('have.css', 'background-color')
            .and('satisfy', (color) => expectedColor.includes(color));
        });
    });
  });

  it('should validate that All category shows notes from all categories', () => {
    CategoryPage.openCategory('All');

    const expectedNotes = categoryConfigs.map((cfg) => cfg.noteTitle);
    expectedNotes.forEach((title) => {
      cy.contains(title).should('be.visible');
    });
  });
});
