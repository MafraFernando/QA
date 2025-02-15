describe('Swag Labs', () => { 

const selectorsList = {
    usernameField: "#user-name",
    passwordField: "#password",
    loginButton: "#login-button",
    headerInventoryContainer: "[data-test='inventory-container']",
    wrongCredencialAlert: "[data-test='error']"
}    

it('Login - Sucess', () => {
cy.visit('https://www.saucedemo.com/')
cy.get(selectorsList.usernameField).type('standard_user')
cy.get(selectorsList.passwordField).type('secret_sauce')
cy.get(selectorsList.loginButton).click()
cy.location('pathname').should('equal', '/inventory.html')
cy.get(selectorsList.headerInventoryContainer)

})

it('Login - Unsucessfull', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get(selectorsList.usernameField).type('test')
    cy.get(selectorsList.passwordField).type('test123')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredencialAlert)

})
})