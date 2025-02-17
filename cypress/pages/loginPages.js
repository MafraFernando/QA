class loginPage {
    selectorsList() = {
        selectors {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "button",
            erroAlert: ".oxd-alert--error",
            
        }
    }

    accessLoginPage() {
        cy.visit('/auth/login')
    }

    loginWithUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }
}

export default loginPage