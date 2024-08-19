Feature: End to End Ecommerce Validation

    application Regression

    Scenario: Ecommerce products delivery
        Given I open Ecommerce Page
        When I add items to cart
        And Validate the total prices
        Then Select the country submit and verify Thankyou

    Scenario: Filling the form to shop
        Given I open Ecommerce Page
        When i fill the form details
        Then Validate the forms behaviour
        And Select the shop page