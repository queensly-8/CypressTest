describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
//Mouse Hover is not supported in cypress so this is the alternative
//also the click force true can click option even if it is not visible
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    
    //cy.get('div.mouse-hover-content').invoke('show')
    cy.contains('Top').click({force: true})
    cy.url().should('include','top')
})
 
 
})