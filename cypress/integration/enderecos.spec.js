/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'
import DadosEndereco from '../fixtures/enderecos.json'

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

    });   
    it('Devo realizar alteração de endereço - Chamando Arquivo de Dados Json', () => {
        EnderecoPage.editarEnderecoFaturamento(
            DadosEndereco[0].nome,
            DadosEndereco[0].sobrenome,
            DadosEndereco[0].empresa,
            DadosEndereco[0].pais,
            DadosEndereco[0].nomeEndereco,
            DadosEndereco[0].numeroEndereco,
            DadosEndereco[0].cidade,
            DadosEndereco[0].estado,
            DadosEndereco[0].cep,
            DadosEndereco[0].telefone,
            DadosEndereco[0].email
        )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
    });
    it.only('Deve realizar alteração no endereço de entrega - Usando Page Objects', () => {
        EnderecoPage.editarEnderecoEntrega('Teste','Sobrenome','TESTE - 123','Bulgária','TESTE ENDERECO','123456','Teste','Burgas','12345789')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')

    });
    it.only('Deve realizar alteração no endereço de entrega - Usando Dados Arquivo Json', () => {
        EnderecoPage.editarEnderecoEntrega(
            DadosEndereco[1].nome,
            DadosEndereco[1].sobrenome,
            DadosEndereco[1].empresa,
            DadosEndereco[1].pais,
            DadosEndereco[1].nomeEndereco,
            DadosEndereco[1].numeroEndereco,
            DadosEndereco[1].cidade,
            DadosEndereco[1].estado,
            DadosEndereco[1].cep
        )
    });
});