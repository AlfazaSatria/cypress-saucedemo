export let CommonPage = {
    MainBurgerButton: () => cy.get('.bm-burger-button button'),
    InventoryItems: () => cy.get('.inventory_list .inventory_item'),
    CartListItems: () => cy.get('.cart_list .cart_item'),
    CartButton: () => cy.get('#shopping_cart_container .shopping_cart_badge'),
    CheckoutButton: () => cy.get('.checkout_button'),
    OrderButton: () => cy.get('.cart_button'),

  };