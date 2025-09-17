import { type Page, type Locator , expect } from '@playwright/test';

class AboutPage {
    readonly page: Page;
    readonly #: Locator;

    constructor(page: Page) {
        this.page = page;
    }


async action(){
    await expect(this.something).toBeVisible;
  }
}

export default AboutPage;