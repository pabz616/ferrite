import { type Page, type Locator , expect } from '@playwright/test';
import locators from '../pageElements/locators';
import testData from '../utils/testData';

class HeaderModule {
    readonly page: Page;
    readonly headerTitle: Locator;
    readonly loginCTA: Locator;
    readonly loggedInUser: Locator;
    readonly logoutCTA: Locator;

    constructor(page: Page) {
        this.page = page;
        this.headerTitle = page.locator(locators.HEADER_TITLE);
        this.loginCTA = page.locator(locators.LOGIN_CTA);
        this.loggedInUser = page.locator(locators.LOGGED_IN_USER);
        this.logoutCTA = page.locator(locators.LOGOUT_CTA);
    }

async verifyHeaderUI(){
    await expect(this.page.getByText(testData.sa_Banner)).toBeVisible
    await expect(this.page.getByText('Login')).toBeVisible
    await expect(this.page.getByText('Login')).toBeEnabled
  }

async clickLoginCTA(){
    await this.loginCTA.click();
  }

async confirmUserIsAuthenticated(){
    await expect(this.page.getByText(testData.sa_Banner)).toHaveText('HELLO, JOHN')
    await expect(this.loggedInUser).toBeVisible();
}

async clickLogOutCTA(){
    await this.loggedInUser.click();
    await this.logoutCTA.click();
}

}

export default HeaderModule;