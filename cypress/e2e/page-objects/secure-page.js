/// <reference types="cypress" />

export class SecurePage {
    checkMessage(txt){
        cy.get('#flash').contains(txt);
    }


}