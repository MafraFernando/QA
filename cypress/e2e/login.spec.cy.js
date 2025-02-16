import userData from '../fixtures/user/userData.json'

describe('Orange HRM tests', () => {

  const selectorsList = { 
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "button",
    headerGrid: ".orangehrm-dashboard-grid",
    erroAlert: ".oxd-alert--error",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input",
    licenseExpiryField: "[placeholder='yyyy-dd-mm']",
    submitButton: "[type='submit']",
    
  }


  it.only('Login - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.headerGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('Teste')
    cy.get(selectorsList.middleNameField).clear().type('da')
    cy.get(selectorsList.lastNameField).clear().type('Silva')
    cy.get(selectorsList.genericField).eq(4).clear().type('12345678JS')
    cy.get(selectorsList.genericField).eq(5).clear().type('JS12345')
    cy.get(selectorsList.genericField).eq(6).clear().type('driver12345')
    cy.get(selectorsList.genericField).eq(7).click()
    cy.get(selectorsList.licenseExpiryField).eq(0).clear().type('2028-03-25')
    cy.get(selectorsList.submitButton).eq(1).click()
    cy.get('body').should('contain', 'Successfully Saved')
  })
it('Login - Fail', () => {
  cy.visit('/auth/login')
  cy.get(selectorsList.usernameField).type(userData.userFail.username)
  cy.get(selectorsList.passwordField).type(userData.userFail.password)
  cy.get(selectorsList.loginButton).click()
  cy.get(selectorsList.erroAlert)

})
})