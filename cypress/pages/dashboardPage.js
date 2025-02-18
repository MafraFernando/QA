class dashboardPage {
    selectorsList() {
        const selectors = {
            headerGrid: ".orangehrm-dashboard-grid",
        }
        return selectors
    }

    checkDashboardPage() {
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorsList().headerGrid).should('be.visible')
    }
}

export default dashboardPage