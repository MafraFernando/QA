import userData from '../fixtures/user/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'




const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()


describe('Login Orange HRM tests', () => {

it('Login - Fail', () => {
  loginPage.accessLoginPage()
  loginPage.loginAnyWithUser(userData.userFail.username, userData.userFail.password)
  loginPage.loginWithErrorAlert()

})

it('Login - Sucess', () => {
  loginPage.accessLoginPage()
  loginPage.loginAnyWithUser(userData.userSucess.username, userData.userSucess.password)
  dashboardPage.checkDashboardPage()

})
})