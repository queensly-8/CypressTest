/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'


describe('Frames Test', () => {
    it('Frames Test', () => {
      
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.iframeLoaded("#courses-iframe")
        cy.iframe().find("a[href*='mentorship]").eq(0).click()
        cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)

    })
})