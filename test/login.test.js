const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../Pages/Login/login.page');


test.describe('Server Management', () => {
    let loginPage = null;
    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page)
      });
    test('tc01: Login To SeaPlanner @smoke', async ({ page }) => {
      await loginPage.login("HSultan","Generation2121@")
    });
    test('tc02: Login To SeaPlanner @regression', async ({ page }) => {
      await loginPage.login("HSultan","Generation2121@")
    });
  });