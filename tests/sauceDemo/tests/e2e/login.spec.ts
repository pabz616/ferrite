import { test, expect } from '@playwright/test';
import HomePage from '../pages/homePage';


let onHomePage: HomePage;

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  onHomePage = new HomePage(page);
});

test.describe('Swag Labs - Login', () => {
  test('Home page has title', async ({ page }) => {
  await expect(page).toHaveTitle(/Swag Labs/);
  });
  
  test(`Unsuccessful login - blank login`, async () => {
    await onHomePage.submitLogin('', '');
    await onHomePage.confirmInvalidStateForRequiredFields();
  });
  
  test(`Unsuccessful login - invalid username`, async () => {
    await onHomePage.submitLogin('klajsdf', userData.password);
    await onHomePage.confirmUnsuccessfulLogin();
  });

  test(`Unsuccessful login invalid password`, async () => {
    await onHomePage.submitLogin(userData.username, 'sajlsdf');
    await onHomePage.confirmUnsuccessfulLogin();
  });

  test(`Unsuccessful login - exposed admin login`, async () => {
    await onHomePage.submitLogin('admin', 'password');
    await onHomePage.confirmUnsuccessfulLogin();
  });
  
  test(`Unsuccessful login - XSS check at username input`, async () => {
    await onHomePage.submitLogin(userData.script, userData.password);
    await onHomePage.confirmUnsuccessfulLogin();
  });

  test(`Unsuccessful login - XSS check at password input`, async () => {
    await onHomePage.submitLogin(userData.username, userData.script);
    await onHomePage.confirmUnsuccessfulLogin();
  });
});








