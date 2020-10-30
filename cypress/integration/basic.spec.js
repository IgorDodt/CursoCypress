/// <reference types="cypress" />

describe('Cypress Basic', ()=>{
    it.only('Visitar uma pagina e fazer assertiva', ()=> {

        cy.visit('https://uol.unifor.br/acesso/app/autenticacao')

        cy.pause()

        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Treinamento').debug()

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Treinamento')
    })

    it('Encontrar e iteragir com elemento', ()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.get('#buttonSimple').click().should('have.value', 'Obrigado!')
    })
})