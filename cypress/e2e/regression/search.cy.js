import SearchPage from '../../support/page_objects/SearchPage';
import LoginPage from '../../support/page_objects/LoginPage';
import { testUser, searchTestData } from '../../support/testData';

describe('Search Feature', () => {
  beforeEach(() => {
    cy.session([testUser.email, testUser.password], () => {
      LoginPage.visit();
      LoginPage.login(testUser.email, testUser.password);
      cy.url().should('include', '/notes/app');
      cy.contains('MyNotes').should('be.visible');
    });

    SearchPage.visit();
  });

  it('should return relevant notes when a valid search query is entered', () => {
    SearchPage.searchFor(searchTestData.validQuery);

    SearchPage.getSearchResultHeading()
      .should('contain.text', `Search Results for "${searchTestData.validQuery}"`);

    SearchPage.getNoteTitles().each(($title) => {
      cy.wrap($title).invoke('text').should('include', searchTestData.expectedTitleFragment);
    });
  });

  it('should show no results message for unmatched search query', () => {
    SearchPage.searchFor(searchTestData.invalidQuery);

    SearchPage.getNoteCards().should('have.length', 0);
    SearchPage.getNoResultsMessage().should('exist');
  });
});
