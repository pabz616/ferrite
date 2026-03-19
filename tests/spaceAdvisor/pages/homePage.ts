import { type Page, type Locator , expect } from '@playwright/test';
import locators from '../pageElements/locators';

class HomePage {
    readonly page: Page;
    readonly headerTitle: Locator;
    readonly loginCTA: Locator;
    readonly moduleTitle: Locator;
    readonly moduleByline: Locator;
    readonly departurePicker: Locator;
    readonly returnPicker: Locator;
    readonly passengerAdultPicker: Locator;
    readonly passengerChildPicker: Locator;
    readonly selectCTA: Locator;
    readonly filterModuleTitle: Locator;
    readonly filterModuleByline: Locator;
    readonly filterLaunchSite: Locator;
    readonly filterPlanetColor: Locator;
    readonly filterPriceRange: Locator;
    readonly catalog: Locator;
    readonly catalogCTA: Locator;
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
    readonly loginFormTitle: Locator;
    readonly loginFormUsernameInput: Locator;
    readonly loginFormPasswordInput: Locator;
    readonly loginFormSubmitCTA: Locator;
    readonly loginFormCancelCTA: Locator;
    readonly loginError1: Locator;
    readonly loginError2: Locator;
    readonly socialLinks: Locator;
    readonly credits: Locator;
    readonly topLink: Locator;

    constructor(page: Page) {
        this.page = page;

    //HEADER MODULE
        this.headerTitle = page.locator(locators.HEADER_TITLE);
        this.loginCTA = page.locator(locators.LOGIN_CTA);

    //DESTINATION SELECTION MODULE
         this.moduleTitle = page.locator(locators.DEST_MODULE_TITLE);
         this.moduleByline = page.locator(locators.DEST_MODULE_BYLINE);
         this.departurePicker = page.locator(locators.DEPARTURE_PICKER);
         this.returnPicker = page.locator(locators.RETURN_PICKER);
         this.passengerAdultPicker = page.locator(locators.PASSENGER_ADULT_PICKER);
         this.passengerChildPicker = page.locator(locators.PASSENGER_CHILD_PICKER);
         this.selectCTA = page.locator(locators.SELECT_CTA);
            
    //DESTINATION FILTER MODULE
        this.filterModuleTitle = page.locator(locators.FILTER_MODULE_TITLE);
        this.filterModuleByline = page.locator(locators.FILTER_MODULE_BYLINE);
        this.filterLaunchSite = page.locator(locators.FILTER_LAUNCH_SITE);
        this.filterPlanetColor = page.locator(locators.FILTER_PLANET_COLOR);
        this.filterPriceRange = page.locator(locators.FILTER_PRICE_RANGE);

    //DESTINATION CATALOG MODULE
        this.catalog = page.locator(locators.CATALOG);
        this.catalogCTA = page.locator(locators.CATALOG_CTA);

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

    //LOGIN MODULE
        this.loginFormTitle = page.locator(locators.LOGIN_FORM_TITLE);
        this.loginFormUsernameInput = page.locator(locators.LOGIN_FORM_USERNAME_INPUT);
        this.loginFormPasswordInput = page.locator(locators.LOGIN_FORM_PASSWORD_INPUT);
        this.loginFormSubmitCTA = page.locator(locators.LOGIN_FORM_SUBMIT_CTA);
        this.loginFormCancelCTA = page.locator(locators.LOGIN_FORM_CANCEL_CTA);
        this.loginError1 = page.locator(locators.LOGIN_ERROR_1);
        this.loginError2 = page.locator(locators.LOGIN_ERROR_2);

    //FOOTER MODULE
        this.socialLinks = page.locator(locators.SOCIAL_LINKS);
        this.credits = page.locator(locators.CREDITS);
        this.topLink = page.locator(locators.TOP_LINK);

    }
}