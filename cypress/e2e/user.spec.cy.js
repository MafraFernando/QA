import userData from '../fixtures/user/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import NavBarPage from '../pages/navBarPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance')

const chance = new Chance()
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

    myInfoPage.fillPersonalDetails(chance.first(), chance.first(), chance.last())
    myInfoPage.fillEmployeeDetails(chance.ssn(), chance.ssn(), chance.ssn(), chance.date({string: true}))
    myInfoPage.statusDetails()
    myInfoPage.myInfoSave()
   
})
})