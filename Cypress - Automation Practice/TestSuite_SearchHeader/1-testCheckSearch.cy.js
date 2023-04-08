describe('Check the Search Functionality - Header', () => {

   it('Check the Search - entering the name existing item', () => {
      cy.visit('http://automationpractice.pl/index.php')
      cy.viewport(1920, 1080)
      cy.get('#search_query_top')
         .should('be.visible')
         .type('Blouse{enter}')
      // cy.contains('Search').click()
      cy.get('a[title="Blouse"]')
         .should('be.visible')
   })

   it('Check the Search - entering the name not existing item', () => {
      cy.visit('http://automationpractice.pl/index.php')
      cy.viewport(1920, 1080)
      cy.get('#search_query_top')
         .should('be.visible')
         .type('Klouse')
      cy.contains('Search').click()
      cy.contains('No results were found for your search')
         .should('be.visible')
         .should('be.contain', 'No results were found for your search')
   })

   it('Check the Search - no data is entered ', () => {
      cy.visit('http://automationpractice.pl/index.php')
      cy.viewport(1920, 1080)
      cy.get('#search_query_top').clear()
      cy.contains('Search').click()
      cy.contains('Please enter a search keyword')
         .should('be.visible')
         .should('be.contain', 'Please enter a search keyword')
   })

   it('Check the Search - enter the numbers', () => {
      cy.visit('http://automationpractice.pl/index.php')
      cy.viewport(1920, 1080)
      cy.get('#search_query_top')
         .should('be.visible')
         .type('123 456 798')
      cy.contains('Search')
         .should('be.visible')
         .click()
      cy.contains('No results were found for your search')
         .should('be.visible')
         .should('be.contain', 'No results were found for your search')
   })


   it('Check the Search - enter the "space"', () => {
      cy.visit('http://automationpractice.pl/index.php')
      cy.viewport(1920, 1080)
      cy.get('#search_query_top')
         .should('be.visible')
         .type(' ')
      cy.contains('Search')
         .should('be.visible')
         .click()
      cy.contains('No results were found for your search')
         .should('be.visible')
         .should('be.contain', 'No results were found for your search')
   })

})
