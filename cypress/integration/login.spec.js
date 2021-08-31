/// <reference types="cypress" />

const perfil = require("../fixtures/perfil.json"); // Para excecutar o teste com Arquivo de dados, 
                                        //para o teste chamando diretamente a fixture, não precisa

context('Funcionalidade Login', () =>{
    
    beforeEach(() => {
        cy.visit('minha-conta/')
    });
    afterEach(() => {
        cy.screenshot()
    });
    it('Deve fazer login com sucesso', () => {
        
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac')

    })

    it('Deve fazer login com sucesso - Usando arquivo de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
    });   
    
    it.only('Deve fazer login com sucesso - Usando Fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log: false}) // {log: false} serve para não mostrar a senha no painel do cypress
            cy.get('.woocommerce-form > .button').click()

            cy.get('.page-title').should('contain', 'Minha conta')
        })
    });
    it('Deve apresentar mensagem de erro para usuário inválido', () => {
        
        
        cy.get('#username').type('teste01_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido.')
        

    })
    it('Deve apresentar mensagem de erro para senha inválida', () => {
        
        
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste123.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta')
        

    })
})