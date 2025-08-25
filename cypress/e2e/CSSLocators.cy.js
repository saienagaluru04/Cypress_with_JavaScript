describe('CSSLocators', () => {

    it('css locators', () => {

        cy.visit('http://www.automationpractice.pl/index.php')

        cy.get('#search_query_top').type('T-shirts') // entering the value to input box

        cy.get('button[name="submit_search"]').click() // clicking the search button

        cy.get(".lighter").contains('T-shirts') // Assertions (verifying)


    })
})