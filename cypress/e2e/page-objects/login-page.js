/// <reference types="cypress" />

export class LoginPage {
    enterUserName(txt){
        cy.get('#username').type(txt);
    }

     enterPassword(txt){
        cy.get('#password').type(txt);

     }

    clickLoginButton(){
        cy.get('.fa').click();
    }

}