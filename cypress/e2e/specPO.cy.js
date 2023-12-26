/// <reference types="cypress" />

import { MainPage } from "./page-objects/main-page";
import { LoginPage } from "./page-objects/login-page";
import { SecurePage } from "./page-objects/secure-page";

describe("pruebas-login", ()=>{

    const mainPage = new MainPage();
    const loginPage = new LoginPage();
    const secureAreaPage = new SecureAreaPage();


    it('The user is logged correctly', () => {
        mainPage.visitMainPage();
        mainPage.clickFormAuthentication();
        loginPage.enterUserName("tomsmith");
        loginPage.enterPassword("SuperSecretPassword!");
        loginPage.clickLoginButton();
        securePage.checkMessage("You logged into a secure area");

  })

})