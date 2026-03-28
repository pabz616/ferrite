import { type Page, type Locator , expect } from '@playwright/test';
import locators from '../pageElements/locators';

class FooterModule {
    readonly page: Page;
    readonly socialLinks: Locator;
    readonly credits: Locator;
    readonly topLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.socialLinks = page.locator(locators.SOCIAL_LINKS);
        this.credits = page.locator(locators.CREDITS);
        this.topLink = page.locator(locators.TOP_LINK);
    }

   async verifyFooterUI(){
    expect(this.socialLinks).toBeVisible();
    expect(this.credits).toBeVisible();
    expect(this.topLink).toBeVisible();
   } 
}

export default FooterModule;