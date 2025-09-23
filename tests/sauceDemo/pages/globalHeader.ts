import { type Page, type Locator , expect } from '@playwright/test';

class GlobalHeader {
    readonly page: Page;
    readonly cartIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartIcon = page.locator('//a[@data-test="shopping-cart-link"]');
    }


async checkUI(){
    await expect(this.cartIcon).toBeVisible;
  }

async clickCartIcon(){
    this.cartIcon.click();
}


}

export default GlobalHeader;