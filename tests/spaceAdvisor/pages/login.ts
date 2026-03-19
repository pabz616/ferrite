import { type Page, type Locator , expect } from '@playwright/test';
import locators from '../pageElements/locators';

class LoginModule {
    readonly page: Page;
    readonly loginFormTitle: Locator;
    readonly loginFormUsernameInput: Locator;
    readonly loginFormPasswordInput: Locator;
    readonly loginFormSubmitCTA: Locator;
    readonly loginFormCancelCTA: Locator;
    readonly loginError1: Locator;
    readonly loginError2: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginFormTitle = page.locator(locators.LOGIN_FORM_TITLE);
        this.loginFormUsernameInput = page.locator(locators.LOGIN_FORM_USERNAME_INPUT);
        this.loginFormPasswordInput = page.locator(locators.LOGIN_FORM_PASSWORD_INPUT);
        this.loginFormSubmitCTA = page.locator(locators.LOGIN_FORM_SUBMIT_CTA);
        this.loginFormCancelCTA = page.locator(locators.LOGIN_FORM_CANCEL_CTA);
        this.loginError1 = page.locator(locators.LOGIN_ERROR_1);
        this.loginError2 = page.locator(locators.LOGIN_ERROR_2);
    }
}