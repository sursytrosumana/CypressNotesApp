class SearchPage {
    visit() {
      cy.visit('/');
    }
  
    enterSearchQuery(query) {
        cy.get('input[type="text"]', { timeout: 5000 })
        .should('exist') 
        .should('be.visible') 
        .click() 
        .clear()
        .type(query, { delay: 50 }); 
    }      
  
    clickSearchButton() {
      cy.contains('button', 'Search').should('be.visible').click();
    }
  
    searchFor(query) {
      this.enterSearchQuery(query);
      this.clickSearchButton();
    }
  
    getNoteTitles() {
      return cy.get('[data-testid="note-card-title"]');
    }
  
    getNoteCards() {
      return cy.get('[data-testid="note-card"]');
    }
  
    getNoResultsMessage() {
      return cy.contains("Couldn't find any notes in all categories");
    }
  
    getSearchResultHeading() {
      return cy.contains(/Search Results for/i);
    }
  }
  
  export default new SearchPage();
  