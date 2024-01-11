import { test } from '@playwright/test';
import LoginPage from '../../demoQA/pages/loginPage';
import pages from '../../demoQA/utils/pages';
import userData from '../../demoQA/data/userData';

const userName = process.env.USERNAME!;
const password = process.env.PASSWORD!;
let onLoginPage: LoginPage;

test.use({ storageState: { cookies: [], origins: [] } }); // doesn't share the logged in session
// test.use({ storageState: undefined }); // https://github.com/microsoft/playwright/issues/17396
test.describe.configure({ mode: 'serial' });

test.beforeEach(async ({ page }) => {
  await page.goto('https://demoqa.com/login');
  onLoginPage = new LoginPage(page);
});

test.describe('Book Store - Login', () => {
  test(`Successful Login`, async () => {
    await onLoginPage.submitLogin(userData.username, userData.password);
    await onLoginPage.checkLoggedIn();
  });

  test(`Unsuccessful login - blank login`, async () => {
    await onLoginPage.submitLogin('', '');
    await onLoginPage.confirmInvalidStateForRequiredFields();
  });

  test(`Unsuccessful login - invalid username`, async () => {
    await onLoginPage.submitLogin('klajsdf', userData.password);
    await onLoginPage.checkInvalidCredentials();
  });

  test(`Unsuccessful login invalid password`, async () => {
    await onLoginPage.submitLogin(userData.username, 'sajlsdf');
    await onLoginPage.checkInvalidCredentials();
  });

  test(`Unsuccessful login - exposed admin login`, async () => {
    await onLoginPage.submitLogin('admin', 'password');
    await onLoginPage.checkInvalidCredentials();
  });
  
  test(`Unsuccessful login - XSS check at username input`, async () => {
    await onLoginPage.submitLogin(userData.script, userData.password);
    await onLoginPage.checkInvalidCredentials();
  });

  test(`Unsuccessful login - XSS check at password input`, async () => {
    await onLoginPage.submitLogin(userData.username, userData.script);
    await onLoginPage.checkInvalidCredentials();
  });
});
