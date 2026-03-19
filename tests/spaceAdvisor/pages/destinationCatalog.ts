import { type Page, type Locator , expect } from '@playwright/test';
import locators from '../pageElements/locators';

class HomePage {
    readonly page: Page;
    readonly catalog: Locator;
    readonly catalogCTA: Locator;

    constructor(page: Page) {
        this.page = page;
        this.catalog = page.locator(locators.CATALOG);
        this.catalogCTA = page.locator(locators.CATALOG_CTA);
        //TODO - Generate script to locate all 6, minimal code

    }
}