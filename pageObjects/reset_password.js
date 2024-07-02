class reset_password {
    password_recover(emailAddress) {
        cy.contains('E-Mail Address').should('have.text', 'E-Mail Address')
        cy.get('[id="email"]').type(emailAddress).should('have.value', emailAddress)
    }
}

const recover_password = new reset_password()
module.exports = recover_password

