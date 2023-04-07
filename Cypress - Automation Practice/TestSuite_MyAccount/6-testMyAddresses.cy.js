describe('My account', () => {

   //  Given, When, Then or "Arrange, Act, Assert".

   it('My addresses', () => {
      cy.visit('http://automationpractice.pl/index.php')
      cy.viewport(1920, 1080)
      cy.contains('Sign in').click()
      cy.get('input[id="email"]').type('qatest1.mystore@gmail.com')
      cy.get('input[type="password"]').type('z27hHiSF')
      cy.get('button[id="SubmitLogin"]').click()

      cy.contains('My addresses').click()
      cy.contains('Update').click()
      cy.get('#id_state').select('Colorado')
      cy.contains('Save').click()
      cy.contains('Back to your account').click()
   })
})