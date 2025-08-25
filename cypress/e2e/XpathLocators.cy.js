describe('XPATHLocators', () => {

    it('xpath locators', () => {

        cy.visit('http://www.automationpractice.pl/index.php')

        cy.xpath('//ul[@class="product_list grid row"]/li').should('have.length',7)
        
    })

    it('chained xpath', () => {

        cy.visit('http://www.automationpractice.pl/index.php')

        cy.xpath('//ul[@class="product_list grid row"]').xpath('./li').should('have.length',7)
        
    })
})