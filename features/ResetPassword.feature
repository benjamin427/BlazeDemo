Feature: Registration page

    Scenario: User should enter information on each field before submitting it
    Given navigate to the website
    Then enter email address
    |email_address          |
    |random@random.com      |
    Then click password reset link button

    