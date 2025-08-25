
describe("Assertions Demo",()=>{

    it("Implicit assertions", ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", { timeout: 120000 })

        // using should method with multiple times 
        cy.url().should('include','orangehrmlive.com')
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain','orangehrm')

        // using should method
        cy.url().should('include','orangehrmlive.com')
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain','orangehrm')

        // using and method
        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrm')

        // title 
        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')
        .and('contain','HRM')

        cy.get('//img[@alt="company-branding"]').should('be.visible')
        .and('exsit')

        cy.xpath("//a").should('have.length','5')

        cy.get('//input[@placeholder="Username"]').type('Admin')

        cy.get('//input[@placeholder="Username"]').should('have.value','Admin')
        

    })
})