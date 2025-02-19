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
    
    
  }


  it.only('Login - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginAnyWithUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboardPage()
    navBarPage.accessMyInfo()
    myInfoPage.myInfoData()
    myInfoPage.myInfoSave()
   
    
  })
it('Login - Fail', () => {
  cy.visit('/auth/login')
  cy.get(selectorsList.usernameField).type(userData.userFail.username)
  cy.get(selectorsList.passwordField).type(userData.userFail.password)
  cy.get(selectorsList.loginButton).click()
  cy.get(selectorsList.erroAlert)

})
})