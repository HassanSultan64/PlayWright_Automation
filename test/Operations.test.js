
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../Pages/login.page');
const { OperationsPage}= require('../Pages/Operations.page')

test.describe('Operations test cases', () => {
    let loginPage = null;
    let operationPage=null;

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page)
        operationPage=new OperationsPage(page)
              
      });
    test('tc01: Click to Map  ', async ({ page }) => {
      await loginPage.login("HSultan","Generation2121@")
      await operationPage.ClickOnMap();
    });

  });