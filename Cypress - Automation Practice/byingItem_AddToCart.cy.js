describe('Buying item and Add to cart', () => {

   beforeEach(() => {
      cy.visit('http://automationpractice.pl/index.php')
      cy.viewport(1920, 1450)

      cy.contains('Sign in').click()
      cy.get('#email').type('qatest1.mystore@gmail.com')
      cy.get('#passwd').type('z27hHiSF')
      cy.get('button').contains('Sign in').click()
   })

   it('Section = Women', () => {
      cy.contains('Women').should('be.visible').click()
      cy.url().should('include', '?id_category=3&controller=category')
      cy.get('#selectProductSort').select('Product Name: A to Z')
      cy.get('li').contains('Printed Summer Dress').click()
      cy.contains('In stock').should('be.visible')
      cy.get('#group_1').select(1)
      cy.get('button').contains('Add to cart').click()
      cy.contains('Proceed to checkout').click()
   })
})