import { type Page, type Locator , expect } from '@playwright/test';
import locators from '../pageElements/locators';

class HomePage {
    readonly page: Page;
    readonly filterModuleTitle: Locator;
    readonly filterModuleByline: Locator;
    readonly filterLaunchSite: Locator;
    readonly filterPlanetColor: Locator;
    readonly filterPriceRange: Locator;

    constructor(page: Page) {
        this.page = page;
        this.filterModuleTitle = page.locator(locators.FILTER_MODULE_TITLE);
        this.filterModuleByline = page.locator(locators.FILTER_MODULE_BYLINE);
        this.filterLaunchSite = page.locator(locators.FILTER_LAUNCH_SITE);
        this.filterPlanetColor = page.locator(locators.FILTER_PLANET_COLOR);
        this.filterPriceRange = page.locator(locators.FILTER_PRICE_RANGE);
    }
}