/// <reference types="cypress" />

describe('Trabalhando com elementos basicos', ()=>{
    it('Text', ()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it('Links', ()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.get('[href="#"]').should('have.text', 'fdas')
        cy.get('#resultado').should('have.text', 'Voltou!') 

        cy.reload()
        cy.get('#resultado').should('not.have.text', 'Voltou!') 
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!') 
    })

    // tests.spec.js
describe('mobile-tests', () => {
    beforeEach(() => {
      cy.viewport('iphone-5')
    })
    // Tests here
  })
})