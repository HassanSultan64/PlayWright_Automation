
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../Pages/login.page');
const { InductionPage}= require('../Pages/Induction.page')

test.describe('Induction test cases', () => {
    let loginPage = null;
    let inductionPage=null;

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page)
        inductionPage=new InductionPage(page)
              
      });
    test('tc01: Click to induction  ', async ({ page }) => {
      await loginPage.login("HSultan","Generation2121@")
      await inductionPage.clickInduction();
    });

  });