import { type Page, type Locator , expect } from '@playwright/test';
import locators from '../pageElements/locators';

class HeaderModule {
    readonly page: Page;
    readonly headerTitle: Locator;
    readonly loginCTA: Locator;

    constructor(page: Page) {
        this.page = page;
        this.headerTitle = page.locator(locators.HEADER_TITLE);
        this.loginCTA = page.locator(locators.LOGIN_CTA);
    }
}