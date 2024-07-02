const {Given, Then} = require('@badeball/cypress-cucumber-preprocessor');
const login_page = require('../pageObjects/login');


//Entering credentials without the remember me checkbox
Given("navigate to the website", () => {
    cy.navigate_home_login_url();
})
Then("enter credentials for email and password", (datatable) => {
    datatable.hashes().forEach(element => {
        login_page.logincredentials(element.email_address, element.password)
    })
})
Then("click the login button", () => {
    cy.Login_button()
})

//Entering credentials without the remember me checkbox
Given("navigate to the website again", () => {
    cy.navigate_home_login_url();
})
Then("enter credentials for email and password again", (datatable) => {
    datatable.hashes().forEach(element => {
        login_page.logincredentials(element.email_address2, element.password2)
    })
})
Then("click the remember me checkbox", () => {
    cy.Remember_checkbox();
})
Then("click the login button again", () => {
    cy.Login_button();
})
