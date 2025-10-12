import { type Page, type Locator , expect } from '@playwright/test';
import siteCopy from '../data/siteCopy';

class HomePage {
  readonly page: Page;
  readonly appLogo: Locator
  readonly login_button: Locator;
  readonly password_input: Locator;
  readonly userName_input: Locator;
  readonly errorUSN: Locator;
  readonly errorPWD: Locator;
  readonly errorMsg: Locator;
  readonly errorMsgText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.appLogo = page.locator('//div[@class="login_logo"]')
    this.login_button = page.getByRole('button', { name: 'Login' });
    this.errorMsg = page.locator('//div[@class="error-message-container error"]');
    this.errorMsgText =  page.locator('//h3');
    this.userName_input = page.getByPlaceholder('Username')
    this.password_input = page.getByPlaceholder('Password');
    this.errorUSN = page.locator('(//input[@class="input_error form_input error"])[1]')
    this.errorPWD = page.locator('(//input[@class="input_error form_input error"])[2]')
  }

async confirmLoginPageUI(){
  await expect(this.page).toHaveTitle(/Swag Labs/);
  //
  await expect(this.appLogo).toBeVisible();
  await expect(this.appLogo).toHaveText(siteCopy.appName);
  //
  await expect(this.userName_input).toBeVisible();
  await expect(this.userName_input).toHaveAttribute('placeholder', 'Username');
  await expect(this.userName_input).toBeEditable();

  //
  await expect(this.password_input).toBeVisible();
  await expect(this.password_input).toHaveAttribute('placeholder', 'Password');
  await expect(this.password_input).toBeEditable();
  //
  await expect(this.login_button).toBeVisible();
  await expect(this.login_button).toHaveAttribute('type', 'submit');
  await expect(this.login_button).toHaveAttribute('name', 'Login');
  await expect(this.login_button).toBeEnabled();
  //
  await expect(this.errorMsgText).not.toBeVisible;
};

async submitLogin(email: string, password: string) {
  await this.userName_input.fill(email)
  await this.password_input.fill(password);
  await this.login_button.click();
};

async confirmSuccessfullyLoggedIn() {
  //ANTITHESIS
  await expect (this.errorUSN).not.toBeVisible();
  await expect (this.errorPWD).not.toBeVisible();
  await expect (this.errorMsg).not.toBeVisible();
  
  //SUCCESS
  await expect(this.page).toHaveURL(/.*profile/);
  await expect(this.page).toHaveTitle(/Swag Labs/);
  };

async confirmUnsuccessfulLogin(message: string) {
  await expect (this.errorMsg).toBeVisible();
  await expect(this.errorMsgText).toContainText(message);
  };

async confirmInvalidStateForRequiredFields(){
  await expect (this.errorUSN).toBeVisible();
  await expect (this.errorPWD).toBeVisible();
  await expect (this.errorMsg).toBeVisible();
  };
}

export default HomePage;