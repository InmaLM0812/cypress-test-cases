/// <reference types="cypress" />

export class MainPage {
    visitMainPage(){
        cy.visit("https://the-internet.herokuapp.com/");
    }

    clicarFormAuthentication() {
        cy.get(":nth-child(21) > a").click();
      }

     clickShiftingContent(){
        cy.get(':nth-child(39) > a').click();

     }


}
