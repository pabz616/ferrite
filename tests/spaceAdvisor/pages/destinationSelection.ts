import { type Page, type Locator , expect } from '@playwright/test';
import locators from '../pageElements/locators';
const {DateTime } = require ('luxon')

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

async confirmSelectionUI(){
    //TODO
}

async selectDepartureDate(){
    this.departurePicker.click()
    this.selectDateDeparting()
    this.okButton.click()
}

async selectReturnDate(){
    this.returnPicker.click()
    this.selectDateReturning()
    this.okButton.click()
}

async selectFamily(){    
    this.passengerAdultPicker.click()
    this.twoAdults.click()
    this.passengerChildPicker.click()
    this.twoAdults.click()
 }

}

export default DestinationSelectionModule;