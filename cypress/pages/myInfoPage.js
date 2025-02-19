class myInfoPage {
    selectorsList() {
        const selectors = {
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
        return selectors
    }

    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(employeeId, otherId, driverLicense, licenseExpiry) {
        cy.get(this.selectorsList().genericField).eq(4).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(driverLicense)
        cy.get(this.selectorsList().genericField).eq(7).click()
        cy.get(this.selectorsList().genericDateField).eq(0).clear().type(licenseExpiry)
        cy.get(this.selectorsList().closeButton).click()
    }

    statusDetails() {
        cy.get(this.selectorsList().genericCombobox).eq(0).trigger('mousedown', 'bottom').type('bbbbbbbbbbbbbb')
        cy.get(this.selectorsList().genericCombobox).eq(1).trigger('mousedown', 'bottom').type('s').click()
        cy.get(this.selectorsList().genericDateField).eq(1).clear().type('1991-06-01')
        cy.get(this.selectorsList().genericSelectorSex).eq(0).click()
    }

    myInfoSave() {
        cy.get(this.selectorsList().submitButton).eq(1).click()
        cy.get('body').should('contain', 'Successfully Saved')
    }
   
}

export default myInfoPage