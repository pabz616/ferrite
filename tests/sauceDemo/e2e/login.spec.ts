import { test, expect } from '@playwright/test';
import HomePage from '../pages/homePage.ts';
import userData from '../data/userData';

let onHomePage: HomePage;

test.beforeEach(async ({ page }) => {
  await page.goto(userData.appUrl);
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
    await onHomePage.confirmUnsuccessfulLogin(userData.invalidAcct);
  });

  test(`Unsuccessful login - invalid password`, async () => {
    await onHomePage.submitLogin(userData.username, 'sajlsdf');
    await onHomePage.confirmUnsuccessfulLogin(userData.invalidAcct);
  });

  test(`Unsuccessful login - Locked out user`, async () => {
    await onHomePage.submitLogin('locked_out_user', userData.password);
    await onHomePage.confirmUnsuccessfulLogin(userData.lockedOutAcct);
  });

  test(`Unsuccessful login - Problematic user`, async ({ page }) => {
    await onHomePage.submitLogin('problem_user', userData.password);
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });

  test(`Unsuccessful login - Glitched user`, async ({ page }) => {
    await onHomePage.submitLogin('performance_glitch_user', userData.password);
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });

  test(`Unsuccessful login - Error user`, async ({ page }) => {
    await onHomePage.submitLogin('error_user', userData.password);
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });


  test(`Unsuccessful login - Visual user`, async ({ page }) => {
    await onHomePage.submitLogin('visual_user', userData.password);
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });


  test(`Unsuccessful login - exposed admin login`, async () => {
    await onHomePage.submitLogin('admin', 'password');
    await onHomePage.confirmUnsuccessfulLogin(userData.invalidAcct);
  });
  
  test(`Unsuccessful login - XSS check at username input`, async () => {
    await onHomePage.submitLogin(userData.script, userData.password);
    await onHomePage.confirmUnsuccessfulLogin(userData.invalidAcct);
  });

  test(`Unsuccessful login - XSS check at password input`, async () => {
    await onHomePage.submitLogin(userData.username, userData.script);
    await onHomePage.confirmUnsuccessfulLogin(userData.invalidAcct);
  });
});








