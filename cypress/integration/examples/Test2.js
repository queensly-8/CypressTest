/// <reference types="Cypress" />

describe("My Second Test Suite", async()=>{
    it("My Second Test Case",async()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get(".search-keyword").type('ca')
        cy.wait(2000)
        cy.get('.products').as('productLocator') //just like assigning it on a variable
        cy.get(".product:visible").should('have.length',4)
        cy.get("@productLocator").find(".product").should("have.length", 4)
        //eq(2) is not an array
        cy.get("@productLocator").find(".product").each(($e1, index, $List)=>{
            const testVeg = $e1.find('h4.product-name').text()
            if(testVeg.includes("Cashews")){
                cy.wrap($e1).find('button').click()
            }
           
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })
})