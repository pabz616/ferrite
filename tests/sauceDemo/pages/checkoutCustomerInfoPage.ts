import { type Page, type Locator , expect } from '@playwright/test';

class CustomerInfoPage {
    readonly page: Page;
    readonly #: Locator;

    constructor(page: Page) {
        this.page = page;
    }


async action(){
    await expect(this.something).toBeVisible;
  }
}

export default CustomerInfoPage;