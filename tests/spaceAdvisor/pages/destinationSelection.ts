import { type Page, type Locator , expect } from '@playwright/test';
import locators from '../pageElements/locators';
const {DateTime } = require ('luxon')
import testData from '../utils/testData';

class DestinationSelectionModule {
    readonly page: Page;
    readonly moduleTitle: Locator;
    readonly moduleByline: Locator;
    readonly departurePicker: Locator;
    readonly returnPicker: Locator;
    readonly okButton: Locator;
    readonly passengerAdultPicker: Locator;
    readonly twoAdults: Locator;
    readonly twoChildren: Locator;
    readonly passengerChildPicker: Locator;
    readonly selectCTA: Locator;

    selectDateDeparting(){
        let departureDate = DateTime.now.plus({ days: 1 });
        return this.page.locator(`//div[contains(@class,"theme__day___3cb3g")]${departureDate}`).click
    }

    selectDateReturning(){
        let returnDate = DateTime.now.plus({ days: 5 });
        return this.page.locator(`//div[contains(@class,"theme__day___3cb3g")]${returnDate}`).click()
    }

    constructor(page: Page) {
        this.page = page;
         this.moduleTitle = page.locator(locators.DEST_MODULE_TITLE);
         this.moduleByline = page.locator(locators.DEST_MODULE_BYLINE);
         this.departurePicker = page.locator(locators.DEPARTURE_PICKER);
         this.returnPicker = page.locator(locators.RETURN_PICKER);
         this.okButton = page.locator(locators.PICKER_CTA);
         this.passengerAdultPicker = page.locator(locators.PASSENGER_ADULT_PICKER);
         this.twoAdults = page.locator(locators.ADULTS_2)
         this.passengerChildPicker = page.locator(locators.PASSENGER_CHILD_PICKER);
         this.twoChildren = page.locator(locators.CHILDREN_2)
         this.selectCTA = page.locator(locators.SELECT_CTA);
    }

async verifySelectionUI(){
    await expect(this.page.getByText(testData.sa_HEADER)).toBeVisible
    await expect(this.page.getByText(testData.sa_Banner)).toBeVisible

    // await expect(this.page.getByText('Departing')).toBeVisible();
    // await expect(this.page.getByText('Returning')).toBeVisible();
    // await expect(this.page.getByText('Adults(18+)')).toBeVisible();
    // await expect(this.page.getByText('Children(0-7)')).toBeVisible();
    // await expect(this.selectCTA).toBeVisible();
}

async selectDepartureDate(){
    await this.departurePicker.click()
    await this.selectDateDeparting()
    await this.okButton.click()
}

async selectReturnDate(){
    await this.returnPicker.click()
    await this.selectDateReturning()
    await this.okButton.click()
}

async selectFamily(){    
    await this.passengerAdultPicker.click()
    await this.twoAdults.click()
    await this.passengerChildPicker.click()
    await this.twoAdults.click()
 }

}

export default DestinationSelectionModule;