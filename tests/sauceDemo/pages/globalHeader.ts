import { type Page, type Locator , expect } from '@playwright/test';

class HeaderPage {
    readonly page: Page;
    readonly #: Locator;

    constructor(page: Page) {
        this.page = page;
    }


async action(){
    await expect(this.something).toBeVisible;
  }
}

export default HeaderPage;