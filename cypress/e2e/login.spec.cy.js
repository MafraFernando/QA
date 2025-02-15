describe('Orange HRM tests', () => {

  const selectorsList = { 
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "button",
    headerGrid: ".orangehrm-dashboard-grid",
    erroAlert: ".oxd-alert--error"
  }

  it('Login - Sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.headerGrid)
  })
it('Login - Fail', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get(selectorsList.usernameField).type('test ')
  cy.get(selectorsList.passwordField).type('test123')
  cy.get(selectorsList.loginButton).click()
  cy.get(selectorsList.erroAlert)

})
})