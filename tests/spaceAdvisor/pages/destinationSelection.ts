import { type Page, type Locator , expect } from '@playwright/test';
import locators from '../pageElements/locators';

class DestinationSelectionModule {
    readonly page: Page;
    readonly moduleTitle: Locator;
    readonly moduleByline: Locator;
    readonly departurePicker: Locator;
    readonly returnPicker: Locator;
    readonly passengerAdultPicker: Locator;
    readonly passengerChildPicker: Locator;
    readonly selectCTA: Locator;

    constructor(page: Page) {
        this.page = page;
         this.moduleTitle = page.locator(locators.DEST_MODULE_TITLE);
         this.moduleByline = page.locator(locators.DEST_MODULE_BYLINE);
         this.departurePicker = page.locator(locators.DEPARTURE_PICKER);
         this.returnPicker = page.locator(locators.RETURN_PICKER);
         this.passengerAdultPicker = page.locator(locators.PASSENGER_ADULT_PICKER);
         this.passengerChildPicker = page.locator(locators.PASSENGER_CHILD_PICKER);
         this.selectCTA = page.locator(locators.SELECT_CTA);
    }
}

export default DestinationSelectionModule;