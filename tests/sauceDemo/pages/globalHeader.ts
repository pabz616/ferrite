import { type Page, type Locator , expect } from '@playwright/test';
import siteCopy from '../data/siteCopy';
import locators from './locators';

class GlobalHeader {
    readonly page: Page;
    readonly appLogo: Locator;
    readonly cartIcon: Locator;
    readonly menuButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.appLogo = page.locator('//div[@class="app_logo"]');
        this.cartIcon = page.locator(locators.CART);
        this.menuButton = page.locator('//button[@id="react-burger-menu-btn"]')
    }


async checkUI(){
    await expect(this.appLogo).toBeVisible;
    //
    await expect(this.cartIcon).toBeVisible;
    await expect(this.cartIcon).toBeEnabled;
    //
    await expect(this.appLogo).toHaveText(siteCopy.appName);
    //
    await expect(this.menuButton).toBeVisible;
    await expect(this.menuButton).toBeEnabled;
  }

async clickCartIcon(){await this.cartIcon.click()};

async clickMenuButton(){await this.menuButton.click()};

};

export default GlobalHeader;