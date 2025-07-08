// cypress/e2e/regression/notes.cy.js
import NotesPage from '../../support/page_objects/NotesPage';
import LoginPage from '../../support/page_objects/LoginPage';
import { testUser } from '../../support/testData';

describe('Full CRUD Operations for Notes', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login(testUser.email, testUser.password);
    cy.visit('/');
  });

  it('Create a completed note [Positive]', () => {
    NotesPage.addNote({
      title: 'Completed Note',
      description: 'This note is completed',
      category: 'Work',
      completed: true
    });

    cy.contains('Completed Note').should('be.visible');
  });

  it('Create an incomplete note [Positive]', () => {
    NotesPage.addNote({
      title: 'Incomplete Note',
      description: 'This note is not completed',
      category: 'Home',
      completed: false
    });

    cy.contains('Incomplete Note').should('be.visible');
  });

  it('Read and verify a created note exists', () => {
    cy.contains('Completed Note').should('exist');
    cy.contains('Incomplete Note').should('exist');
  });

  it('Update a note [Positive]', () => {
    NotesPage.editNote('Incomplete Note', {
      newTitle: 'Updated Note',
      newDescription: 'This note has been updated'
    });

    cy.contains('Updated Note').should('be.visible');
  });

  it('Delete a note [Positive]', () => {
    NotesPage.deleteNote('Completed Note');
    cy.contains('Completed Note').should('not.exist');
  });
});

