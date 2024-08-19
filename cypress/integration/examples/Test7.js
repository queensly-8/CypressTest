/// <reference types="Cypress" />

describe('Handling Child Windows', () => {
    it('Should handle child window', () => {
      
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
 
       cy.get("#opentab").invoke('removeAttr','target').click();
 
       cy.origin("https://www.qaclickacademy.com",()=>
       {
        cy.get("#navbarSupportedContent a[href*='about']").click();
        cy.get(".mt-50 h2").should('contain','QAClick Academy');
 
})

       it('Another Option For handling another window', () => {
      
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
 
       cy.get("#opentab").then(()=>{
        cy.visit("https://www.qaclickacademy.com")

        cy.origin("https://www.qaclickacademy.com",()=>
            {
             cy.get("div.sub-menu-bar a[href*='about']").click();
      
         })
       })
 
       
});
});

 
    
 
});