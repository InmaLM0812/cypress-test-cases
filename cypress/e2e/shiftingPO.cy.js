/// <reference types="cypress" />

import { MainPage } from "./page-objects/main-page";
import { ShiftingContentPage } from "./page-objects/shifting-content-page";
import { MenuElementsExamplePage } from "./page-objects/menu-element-example-page";

describe("pruebas-ShiftingContent", ()=>{

    const mainPage = new MainPage();
    const shiftingContentPage = new ShiftingContentPage();
    const menuElementsExamplePage = new MenuElementsExamplePage();


    it('Menu elements are shifting correclty', () => {
        mainPage.visitMainPage();
        mainPage.clickShiftingContent();
        shiftingContentPage.clickMenuElementsExample();
        menuElementsExamplePage.checkElements("5");

  })

})