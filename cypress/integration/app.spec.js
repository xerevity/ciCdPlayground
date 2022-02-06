// app.spec.js created with Cypress
//
describe('The app', () => {
    it('tells that you are a butler', () => {
        cy.visit('http://localhost:8080/')
        cy.get('h1')
        .should('have.text', 'Hello, my name is James Butler!')
    })
  })