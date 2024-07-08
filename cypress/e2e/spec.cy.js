/// <reference types="cypress" /> 

describe('US -012-Funcionalidade: cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8082/')
    cy.get('#signup-firstname').type('Jessica')
    cy.get('#signup-lastname').type('Salazar')
    cy.get('#signup-email').type('teste2@teste.com')
    cy.get('#signup-phone').type('11999999999')
    cy.get('#signup-password').type('Teste&122')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })
})