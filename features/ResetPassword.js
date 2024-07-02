const {Given, Then} = require('@badeball/cypress-cucumber-preprocessor')
const recover_password = require('../pageObjects/reset_password')


Given("navigate to the website", () => {
    cy.navigate_reset_password_url()
})
Then("enter email address", (datatable) => {
    datatable.hashes().forEach(element => {
        recover_password.password_recover(element.email_address)
    })
})
Then("click password reset link button", () => {
    cy.Forgot_password_link()
})
