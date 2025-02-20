class loginPage {
    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "button",
            erroAlert: ".oxd-alert-content-text",
        }  
            return selectors
     }

    accessLoginPage() {
        cy.visit('/auth/login')
    }

    loginAnyWithUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }

    loginWithErrorAlert() {
        cy.get(this.selectorsList().erroAlert)
    }
}

export default loginPage