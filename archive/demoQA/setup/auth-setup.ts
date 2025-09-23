import { test as setup, type Page } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import uiPages from '../utils/uiPages';

const adminFile = '.auth/admin.json';

setup('authenticate as admin', async ({ page }) => {
  const user = process.env.USERNAME_ADMIN!;
  const password = process.env.PASSWORD!;
  await submitLogin(page, user, password);

  await page.context().storageState({ path: adminFile });
});

const userFile = '.auth/user.json';

setup('authenticate as user', async ({ page }) => {
    const user = process.env.USERNAME_USER!;
    const password = process.env.PASSWORD!;
    await submitLogin(page, user, password);
    await page.context().storageState({ path: userFile });
});

async function submitLogin(page: Page, user:string, password: string) {
    const baseURL = setup.info().project.use.baseURL!;
    const loginPage = new LoginPage(page);
  
    await page.goto(baseURL!+uiPages.login);
    await loginPage.submitLogin(user, password);
    await page.waitForURL(baseURL+uiPages.login);
    await loginPage.checkLoggedIn();
}