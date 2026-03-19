import { type Page, type Locator , expect } from '@playwright/test';
import locators from '../pageElements/locators';

class HomePage {
    readonly page: Page;
    readonly formTitle: Locator;
    readonly formNameInput: Locator;
    readonly formEmailInput: Locator;
    readonly formSSNInput: Locator;
    readonly formPhoneInput: Locator;
    readonly formFileUpload: Locator;
    readonly orderSummaryTitle: Locator;
    readonly dateElement: Locator;
    readonly dateValue: Locator;
    readonly travelerElement: Locator;
    readonly travelerValue: Locator;
    readonly promoCodeInput: Locator;
    readonly promoCodeCTA: Locator;
    readonly termsCheckbox: Locator;
    readonly totalValue: Locator;
    readonly submitCTA: Locator;
    readonly planetDetailsTitle: Locator;
    readonly planetDetailsByline: Locator;
    readonly planetDetailsImage: Locator;

    constructor(page: Page) {
        this.page = page;

    //CHECKOUT MODULE
        this.formTitle = page.locator(locators.FORM_TITLE);
        this.formNameInput = page.locator(locators.FORM_NAME_INPUT);
        this.formEmailInput = page.locator(locators.FORM_EMAIL_INPUT);
        this.formSSNInput = page.locator(locators.FORM_SSN_INPUT);
        this.formPhoneInput = page.locator(locators.FORM_PHONE_INPUT);
        this.formFileUpload = page.locator(locators.FORM_FILE_UPLOAD);

    //ORDER SUMMARY MODULE
        this.orderSummaryTitle = page.locator(locators.ORDER_SUMMARY_TITLE);
        this.dateElement = page.locator(locators.DATE_ELEMENT);
        this.dateValue = page.locator(locators.DATE_VALUE);
        this.travelerElement = page.locator(locators.TRAVELER_ELEMENT);
        this.travelerValue = page.locator(locators.TRAVELER_VALUE);
        this.promoCodeInput = page.locator(locators.PROMO_CODE_INPUT);
        this.promoCodeCTA = page.locator(locators.PROMO_CODE_CTA);
        this.termsCheckbox = page.locator(locators.TERMS_CHECKBOX);
        this.totalValue = page.locator(locators.TOTAL_VALUE);
        this.submitCTA = page.locator(locators.SUBMIT_CTA);

    //PLANET DETAILS MODULE
        this.planetDetailsTitle = page.locator(locators.PLANET_DETAILS_TITLE);
        this.planetDetailsByline = page.locator(locators.PLANET_DETAILS_BYLINE);
        this.planetDetailsImage = page.locator(locators.PLANET_DETAILS_IMAGE);
    }
}