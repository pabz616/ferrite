import { Page } from '@playwright/test';
import { buildUrl } from './urlBuilder';
import BookStorePage from '../pages/bookStorePage';
import LoginPage from '../pages/loginPage';
import ProfilePage from '../pages/profilePage';

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