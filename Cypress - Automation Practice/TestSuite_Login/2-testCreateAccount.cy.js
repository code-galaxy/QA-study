describe('CREATE AN ACCOUNT', () => {

   it('CREATE AN ACCOUNT', () => {
    cy.visit('http://automationpractice.pl/index.php')
    cy.viewport(1920, 1080)
    cy.contains('Sign in').click()
    cy.get('input[id="email_create"]').type('qatest1.mystore@gmail.com')
    cy.get('button[id="SubmitCreate"]').click()
    cy.get('input[id="id_gender1"]').check('1')
    cy.get('input[id="customer_firstname"]').type('Yaroslav')
    cy.get('input[id="customer_lastname"]').type('Karpash')
    cy.get('input[id="passwd"]').type('z27hHiSF')
    cy.get('select[id="days"]').select('6')
    cy.get('select[id="months"]').select("8")
    cy.get('select[id="years"]').select("1980")
    cy.get('#newsletter').check('1')
    cy.get('#optin').check('1')
    cy.contains('Register').click()
  })

})
