import { type Page, type Locator , expect } from '@playwright/test';
import locators from '../pageElements/locators';
import testData from '../utils/testData';

class CheckoutModule {
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

async confirmCheckoutFormUI(){
    expect(this.formNameInput).toBeVisible
    expect(this.formNameInput).toHaveAttribute('placeholder', 'Name');
    expect(this.formNameInput).toBeEmpty
    expect(this.formNameInput).toBeEditable
    //
    expect(this.formEmailInput).toBeVisible
    expect(this.formEmailInput).toHaveAttribute('placeholder', 'Email Address');
    expect(this.formEmailInput).toBeEmpty
    expect(this.formEmailInput).toBeEditable
    //
    expect(this.formSSNInput).toBeVisible
    expect(this.formSSNInput).toHaveAttribute('placeholder', 'Social Security Number');
    expect(this.formSSNInput).toBeEmpty
    expect(this.formSSNInput).toBeEditable
    //
    expect(this.formPhoneInput).toBeVisible
    expect(this.formPhoneInput).toHaveAttribute('placeholder', 'Phone Number');
    expect(this.formPhoneInput).toBeEmpty
    expect(this.formPhoneInput).toBeEditable
    //
    expect(this.formFileUpload).toBeVisible
    expect(this.formFileUpload).toBeEnabled
    expect(this.formFileUpload).toHaveText('Drag and drop your health insurance or click to upload')
}

async completeCheckoutForm(){
    this.formNameInput.fill(testData.sa_traveler_name)
    this.formEmailInput.fill(testData.sa_traveler_email)
    this.formSSNInput.fill(testData.sa_traveler_ssn)
    this.formPhoneInput.fill(testData.sa_traveler_tel)
}

async confirmOrderSummaryUI(){
    expect(this.orderSummaryTitle).toBeVisible
    //
    expect(this.dateElement).toBeVisible
    expect(this.dateValue).toBeVisible
    expect(this.dateValue).not.toHaveText('01/01/1970')
    //
    expect(this.travelerElement).toBeVisible
    expect(this.travelerValue).toBeVisible
    expect(this.travelerValue).not.toHaveText('$0')
    //
    expect(this.promoCodeInput).toBeVisible
    expect(this.promoCodeInput).toBeEmpty
    expect(this.promoCodeInput).toHaveAttribute('placeholder', 'I have a promo code');
    expect(this.promoCodeInput).toBeEditable
    //
    expect(this.promoCodeCTA).toBeVisible
    expect(this.promoCodeCTA).toBeDisabled
    //
    expect(this.termsCheckbox).not.toBeChecked
    //
    expect(this.submitCTA).toBeVisible
    expect(this.submitCTA).toBeDisabled
}

async enterPromoCode(){
    //BEFORE ENTERING A VALUE
    expect(this.promoCodeInput).toBeEmpty
    expect(this.promoCodeCTA).toBeDisabled

    this.promoCodeInput.fill(testData.sa_promo)
    
    //AFTER ENTERING A VALUE
    expect(this.promoCodeCTA).toBeEnabled
    this.promoCodeCTA.click()
}

async agreeToTerms(){
    this.termsCheckbox.check
}

async placeOrder(){
    expect(this.submitCTA).toBeEnabled
    this.submitCTA.click()
}

}

export default CheckoutModule;