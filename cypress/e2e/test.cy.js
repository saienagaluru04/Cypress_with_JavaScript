describe('My First Test', () => {

  // it keyword describes that it is as a test block 
  it('verify title-positive', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.title().should('eq','OrangeHRM')
  })

  it('verify title-negative', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.title().should('eq','OrangeHRM123')
  })


})
