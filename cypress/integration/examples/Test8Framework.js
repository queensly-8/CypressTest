/// <reference types="Cypress" />
import HomePage from "./pageObjects/HomePage";
import ProductPage from "./pageObjects/Products";

describe('Handling Child Windows', () => {

    before(()=>{
        cy.fixture('example').then(function(data){
            this.data = data;
        })
    })

    it('with Framework', function() {
        
        const homePage = new HomePage()
        const productPage = new ProductPage()
        cy.visit(Cypress.env('url')+"/angularpractice/")
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should("have.value", this.data.name)
        homePage.getEditBox().should('have.attr','minlength','2')
        homePage.getEntrepreneur().should('be.disabled')
        //cy.pause //pause the process of code or .debug
        homePage.getShopTab().click()

        // this.data.productName //this is an array
        this.data.productName.forEach((element)=>{
            //console.log(element)
            cy.selectProduct(element)
        });
        productPage.checkoutButton().click()
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
})