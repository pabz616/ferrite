import { type Page, type Locator , expect } from '@playwright/test';
import locators from '../pageElements/locators';

class HomePage {
    readonly page: Page;
    readonly headerTitle: Locator;
    readonly loginCTA: Locator;

    constructor(page: Page) {
        this.page = page;
    }
}