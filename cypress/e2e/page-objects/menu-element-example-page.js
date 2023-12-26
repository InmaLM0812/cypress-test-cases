/// <reference types="cypress" />

export class MenuElementsExamplePage {
    checkElements(txt){
        cy.get("ul").find("li").should("have.length", txt);
    }


}