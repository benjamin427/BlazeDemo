Feature: Login screen

    Scenario: User should enter login credentials to enter in the website
    Given navigate to the website
    Then enter credentials for email and password
    |email_address      |password                   |
    |random@random.com  |testAdmin123               |
    Then click the login button

    Scenario: User should enter login credentials and click the remember me checkbox to re-enter the website without login credentials
    Given navigate to the website again
    Then enter credentials for email and password again
    |email_address2           |password2           |
    |random@random.com        |testAdmin1234       |
    Then click the remember me checkbox
    Then click the login button again


