/// <reference types="Cypress" />

describe("My Fourth Test Suite", async()=>{
    it("My Fourth Test Case",async()=>{
        //Check boxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
    })
})