import { Page } from '@playwright/test';
import { buildUrl } from '../utils/urlBuilder';
import BookStorePage from '../../demoQA/pages/bookStorePage';
import LoginPage from '../../demoQA/pages/loginPage';
import ProfilePage from '../../demoQA/pages/profilePage';

async function beforeEach(
  page: Page,
  PageObjectParam: LoginPage | BookStorePage | ProfilePage,
  targetPage: string,
  params?: Record<any, any>
) {
  await page.goto(buildUrl(targetPage, params));
  const pageObject = await new PageObjectParam(page);
  return pageObject;
}

export default { beforeEach };