class register {
    register_info(name, company, emailAddress, password, confirmPassword) {
        cy.contains('Name').should('have.text', 'Name')
        cy.get('[id="name"]').type(name).should('have.value', name)
        cy.contains('Company').should('have.text', 'Company')
        cy.get('[id="company"]').type(company).should('have.value', company)
        cy.contains('E-Mail Address').should('have.text', 'E-Mail Address')
        cy.get('[id="email"]').type(emailAddress).should('have.value', emailAddress)
        cy.contains('Password').should('have.text', 'Password')
        cy.get('[id="password"]').type(password).should('have.value', password)
        cy.contains('Confirm Password').should('have.text', 'Confirm Password')
        cy.get('[id="password-confirm"]').type(confirmPassword).should('have.value', confirmPassword)
    }
}

const register_page = new register()
module.exports = register_page

