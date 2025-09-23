import { chromium, FullConfig } from '@playwright/test';
import LoginPage from '../../demoQA/pages/loginPage';
import uiPages from '../utils/uiPages';

async function globalSetup(config: FullConfig) {
  const user = process.env.USERNAME!;
  const password = process.env.PASSWORD!;
  const { baseURL, storageState } = config.projects[0].use;
  const browser = await chromium.launch({ headless: true, timeout: 10000 });
  const page = await browser.newPage();
  const onLoginPage = new LoginPage(page);

  await page.goto(baseURL+uiPages.bookStoreLogin);
  await onLoginPage.submitLogin(user, password);
  await onLoginPage.checkLoggedIn();
  await page.context().storageState({ path: storageState as string });
  await browser.close();
}

export default globalSetup;

// https://playwright.dev/docs/test-global-setup-teardown#capturing-trace-of-failures-during-global-setup
// https://playwright.dev/docs/trace-viewer
