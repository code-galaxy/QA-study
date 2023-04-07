describe('My Account ', () => {

  //  Given, When, Then or "Arrange, Act, Assert".
  it('Add my first address', () => {
    cy.visit('http://automationpractice.pl/index.php')
    cy.viewport(1920, 1080)
    cy.contains('Sign in').click()
    cy.get('input[id="email"]').type('qatest1.mystore@gmail.com')
    cy.get('input[type="password"]').type('z27hHiSF')
    cy.get('button[id="SubmitLogin"]').click()
    cy.contains('Add my first address').click()

    cy.get('#company').type('LLC ZPUE Ukraine')
    cy.get('#address1').type('Bandera street ')
    cy.get('#city').type('Ivano-Frankivsk')
    cy.get('#id_state').select('California')
    cy.get('#postcode').type('76018')
    cy.get('#phone').type('+19292539433')
    cy.get('#phone_mobile').type('+19292539435')
    cy.get('#other').type('This is an automatic test')
    cy.get('#submitAddress').click()
  })
})