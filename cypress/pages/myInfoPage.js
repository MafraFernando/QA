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
    myInfoData() {
        cy.get(this.selectorsList().firstNameField).clear().type('Teste')
        cy.get(this.selectorsList().middleNameField).clear().type('da')
        cy.get(this.selectorsList().lastNameField).clear().type('Silva')
        cy.get(this.selectorsList().genericField).eq(4).clear().type('12345678JS')
        cy.get(this.selectorsList().genericField).eq(5).clear().type('JS12345')
        cy.get(this.selectorsList().genericField).eq(6).clear().type('driver12345')
        cy.get(this.selectorsList().genericField).eq(7).click()
        cy.get(this.selectorsList().genericDateField).eq(0).clear().type('2028-03-25')
        cy.get(this.selectorsList().closeButton).click()
        cy.get(this.selectorsList().genericCombobox).eq(0).trigger('mousedown', 'bottom').type('bbbbbbbbbbbbbb') // brazilian
        cy.get(this.selectorsList().genericCombobox).eq(1).trigger('mousedown', 'bottom').type('s').click()
        cy.get(this.selectorsList().genericDateField).eq(1).clear().type('1991-06-15')
        cy.get(this.selectorsList().genericSelectorSex).eq(0).click()
        
    }
    myInfoSave() {
        cy.get(this.selectorsList().submitButton).eq(1).click()
        cy.get('body').should('contain', 'Successfully Saved')
    }
   
}

export default myInfoPage