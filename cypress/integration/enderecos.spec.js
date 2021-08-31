/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'
context('Realizar alteração de endereço', () => {
    beforeEach(() => {
        cy.visit('minha-conta/'),
        cy.fixture ('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })
        
    });
   
    it('Devo realizar alteração de endereço - Chamando o support commands', () => {
        EnderecoPage.editarEnderecoFaturamento('Thalita','Alves', 'SPREAD - TECNOLOGIA', 'Brasil', 'Rua Augusta', '10025','São Paulo', 'São Paulo', '85894689', '13-96587568', 'teste@pageobject.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')

        // Cadastrar Endereço
    });   
});