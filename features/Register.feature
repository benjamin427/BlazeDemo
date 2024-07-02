Feature: Registration page

    Scenario: User should enter information on each field before submitting it
    Given navigate to the website
    Then enter information
    |name           |company            |email_address          |password           |confirm_password           |
    |Benjamin       |Acme               |random@random.com      |testAdmin123       |testAdmin123               |
    Then click the register button

    