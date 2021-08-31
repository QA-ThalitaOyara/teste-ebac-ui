/// <reference types="cypress" />

describe('Funcionalidade Página de predutos', () =>{
    
    beforeEach(() => {
        cy.visit('produtos/')
    });
    afterEach(() => {
        //cy.screenshot()
    }) 

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]') // para identificar um elemento poderia usar # = ID, . = Class
        // e quanto coloco entre [] posso colocar id, class, css e etc
        //.first() para capturar o primeiro elemento da lista
        //.last() para capturar o ultimo elemento da lista
        //.eq(3) para capturar o 4 item da lista
        .contains('Ariel Roll Sleeve Sweatshirt').click() // para capturar o elemento pelo nome
    });

    it('Deve adicionar o produto ao carrinho', () => {
        cy.get('[class="product-block grid"]').contains('Ariel Roll Sleeve Sweatshirt').click()
        cy.get('.product_title').should('contain', 'Ariel Roll Sleeve Sweatshirt')
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(5)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 5)
        cy.get('.woocommerce-message').should('contain','5 × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')

    });

    it('Deve adicionar o produto ao carrinho - Fazendo Uso de Variaveis', () => {
        var quantidade = 5

        cy.get('[class="product-block grid"]').contains('Ariel Roll Sleeve Sweatshirt').click()
        cy.get('.product_title').should('contain', 'Ariel Roll Sleeve Sweatshirt')
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')

    });

    it.only('Deve adicionar o produto ao carrinho - Usando comandos customizados', () => {
        cy.addProdutos('Aero Daily Fitness Tee', 'S', 'Brown', 3)
    });

    it.only('Deve adicionar o produto ao carrinho - Usando comandos customizados', () => {
        cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'M', 'Green', 5)
    });

});
