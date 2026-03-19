import { type Page, type Locator , expect } from '@playwright/test';
import locators from '../pageElements/locators';

class DestinationCatalog {
    readonly page: Page;
    readonly catalog: Locator;
    readonly catalogCTA: Locator;

    constructor(page: Page) {
        this.page = page;
        this.catalog = page.locator(locators.CATALOG);
        this.catalogCTA = page.locator(locators.CATALOG_CTA);
    }

async verifyCatalogUI() {
    await expect(this.catalog).toBeVisible();
    await expect(this.catalogCTA).toBeVisible();
}

async navigateToCatalog() {}
}

export default DestinationCatalog;