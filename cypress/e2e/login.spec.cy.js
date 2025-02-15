describe('Orange HRM tests', () => {

  const selectorsList = { 
    usernameField: "[name='username']"
  }

  it('Login - Sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get('button').click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get('.oxd-layout').contains('Dashboard')
  })
it('Login - Fail', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get("[name='username']").type('test ')
  cy.get("[name='password']").type('test123')
  cy.get('button').click()
  cy.get('.oxd-alert--error')

})
})