
import { CommonPage, LoginPage } from '../support/pages';

context('Login', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    describe('User', () => {
        it('journey user', () => {
            LoginPage.UserName()
                .type('standard_user')
                .should('have.value', 'standard_user')

            LoginPage.Password()
                .type('secret_sauce')
                .should('have.value', 'secret_sauce')

            LoginPage.LoginButton().click()

            CommonPage.InventoryItems()
                .first().as('inventoryItem')

            

            cy.get('@inventoryItem')
                .find('.inventory_item_price')
                .should('have.text', '$29.99')



            CommonPage.MainBurgerButton()
                .invoke('text')
                .should('match', /Menu/i)



            let inCart = 0;
            CommonPage.InventoryItems()
                .each(($el, index, $list) => {
                    if (index % 2 == 0) {
                        cy.wrap($el).find('.btn_primary')
                            .click()


                        inCart++;
                    }
                })

                CommonPage.CartButton().click()
                CommonPage.CheckoutButton().click()

                let firstName = 'Alfaza';
                let lastname = 'Satria';
                let postal_code= '61481';

                cy.get('#first-name')
                .type(firstName)
                .should('have.value', firstName)
        
              cy.get('#last-name')
                .type(lastname)
                .should('have.value', lastname)
        
              cy.get('#postal-code')
                .type(postal_code)
                .should('have.value', postal_code)

                CommonPage.OrderButton().click()
                CommonPage.OrderButton().click()
               
        })



    })





})

