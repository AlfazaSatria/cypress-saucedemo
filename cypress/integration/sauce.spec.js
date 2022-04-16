
import { CommonPage, LoginPage } from '../support/pages';

context('Login', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/')
    })

    describe('User', () => {
        it('can login with standard user', () => {
          LoginPage.UserName()
            .type('standard_user')
            .should('have.value', 'standard_user')
    
          LoginPage.Password()
            .type('secret_sauce')
            .should('have.value', 'secret_sauce')
    
          LoginPage.LoginButton().click()
    
        })

        
        
      })

    

})

