import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
const homePage = require('../../pageObjects/HomePage')
const productPage = require('../../pageObjects/Products')

Given("I open Ecommerce Page", function(){
    cy.visit(Cypress.env('url'))
})

When("I add items to cart",()=>{
    homePage.getShopTab().click()

        // this.data.productName //this is an array
        this.data.productName.forEach((element)=>{
            //console.log(element)
            cy.selectProduct(element)
        });
        productPage.checkoutButton().click()
})


And("Validate the total prices",()=>{
    var sum = 0;
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list)=>{
        const amount = $el.text()
        var res = amount.split(" ")
        res = res[1].trim()
        sum = Number(sum) + Number(res)
    }).then(()=>{
        cy.log(sum)
    })
    cy.get('h3 strong').then((element)=>{
        const amount = element.text()
        var res = amount.split(" ")
        var total = res[1].trim()
        expect(Number(total)).to.equal(sum)
    })
})

Then("Select the country submit and verify Thankyou",()=>{
    cy.contains("Checkout").click()
        cy.get('#country').type('India')
        Cypress.config('defaultCommandTimeout',8000) //applying wait time
        cy.get(".suggestions > ul > li > a").click()
        cy.get('#checkbox2').click({force:true})
        cy.get('input[type="submit"]').click()
        //cy.get('.alert').should("have.text", 'Success! Thank you! Your order will be delivered in next few weeks :-).')
        cy.get('.alert').then((element)=>{
            const actualText = element.text()
            expect(actualText.includes("Success")).to.be.true
        })
})


When("i fill the form details", ()=>{
    homePage.getEditBox().type(this.data.name)
    homePage.getGender().select(this.data.gender)
})

Then("Validate the forms behaviour", ()=>{
    homePage.getTwoWayDataBinding().should("have.value", this.data.name)
    homePage.getEditBox().should('have.attr','minlength','2')
    homePage.getEntrepreneur().should('be.disabled')
    Cypress.config('defaultCommandTimeout', 8000)
})
And("Select the shop page", ()=>{
    homePage.getShopTab().click()
})