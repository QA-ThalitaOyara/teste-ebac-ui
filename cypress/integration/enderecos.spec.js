/// <reference types="cypress" />

context('Realizar alteração de endereço', () => {
    beforeEach(() => {
        cy.visit('minha-conta/'),
        cy.fixture ('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })
        
    });
   
    it('Devo realizar alteração de endereço - Chamando o support commands', () => {

        // Cadastrar Endereço
    });   
});