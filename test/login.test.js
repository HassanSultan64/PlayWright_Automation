const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../Pages/login.page');

test.describe('Server Management', () => {
    let loginPage = null;
    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page)
      });
    test('tc01: Login To SeaPlanner', async ({ page }) => {
      await loginPage.login("HSultan","Generation2121@")
    });
  });