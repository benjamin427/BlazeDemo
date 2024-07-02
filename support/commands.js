
//Home page login command functions
Cypress.Commands.add("Login_button", () => {
   return cy.get('[type="submit"]').last().click({force: true})
})

Cypress.Commands.add("Remember_checkbox", () => {
   return cy.get('[type="checkbox"]').last().click({force: true})
})

Cypress.Commands.add("Forgot your password", () => {
   cy.get('a').invoke('attr', 'href').then(href => {
      cy.request(href).its('status').should('eq', 200)
   })
})

//Reset password command function
Cypress.Commands.add("Forgot_password_link", () => {
   return cy.get('[type="submit"]').click({force: true})
})


//Register command function
Cypress.Commands.add("Register_button", () => {
   return cy.get('[type="submit"]').last().click({force: true})
})


//Navigation command functions
Cypress.Commands.add("navigate_home_login_url", () => {
    cy.visit("https://blazedemo.com/login")
    cy.get('a').invoke('attr', 'href').then(href => {
      cy.request(href).its('status').should('eq', 200)
    })
})

Cypress.Commands.add("navigate_register_url", () => {
    cy.visit("https://blazedemo.com/register")
    cy.get('a').invoke('attr', 'href').then(href => {
      cy.request(href).its('status').should('eq', 200)
    })
})

Cypress.Commands.add("navigate_reset_password_url", () => {
    cy.visit("https://blazedemo.com/password/reset")
    cy.get('a').invoke('attr', 'href').then(href => {
      cy.request(href).its('status').should('eq', 200)
    })
})

Cypress.Commands.add("navigate_menu_url", () => {
   cy.visit("https://blazedemo.com/index.php")
   cy.get('a').invoke('attr', 'href').then(href => {
      cy.request(href).its('status').should('eq', 200)
   })
})
