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


  it('User Info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginAnyWithUser(userData.userSucess.username, userData.userSucess.password)

    dashboardPage.checkDashboardPage()

    navBarPage.accessMyInfo()

    myInfoPage.fillPersonalDetails('Testador', 'de', 'Souza')
    myInfoPage.fillEmployeeDetails('845Tester', '123Tester', '123456', '2028-05-28')
    myInfoPage.statusDetails()
    myInfoPage.myInfoSave()
   
})
})