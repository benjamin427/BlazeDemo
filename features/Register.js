const {Given, Then} = require('@badeball/cypress-cucumber-preprocessor')
const register_page = require('../pageObjects/register')


Given("navigate to the website", () => {
    cy.navigate_register_url()
})
Then("enter information", (datatable) => {
    datatable.hashes().forEach(element => {
        register_page.register_info(element.name, element.company, element.email_address, element.password, element.confirm_password)
    })
})
Then("click the register button", () => {
    cy.Register_button();
})
