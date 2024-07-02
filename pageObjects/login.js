class login {
    logincredentials(emailAddress, password) {
        cy.contains("E-Mail Address").should('have.text', "E-Mail Address")
        cy.get("#email").type(emailAddress).should('have.value', emailAddress)
        cy.contains("Password").should('have.text', "Password")
        cy.get("#password").type(password).should('have.value', password)
    }
}

const login_page = new login()
module.exports = login_page
