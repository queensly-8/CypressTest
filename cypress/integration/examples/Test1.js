/// <reference types="Cypress" />

describe("My First Test Suite", async()=>{
    it("My First Test Case",async()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get(".search-keyword").type('ca')
        cy.wait(2000)
        cy.get('.products').as('productLocator') //just like assigning it on a variable
        cy.get(".product:visible").should('have.length',4)
        cy.get("@productLocator").find(".product").should("have.length", 4)
        //eq(2) is not an array
        cy.get("@productLocator").find(".product").eq(2).contains("ADD TO CART").click().then(()=>{
            console.log("sf")
        })
        cy.get("@productLocator").find(".product").each(($e1, index, $List)=>{
            const testVeg = $e1.find('h4.product-name').text()
            if(testVeg.includes("Cashews")){
                cy.wrap($e1).find('button').click()
            }
        })

        cy.get('.brand').should('have.text', 'GREENKART')

        cy.get('.brand').then(($logoelement)=>{ //The .then() method is used to run a callback function after the preceding command (in this case, cy.get('.brand')) has resolved. This allows you to work with the result of the command in a synchronous-looking manner.
            cy.log($logoelement.text())
        })
    })
})