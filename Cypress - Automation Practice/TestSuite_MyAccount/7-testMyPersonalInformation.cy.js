describe('My Account', () => {

   //  Given, When, Then or "Arrange, Act, Assert".

   it('My personal information', () => {
      cy.visit('http://automationpractice.pl/index.php')
      cy.viewport(1920, 1080)
      cy.contains('Sign in').click()
      cy.get('input[id="email"]').type('qatest1.mystore@gmail.com')
      cy.get('input[type="password"]').type('z27hHiSF')
      cy.get('button[id="SubmitLogin"]').click()

      cy.contains('My personal information').click()
      cy.get('#firstname').clear().type('Galaxy')
      cy.get('#lastname').clear().type('Code')
      cy.get('#days').select('9')
      cy.contains('Save').click()
   })
})