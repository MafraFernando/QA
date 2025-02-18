import userData from '../fixtures/user/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import NavBarPage from '../pages/navBarPage.js'
import MyInfoPage from '../pages/myInfoPage.js'



const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const navBarPage = new NavBarPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM tests', () => {

  const selectorsList = { 
    
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input",
    genericDateField: "[placeholder='yyyy-dd-mm']",
    closeButton: ".--close",
    submitButton: "[type='submit']",
    genericCombobox: ".oxd-select-text",
    genericSelectorSex: ".oxd-radio-wrapper"
    
  }


  it.only('Login - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginAnyWithUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboardPage()
    navBarPage.accessMyInfo()
   
   // cy.get(selectorsList.firstNameField).clear().type('Teste')
   // cy.get(selectorsList.middleNameField).clear().type('da')
   // cy.get(selectorsList.lastNameField).clear().type('Silva')
   // cy.get(selectorsList.genericField).eq(4).clear().type('12345678JS')
   // cy.get(selectorsList.genericField).eq(5).clear().type('JS12345')
   // cy.get(selectorsList.genericField).eq(6).clear().type('driver12345')
   // cy.get(selectorsList.genericField).eq(7).click()
   // cy.get(selectorsList.genericDateField).eq(0).clear().type('2028-03-25')
   // cy.get(selectorsList.closeButton).click()
   // cy.get(selectorsList.genericCombobox).eq(0).trigger('mousedown', 'bottom').type('bbbbbbbbbbbbbb') // brazilian
   // cy.get(selectorsList.genericCombobox).eq(1).trigger('mousedown', 'bottom').type('s').click()
   // cy.get(selectorsList.genericDateField).eq(1).clear().type('1991-06-15')
   // cy.get(selectorsList.genericSelectorSex).eq(0).click()
   // cy.get(selectorsList.submitButton).eq(1).click()
   // cy.get('body').should('contain', 'Successfully Saved') 
  })
it('Login - Fail', () => {
  cy.visit('/auth/login')
  cy.get(selectorsList.usernameField).type(userData.userFail.username)
  cy.get(selectorsList.passwordField).type(userData.userFail.password)
  cy.get(selectorsList.loginButton).click()
  cy.get(selectorsList.erroAlert)

})
})