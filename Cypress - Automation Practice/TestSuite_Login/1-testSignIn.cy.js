describe('Sign in', () => {

  it('ALREADY REGISTERED', () => {
    cy.visit('http://automationpractice.pl/index.php')
    cy.viewport(1920, 1080)
    cy.contains('Sign in').click()
    cy.get('input[id="email"]').type('qatest1.mystore@gmail.com')
    cy.get('input[type="password"]').type('z27hHiSF')
    cy.get('button[id="SubmitLogin"]').click()
  })
})
