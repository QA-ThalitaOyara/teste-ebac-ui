/// <reference types="cypress" />
var faker = require('faker');
describe('Funcionalidade de Pré Cadastro', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta/')
    });
    afterEach(() => {
        //cy.screenshot()
    });
    it('Deve completar o pré cadastro com sucesso', () => {
        cy.get('.register > :nth-child(1) > label').type(faker.internet.email())
        cy.get('#reg_password').type('Submit0205@')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.name.firstName())
        cy.get('#account_last_name').type(faker.name.lastName())
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    }) 
    it('Deve completar o pré cadastro com sucesso - Utilizando variavéis com -let- para os Fakers', () => {
        let emailFaker = faker.internet.email()
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker =  faker.name.lastName()


        cy.get('.register > :nth-child(1) > label').type(emailFaker)
        cy.get('#reg_password').type('Submit0205@')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    }) 

    it.only('Realizar pré-cadastro com sucesso - Usando Comando customizado', () => {
        let emailFaker = faker.internet.email()
        cy.preCadastro(emailFaker, 'senha!@forte', 'Thalita','Alves')
    });
});
