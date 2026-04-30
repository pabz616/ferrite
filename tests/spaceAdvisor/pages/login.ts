import { type Page, type Locator , expect } from '@playwright/test';
import locators from '../pageElements/locators';
import testData from '../utils/testData';

class LoginModule {
    readonly page: Page;
    readonly loginFormTitle: Locator;
    readonly loginFormByline: Locator;
    readonly loginFormUsernameInput: Locator;
    readonly loginFormPasswordInput: Locator;
    readonly loginFormSubmitCTA: Locator;
    readonly loginFormCancelCTA: Locator;
    readonly loginError1: Locator;
    readonly loginError2: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginFormTitle = page.locator(locators.LOGIN_FORM_TITLE);
        this.loginFormByline = page.locator(locators.LOGIN_FORM_BYLINE);
        this.loginFormUsernameInput = page.locator('xpath=(//input[@type="text"])[5]');
        this.loginFormPasswordInput = page.locator('//input[@type="password"]');
        this.loginFormSubmitCTA = page.locator(locators.LOGIN_FORM_SUBMIT_CTA);
        this.loginFormCancelCTA = page.locator(locators.LOGIN_FORM_CANCEL_CTA);
        this.loginError1 = page.locator(locators.LOGIN_ERROR_1);
        this.loginError2 = page.locator(locators.LOGIN_ERROR_2);
    }

async verifyLoginUI(){
    await expect(this.loginFormTitle).toBeVisible();
    await expect(this.loginFormTitle).toHaveText(testData.LoginTitleCopy);
    //
    await expect(this.loginFormByline).toBeVisible();
    await expect(this.loginFormByline).toHaveText(testData.LoginBylineCopy);
    //
    await expect(this.loginFormUsernameInput).toBeVisible();
    await expect(this.loginFormUsernameInput).toBeEmpty();
    await expect(this.loginFormUsernameInput).toBeEditable();
    //
    await expect(this.loginFormPasswordInput).toBeVisible();
    await expect(this.loginFormPasswordInput).toBeEmpty();
    await expect(this.loginFormPasswordInput).toBeEditable();
    //
    await expect(this.loginFormSubmitCTA).toBeVisible();
    await expect(this.loginFormSubmitCTA).toBeEnabled();
    //
    await expect(this.loginFormCancelCTA).toBeVisible();
    await expect(this.loginFormCancelCTA).toBeEnabled();
    }

async submit_login(username: string, password: string) {
    await this.loginFormUsernameInput.fill(username);
    await this.loginFormPasswordInput.fill(password);
    await this.loginFormSubmitCTA.click();
}

async confirmRequiredFieldErrors(){
    await expect(this.loginError1).toBeVisible();
    await expect(this.loginError1).toHaveText('Name is a required field.');
    await expect(this.loginError2).toBeVisible();
    await expect(this.loginError2).toHaveText('Password is a required field.');
}

async cancel_login() {
    await this.loginFormCancelCTA.click();
}
}

export default LoginModule;